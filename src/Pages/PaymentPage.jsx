import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { MdLockOutline, MdPayment } from 'react-icons/md';
import useCart from '../hooks/useCart';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8000';
const CHECKOUT_STORAGE_KEY = 'blinkit_checkout';
const USER_STORAGE_KEY = 'blinkit_user';

const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    if (window.Razorpay) {
      resolve(true);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

export default function PaymentPage() {
  const navigate = useNavigate();
  const { cart, clearCart } = useCart();
  const [checkoutData, setCheckoutData] = useState(null);
  const [user, setUser] = useState(null);
  const cartItems = Object.values(cart);
  const total = cartItems.reduce((sum, item) => sum + item.amount * item.quantity, 0) + (cartItems.length ? 25 : 0);

  useEffect(() => {
    const savedCheckout = localStorage.getItem(CHECKOUT_STORAGE_KEY);
    const savedUser = localStorage.getItem(USER_STORAGE_KEY);
    if (savedCheckout) {
      setCheckoutData(JSON.parse(savedCheckout));
    }
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handlePayment = async (event) => {
    event.preventDefault();

    if (cartItems.length === 0) {
      toast.error('Cart empty hai');
      return;
    }

    if (!user) {
      toast.error('Login karke payment karo');
      navigate('/login');
      return;
    }

    try {
      const scriptLoaded = await loadRazorpayScript();

      if (!scriptLoaded) {
        throw new Error('Razorpay checkout load nahi hua');
      }

      if (checkoutData) {
        await fetch(`${API_BASE}/api/customers/${user.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            address: `${checkoutData.street}, ${checkoutData.city} - ${checkoutData.pincode}`,
            phone: checkoutData.phone,
          }),
        });
      }

      const razorpayOrderResponse = await fetch(`${API_BASE}/api/payments/razorpay/order`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: total,
          currency: 'INR',
          receipt: `blinkit_${Date.now()}`,
          notes: {
            customerId: user.id,
            items: String(cartItems.length),
          },
        }),
      });
      const razorpayOrderData = await razorpayOrderResponse.json();

      if (!razorpayOrderResponse.ok) {
        throw new Error(razorpayOrderData.message || 'Razorpay order create failed');
      }

      const options = {
        key: razorpayOrderData.keyId,
        amount: razorpayOrderData.order.amount,
        currency: razorpayOrderData.order.currency,
        name: 'Blinkit',
        description: 'Grocery order payment',
        order_id: razorpayOrderData.order.id,
        prefill: {
          name: checkoutData?.name || user.name || '',
          email: checkoutData?.email || user.email || '',
          contact: checkoutData?.phone || user.phone || '',
        },
        theme: {
          color: '#16a34a',
        },
        handler: async (response) => {
          try {
            const verifyResponse = await fetch(`${API_BASE}/api/payments/razorpay/verify`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                ...response,
                customerId: user.id,
                cartItems,
                paymentMethod: 'card',
              }),
            });
            const verifyData = await verifyResponse.json();

            if (!verifyResponse.ok) {
              throw new Error(verifyData.message || 'Payment verify failed');
            }

            clearCart();
            localStorage.removeItem(CHECKOUT_STORAGE_KEY);
            toast.success('Payment successful and order placed!');
            navigate('/order-success', { replace: true });
          } catch (verifyError) {
            console.error('Payment verification error:', verifyError);
            toast.error('Payment verify nahi ho paya');
          }
        },
        modal: {
          ondismiss: () => {
            toast.info('Payment cancelled');
          },
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error('Payment error:', error);
      toast.error('Payment ya order process mein problem hai');
    }
  };

  return (
    <section className="bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-3xl rounded-md bg-white p-6 shadow-sm">
        <div className="flex items-center gap-2 border-b border-gray-100 pb-4">
          <MdLockOutline className="text-xl text-green-600" />
          <h1 className="text-2xl font-bold text-gray-950">Secure Payment</h1>
        </div>

        <form className="mt-6 grid gap-4" onSubmit={handlePayment}>
          <div className="rounded-md border border-green-200 bg-green-50 p-4 text-sm font-semibold text-green-800">
            Payable amount: Rs. {total}
          </div>
          <div className="rounded-md border border-gray-200 bg-gray-50 p-4 text-sm text-gray-700">
            Card, UPI, wallet aur netbanking details Razorpay secure checkout me fill honge.
          </div>
          <button className="mt-2 flex items-center justify-center gap-2 rounded-md bg-green-600 px-5 py-3 font-bold text-white transition hover:bg-green-700" type="submit">
            <MdPayment /> Pay with Razorpay
          </button>
        </form>
      </div>
    </section>
  );
}
