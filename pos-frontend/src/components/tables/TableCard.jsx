import React from 'react';
import {FaCheckDouble, FaLongArrowAltRight} from "react-icons/fa";
import {getBgColor} from "../../utils/index.js";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {updateTable} from "../../redux/slices/customerSlice.js";

function TableCard({keys, name, status, initials, seats, customerName}) {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleClick = (name) => {
        if (status === "Booked") return;
        dispatch(updateTable({tableNo: name}))
        navigate('/menu');
    }

    return (
        <div onClick={() => handleClick(name)} key={keys} className="w-[300px] bg-[#262626] hover:bg-[#2c2c2c] p-4 rounded-lg mb-4 cursor-pointer">
            <div className="flex items-center justify-between px-1">
                <h1 className="text-[#f5f5f5] text-xl font-semibold">Table <FaLongArrowAltRight className="text-[#ababab] ml-2 inline" /> {name}</h1>
                <p className={`${status === "Booked" ? "text-green-600 bg-[#2e4a40] font-bold text-sm" : "bg-[#664a04] text-[#f5f5f5] font-bold text-sm"} px-2 py-1 rounded-lg`}>{status}</p>
            </div>
            <div className="flex items-center justify-center mt-5 mb-9">
                <h1 className={`text-white rounded-full p-5 text-xl`} style={{
                    backgroundColor: (customerName !== null && customerName !== undefined) ? getBgColor() : "#1f1f1f",
                }}>{initials}</h1>
            </div>
            <p className="text-[#ababab] text-xs">Seats: <span className="text-[#f5f5f5]">{seats}</span></p>
        </div>
    );
}

export default TableCard;