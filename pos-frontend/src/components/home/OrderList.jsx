import React from 'react';
import {FaCheckDouble, FaCircle} from "react-icons/fa";

function OrderList() {
    return (
        <div className="flex items-center gap-5 mb-2">
            <button className="bg-[#f6b100] p-2 text-xl font-bold rounded-lg">AM</button>
            <div className="flex items-center justify-between w-[100%]">
                <div className="flex flex-col items-start gap-1">
                    <h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wide">Order #123456</h1>
                    <p className="text-[#ababab] text-sm">8 Items</p>
                </div>
                <div>
                    <h1 className="text-[#f6b100] font-semibold border border-[#f6b100] rounded-lg p-1">Table No: 3</h1>
                </div>
                <div className="flex flex-col items-end gap-2">
                    <p className='text-green-600'><FaCheckDouble className="inline mr-2" /> Ready</p>
                    <p className="text-[#ababab] text-sm"><FaCircle className="inline mr-2 text-green-600" /> Ready to serve</p>
                </div>
            </div>
        </div>
    );
}

export default OrderList;