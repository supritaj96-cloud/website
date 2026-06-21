import React from "react";
import { Link } from "react-router-dom";

function Header() {

    
    return (
        <>

            <header className="sticky top-0 z-[100] flex gap-[30px] w-full h-[86px] px-[25px] py-[12px] items-center box-border border-b border-[#e5e5e5] bg-white shadow-[0_1px_5px_rgba(0,0,0,0.08)]">
        
        
        
            <div className="min-w-[120px] flex items-center">
                <span className="text-2xl font-black tracking-tight text-[#facc15]">blink</span>
                <span className="text-2xl font-black tracking-tight text-[#0c831f]">it</span>
            </div>

            <div className="w-px h-[50px] bg-[#e5e5e5]" />

            <div>
                <h4 className="m-0 text-[18px] font-bold">Delivery in 10 minutes</h4>
                <p className="mt-1 text-[13px]">Lucknow, Uttar Pradesh</p>
            </div>

            <div className="flex-1 flex items-center bg-[#f8f8f8] border border-[#f0f0f0] rounded-[12px] px-3 max-w-[700px]">
                <span className="mr-2">🔍</span>
                <input
                    type="text"
                    placeholder="Search for products..."
                    className="flex-1 py-[14px] bg-transparent outline-none border-none"
                />
            </div>
            
            <Link to="/login">
                <button className="min-w-[120px] rounded-[8px] border border-[#d1d5db] bg-white px-5 py-2 text-[15px] font-semibold text-[#111827] shadow-sm transition duration-200 hover:border-[#0c831f] hover:bg-[#f7fcf7] hover:text-[#0c831f]">
                    Login
                </button>
            </Link>

            <Link to="/MyCart">
                <button className="min-w-[120px] rounded-[8px] bg-[#0c831f] px-5 py-2 text-[15px] font-semibold text-white border-none cursor-pointer transition duration-200 hover:bg-[#0b6f1b]">
                    🛒My Cart
                </button>
            </Link>
        </header>
    
    </>);
}
export default Header;