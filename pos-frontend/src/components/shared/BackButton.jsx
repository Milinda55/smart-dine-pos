import React from 'react';
import {IoArrowBackOutline} from "react-icons/io5";
import {useNavigate} from "react-router-dom";

function BackButton() {

    const navigate = useNavigate();

    return (
        <button className="bg-[#025cca] font-bold rounded-full p-3 text-white text-xl cursor-pointer" onClick={() => navigate(-1)}>
            <IoArrowBackOutline />
        </button>
    );
}

export default BackButton;