import React, { useState } from 'react';
import { menus } from "../../constants/index.js";
import { GrRadialSelected } from "react-icons/gr";
import { FaShoppingCart } from "react-icons/fa";

function MenuContainer() {
    const [selected, setSelected] = useState(menus[0]);
    const [itemCounts, setItemCounts] = useState({}); // 👈 Use object to store item counts

    const increment = (id) => {
        setItemCounts((prev) => {
            const current = prev[id] || 0;
            if (current >= 4) return prev;
            return { ...prev, [id]: current + 1 };
        });
    }

    const decrement = (id) => {
        setItemCounts((prev) => {
            const current = prev[id] || 0;
            if (current <= 0) return prev;
            return { ...prev, [id]: current - 1 };
        });
    }

    return (
        <>
            <div className='grid grid-cols-4 px-10 py-2 gap-4 w-[100%]'>
                {
                    menus.map((menu) => {
                        return (
                            <div key={menu.id}
                                 className="flex flex-col items-start justify-between p-4 rounded-lg h-[100px] cursor-pointer"
                                 style={{ backgroundColor: menu.bgColor }}
                                 onClick={() => {
                                     setSelected(menu);
                                 }}
                            >
                                <div className="flex items-center justify-between w-full">
                                    <h1 className="text-[#f5f5f5] text-lg font-semibold">{menu.icon} {menu.name}</h1>
                                    {selected.id === menu.id && <GrRadialSelected className="text-white size={20}" />}
                                </div>
                                <p className="text-[#ababab] text-sm font-semibold">{menu.items.length} Items</p>
                            </div>
                        )
                    })
                }
            </div>
            <hr className="border-[#333] border-t-2 mt-4" />
            <div className='grid grid-cols-4 px-10 py-4 gap-4 w-[100%]'>
                {
                    selected.items.map((menu) => {
                        const count = itemCounts[menu.id] || 0;

                        return (
                            <div key={menu.id}
                                 className="flex flex-col items-start justify-between p-4 rounded-lg h-[120px] cursor-pointer bg-[#1a1a1a] hover:bg-[#2c2c2c]"
                            >
                                <div className="flex items-start justify-between w-full">
                                    <h1 className="text-[#f5f5f5] text-lg font-semibold">{menu.name}</h1>
                                    <button className="bg-[#2e4a40] text-[#02ca3a] p-2 rounded-lg">
                                        <FaShoppingCart size={15} />
                                    </button>
                                </div>
                                <div className="flex items-center justify-between w-full">
                                    <p className="text-white text-lg font-bold">Rs.{menu.price}</p>
                                    <div className="flex items-center justify-between bg-[#1f1f1f] rounded-lg px-2 py-1 gap-6">
                                        <button onClick={() => decrement(menu.id)} className="text-yellow-500 text-xl cursor-pointer">&minus;</button>
                                        <span className="text-white">{count}</span>
                                        <button onClick={() => increment(menu.id)} className="text-yellow-500 text-xl cursor-pointer">&#43;</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}

export default MenuContainer;
