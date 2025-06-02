import React from 'react';
import {RiDeleteBin2Fill} from "react-icons/ri";
import {FaNotesMedical} from "react-icons/fa";
import {useDispatch, useSelector} from "react-redux";
import {removeItem} from "../../redux/slices/cartSlice.js";

function CartInfo() {

    const cartData = useSelector((state) => state.cart)
    const dispatch = useDispatch();

    const handleRemove = (id) => {
        dispatch(removeItem(id))
    }

    return (
        <div className="px-4 py-2">
            <h1 className="text-lg text-[#e4e4e4] font-semibold tracking-wide">Order Details</h1>
            <div className="mt-4 overflow-y-scroll h-[200px] scrollbar-hide">
                {cartData.length === 0 ? (<p className="text-[#ababab] text-lg flex justify-center items-center h-[200px]">Your cart is empty</p>) : cartData.map((item) => {

                    return (
                        <div className="bg-[#1f1f1f] rounded-lg px-4 mb-2 py-4">
                            <div className="flex items-center justify-between">
                                <h1 className="text-[#ababab] font-semibold tracking-wide text-md">{item.name}</h1>
                                <p className="text-[#ababab] font-semibold">x{item.quantity}</p>
                            </div>
                            <div className="flex items-center justify-between mt-3">
                                <div className="flex items-center gap-3">
                                    <RiDeleteBin2Fill onClick={() => handleRemove(item.id)} className="text-[#ababab] cursor-pointer" size={20}/>
                                    <FaNotesMedical className="text-[#ababab] cursor-pointer" size={20}/>
                                </div>
                                <p className="text-[#f5f5f5] text-md font-bold">Rs.{item.price}</p>
                            </div>
                        </div>)
                })}
            </div>
        </div>
    )}

export default CartInfo;