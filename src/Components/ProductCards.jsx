import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCart from '../hooks/useCart';

export default function ProductCards() {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const cards = [
    {
      id: 1,
      name: 'Premium Apple',
      description: 'Fresh and juicy apples picked from trusted farms.',
      amount: 120,
      quantity: '1 kg',
      image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: 2,
      name: 'Organic Banana',
      description: 'Naturally sweet bananas, perfect for daily nutrition.',
      amount: 60,
      quantity: '1 dozen',
      image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 3,
      name: 'Fresh Orange',
      description: 'Vitamin-rich oranges with bright citrus flavor.',
      amount: 90,
      quantity: '1 kg',
      image: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 4,
      name: 'Green Grapes',
      description: 'Crisp seedless grapes for snacks, juices, and salads.',
      amount: 140,
      quantity: '500 g',
      image: 'https://images.unsplash.com/photo-1660139890961-b1ea4738cf16?q=80&w=436&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 5,
      name: 'Crunchy Corn Flakes',
      description: 'Golden corn flakes for a quick and satisfying breakfast.',
      amount: 150,
      quantity: '250 g',
      image: 'https://images.unsplash.com/photo-1574156814151-ed649f815f4c?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 6,
      name: 'Whole Wheat Bread',
      description: 'Soft, healthy bread perfect for toast and sandwiches.',
      amount: 65,
      quantity: '1 loaf',
      image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 7,
      name: 'Fresh Milk',
      description: 'Creamy milk for cereal, tea, and everyday cooking.',
      amount: 70,
      quantity: '1 L',
      image: 'https://images.unsplash.com/photo-1634141510639-d691d86f47be?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 8,
      name: 'Farm Eggs',
      description: 'A dozen farm-fresh eggs for breakfast and baking.',
      amount: 100,
      quantity: '12 pcs',
      image: 'https://images.unsplash.com/photo-1608135145737-62e8bf31d5ef?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 9,
      name: 'Instant Oats',
      description: 'Healthy instant oats ready in minutes for a warm breakfast.',
      amount: 95,
      quantity: '300 g',
      image: 'https://images.unsplash.com/photo-1676885662779-a2ebd533547a?q=80&w=389&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 10,
      name: 'Masala Instant Noodles',
      description: 'Spicy instant noodles for a fast and tasty meal.',
      amount: 55,
      quantity: '2 packs',
      image: 'https://plus.unsplash.com/premium_photo-1694707235804-743100dacc47?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 11,
      name: 'Crunchy Potato Chips',
      description: 'Crispy chips for munchies, parties, and movie nights.',
      amount: 90,
      quantity: '180 g',
      image: 'https://images.unsplash.com/photo-1621447504864-d8686e12698c?q=80&w=769&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 12,
      name: 'Chocolate Biscuits',
      description: 'Rich chocolate biscuits for snack time and tea breaks.',
      amount: 85,
      quantity: '200 g',
      image: 'https://images.unsplash.com/photo-1590080874088-eec64895b423?q=80&w=594&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 13,
      name: 'Instant Soup Mix',
      description: 'Comforting instant soup for a warm snack in minutes.',
      amount: 70,
      quantity: '3 sachets',
      image: 'https://plus.unsplash.com/premium_photo-1705851313909-97dbf2bf54d6?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 14,
      name: 'Dish Wash Liquid',
      description: 'Powerful dish wash liquid for clean and shiny utensils.',
      amount: 145,
      quantity: '750 ml',
      image: 'https://images.unsplash.com/photo-1622614835318-7926e29f013c?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 15,
      name: 'Laundry Detergent',
      description: 'Fresh-smelling detergent for sparkling clean clothes.',
      amount: 220,
      quantity: '1 kg',
      image: 'https://images.unsplash.com/photo-1624372635282-b324bcdd4907?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 16,
      name: 'White Sugar Pack',
      description: 'Pure sugar for tea, desserts, and everyday cooking.',
      amount: 60,
      quantity: '1 kg',
      image: 'https://images.unsplash.com/photo-1769259362714-d442db54b706?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 17,
      name: 'Breakfast Granola',
      description: 'Nutty granola clusters with dried fruits for an energy boost.',
      amount: 175,
      quantity: '300 g',
      image: 'https://plus.unsplash.com/premium_photo-1673816475398-4877871a584b?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 18,
      name: 'Savory Snack Mix',
      description: 'A crunchy mix of nuts, crackers, and spices for munching.',
      amount: 110,
      quantity: '200 g',
      image: 'https://images.unsplash.com/photo-1699666397768-0126340e880a?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 19,
      name: 'Herbal Instant Tea',
      description: 'Quick-brew herbal tea bags for warm, calming refreshment.',
      amount: 95,
      quantity: '20 bags',
      image: 'https://plus.unsplash.com/premium_photo-1692134806288-dcc037abd42f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 20,
      name: 'Multi-Surface Cleaner',
      description: 'Fresh scent cleaner for countertops, floors, and kitchen surfaces.',
      amount: 160,
      quantity: '500 ml',
      image: 'https://plus.unsplash.com/premium_photo-1765806286748-2036017d1a9e?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    }
  ];

  return (
    <section className="bg-white px-6 py-14">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Products</h2>
          <p className="mt-3 text-gray-600">Choose fresh products at the best prices.</p>
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
          {cards.map((card) => (
            <div
              key={card.id}
              className="overflow-hidden rounded-[24px] border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="cursor-pointer" onClick={() => navigate(`/product/${card.id}`)}>
                <img className="h-64 w-full object-cover" src={card.image} alt={card.name} />

                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-semibold text-gray-900">{card.name}</h3>
                    <span className="rounded-md bg-green-100 px-2 py-1 text-sm font-semibold text-green-700">{card.quantity}</span>
                  </div>

                  <p className="mt-3 min-h-12 text-sm leading-6 text-gray-600">{card.description}</p>
                </div>
              </div>

              <div className="border-t border-gray-200 px-5 py-4">
                <div className="flex items-center justify-between">
                  <p className="text-xl font-bold text-gray-900">Rs. {card.amount}</p>
                  <button
                    type="button"
                    className="rounded-md bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-700"
                    onClick={() => {
                      addToCart(card);
                      navigate('/MyCart');
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}