import React from 'react';
import {FaHome} from "react-icons/fa";
import {MdOutlineReorder, MdTableBar} from "react-icons/md";
import {CiCircleMore} from "react-icons/ci";
import {BiSolidDish} from "react-icons/bi";
import {useNavigate} from "react-router-dom";

function BottomNav() {

    const navigate = useNavigate();

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-[#262626] p-2 h-16 flex justify-around">
            <button onClick={() => navigate("/")} className="flex items-center justify-center text-[#f5f5f5] bg-[#343434] w-[200px] rounded-[20px]"><FaHome className="inline mr-4" size={20} />Home</button>
            <button onClick={() => navigate("/orders")} className="flex items-center justify-center text-[#f5f5f5] w-[200px]"><MdOutlineReorder className="inline mr-4" size={20} />Orders</button>
            <button onClick={() => navigate("/tables")} className="flex items-center justify-center text-[#f5f5f5] w-[200px]"><MdTableBar className="inline mr-4" size={20} />Tables</button>
            <button className="flex items-center justify-center text-[#f5f5f5] w-[200px]"><CiCircleMore className="inline mr-4" size={20} />More</button>

            <button className="absolute bottom-6 bg-[#f68100] text-[#f5f5f5] rounded-full p-3 items-center"><BiSolidDish size={30} /></button>
        </div>
    );
}

export default BottomNav;