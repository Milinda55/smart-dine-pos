import React, { useState } from 'react';
import { menus } from "../../constants/index.js";
import { GrRadialSelected } from "react-icons/gr";
import { FaShoppingCart } from "react-icons/fa";
import {useDispatch} from "react-redux";
import {addItems} from "../../redux/slices/cartSlice.js";

function MenuContainer() {
    const [selected, setSelected] = useState(menus[0]);
    const [itemCounts, setItemCounts] = useState(0);
    const dispatch = useDispatch();

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

    const handleAddToCart = (item) => {
        if (itemCounts === 0) return alert("Please add some items to cart");

        const {name, price} = item;
        const newObj = { id: new Date(), name, pricePerQuantity: price, quantity: itemCounts[item.id], price: itemCounts[item.id] * price };

        dispatch(addItems(newObj));
        setItemCounts(0);
    }

    return (
        <>
            <div className='grid grid-cols-4 px-10 py-2 gap-4 w-[100%]'>
                {
                    menus.map((item) => {
                        return (
                            <div key={item.id}
                                 className="flex flex-col items-start justify-between p-4 rounded-lg h-[100px] cursor-pointer"
                                 style={{ backgroundColor: item.bgColor }}
                                 onClick={() => {
                                     setSelected(item);
                                 }}
                            >
                                <div className="flex items-center justify-between w-full">
                                    <h1 className="text-[#f5f5f5] text-lg font-semibold">{item.icon} {item.name}</h1>
                                    {selected.id === item.id && <GrRadialSelected className="text-white size={20}" />}
                                </div>
                                <p className="text-[#ababab] text-sm font-semibold">{item.items.length} Items</p>
                            </div>
                        )
                    })
                }
            </div>
            <hr className="border-[#333] border-t-2 mt-4" />
            <div className='grid grid-cols-4 px-10 py-4 gap-4 w-[100%]'>
                {
                    selected.items.map((item) => {
                        const count = itemCounts[item.id] || 0;

                        return (
                            <div key={item.id}
                                 className="flex flex-col items-start justify-between p-4 rounded-lg h-[120px] cursor-pointer bg-[#1a1a1a] hover:bg-[#2c2c2c]"
                            >
                                <div className="flex items-start justify-between w-full">
                                    <h1 className="text-[#f5f5f5] text-lg font-semibold">{item.name}</h1>
                                    <button onClick={() => handleAddToCart(item)} className="bg-[#2e4a40] text-[#02ca3a] p-2 rounded-lg">
                                        <FaShoppingCart size={15} />
                                    </button>
                                </div>
                                <div className="flex items-center justify-between w-full">
                                    <p className="text-white text-lg font-bold">Rs.{item.price}</p>
                                    <div className="flex items-center justify-between bg-[#1f1f1f] rounded-lg px-2 py-1 gap-6">
                                        <button onClick={() => decrement(item.id)} className="text-yellow-500 text-xl cursor-pointer">&minus;</button>
                                        <span className="text-white">{count}</span>
                                        <button onClick={() => increment(item.id)} className="text-yellow-500 text-xl cursor-pointer">&#43;</button>
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
