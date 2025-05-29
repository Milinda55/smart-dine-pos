import React, {useState} from 'react';
import BottomNav from "../components/shared/BottomNav.jsx";
import BackButton from "../components/shared/BackButton.jsx";
import {FaNotesMedical, FaUserCircle} from "react-icons/fa";
import {MdRestaurantMenu} from "react-icons/md";
import MenuContainer from "../components/menu/MenuContainer.jsx";
import {RiDeleteBin2Fill} from "react-icons/ri";

function Menu() {

    const [status, setStatus] = useState("All");

    return (
        <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden flex gap-3">

            {/*{ Left div }*/}
            <div className="flex-[3]">

                <div className="flex justify-between items-center px-10 py-4">
                    <div className="flex items-center gap-4">
                        <BackButton/>
                        <h1 className="text-[#f5f5f5] text-2xl font-bold tracking-wide">Menu</h1>
                    </div>
                    <div className="flex items-center justify-around gap-4">
                        <div className="flex items-center gap-3 cursor-pointer">
                            <MdRestaurantMenu className="text-[#f5f5f5] text-4xl"/>
                            <div className="flx flex-col items-start">
                                <h1 className="text-md text-[#f5f5f5] font-semibold">Customer name</h1>
                                <p className="text-xs text-[#ababab] font-semibold">Table 1</p>
                            </div>
                        </div>
                    </div>
                </div>

                <MenuContainer/>

            </div>

            {/*{ Right div }*/}
            <div className="flex-[1] bg-[#1a1a1a] mt-4 mr-3 h-[780px] rounded-lg pt-2">
                {/*Customer Info*/}
                <div className="flex items-center justify-between px-4 py-3">
                    <div className="flex flex-col items-start">
                        <h1 className="text-md text-[#f5f5f5] font-semibold tracking-wide">Customer Name</h1>
                        <p className="text-xs text-[#ababab] font-medium mt-1">#101/Dine in</p>
                        <p className="text-xs text-[#ababab] font-medium mt-2">January 19, 2025 05:34 PM</p>
                    </div>
                    <button className="bg-[#f6b100] p-3 text-xl font-bold rounded-lg">CN</button>
                </div>
                <hr className="border-[#333] border-t-2"/>

                {/*Cart Details*/}
                <div className="px-4 py-2">
                    <h1 className="text-lg text-[#e4e4e4] font-semibold tracking-wide">Order Details</h1>
                    <div className="mt-4 overflow-y-scroll h-[380px] scrollbar-hide">
                        <div className="bg-[#1f1f1f] rounded-lg px-4 mb-2 py-4">
                            <div className="flex items-center justify-between">
                                <h1 className="text-[#ababab] font-semibold tracking-wide text-md">Chicken rice</h1>
                                <p className="text-[#ababab] font-semibold">x2</p>
                            </div>
                            <div className="flex items-center justify-between mt-3">
                                <div className="flex items-center gap-3">
                                    <RiDeleteBin2Fill className="text-[#ababab] cursor-pointer" size={20}/>
                                    <FaNotesMedical className="text-[#ababab] cursor-pointer" size={20}/>
                                </div>
                                <p className="text-[#f5f5f5] text-md font-bold">Rs.250</p>
                            </div>

                        </div>
                    </div>
                </div>

                {/*Bill Details*/}
            </div>

            <BottomNav/>
        </section>
    );
}

export default Menu;