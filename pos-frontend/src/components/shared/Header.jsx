import React, {useState} from 'react';
import {FaBell, FaSearch, FaUserCircle} from "react-icons/fa";
import logo from '../../assets/react.svg'
import {useSelector} from "react-redux";
import {IoLogOut} from "react-icons/io5";

function Header() {

    const userData = useSelector(state => state.user);

    return (
        <header className="flex justify-between items-center py-4 px-8 bg-[#1a1a1a]">
            { /* LOGO */}
            <div className="flex items-center gap-2">
                <img src={logo} className="h-8 w-8" alt="restro logo"/>
                <h1 className="text-1g font-semibold text-[#f5f5f5]">Dine-pos</h1>
            </div>

            { /* SEARCH */}
            <div className="flex items-center gap-4 bg-[#1f1f1f] rounded-[15px] px-5 py-2 w-[500px]">
                <FaSearch className="text-[#f5f5f5]"/>
                <input
                    type="text"
                    placeholder="Search"
                    className="bg-[#1f1f1f] outline-none text-[#f5f5f5]"
                />
            </div>

            { /* Logged user */}
            <div className="flex items-center gap-4">
                <div className="bg-[#1a1a1a] rounded-[15px] p-3 cursor-pointer">
                    <FaBell className="text-[#f5f5f5] text-2xl"/>
                </div>

                <div className="flex items-center gap-3 cursor-pointer">
                    <FaUserCircle className="text-[#f5f5f5] text-4xl"/>
                    <div className="flx flex-col items-start">
                        <h1 className="text-md text-[#f5f5f5] font-semibold">{userData.name || "Test user"}</h1>
                        <p className="text-xs text-[#ababab] font-semibold">{userData.role || "Role"}</p>
                    </div>
                    <IoLogOut className="text-[#f5f5f5] text-4xl" />
                </div>
            </div>
        </header>
);
}

export default Header;