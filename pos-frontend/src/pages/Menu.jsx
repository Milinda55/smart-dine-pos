import React, {useState} from 'react';
import BottomNav from "../components/shared/BottomNav.jsx";
import BackButton from "../components/shared/BackButton.jsx";
import {FaUserCircle} from "react-icons/fa";
import {MdRestaurantMenu} from "react-icons/md";
import MenuContainer from "../components/menu/MenuContainer.jsx";

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

                <MenuContainer />
            </div>

            {/*{ Right div }*/}
            <div className="flex-[1] bg-[#535113]">

            </div>

            <BottomNav/>
        </section>
    );
}

export default Menu;