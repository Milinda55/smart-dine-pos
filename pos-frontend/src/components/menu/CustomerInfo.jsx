import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {formatDate, getAvatarName} from "../../utils/index.js";

function CustomerInfo() {

    const customerData = useSelector((state) => state.customer);
    const [dateTime, setDateTime] = useState(new Date());

    return (
        <div className="flex items-center justify-between px-4 py-3">
            <div className="flex flex-col items-start">
                <h1 className="text-md text-[#f5f5f5] font-semibold tracking-wide">{customerData.customerName || "Customer Name"}</h1>
                <p className="text-xs text-[#ababab] font-medium mt-1">#{customerData.orderId || "N/A"} / Dine in</p>
                <p className="text-xs text-[#ababab] font-medium mt-2">{formatDate(dateTime)}</p>
            </div>
            <button className="bg-[#f6b100] p-3 text-xl font-bold rounded-lg">{getAvatarName(customerData.customerName) || "CN"}</button>
        </div>
    );
}

export default CustomerInfo;