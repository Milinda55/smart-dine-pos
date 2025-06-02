import React, {useState} from 'react';
import {FaHome} from "react-icons/fa";
import {MdOutlineReorder, MdTableBar} from "react-icons/md";
import {CiCircleMore} from "react-icons/ci";
import {BiSolidDish} from "react-icons/bi";
import {useLocation, useNavigate} from "react-router-dom";
import Modal from "./Modal.jsx";
import {useDispatch} from "react-redux";
import {setCustomer} from "../../redux/slices/customerSlice.js";

function BottomNav() {

    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [guestCount, setGuestCount] = useState(0);
    const [name, setName] = useState();
    const [phone, setPhone] = useState();

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const increment = () => {
        if (guestCount >= 6) return;
        setGuestCount((prev) => prev + 1);
    }

    const decrement = () => {
        if (guestCount <= 0) return;
        setGuestCount((prev) => prev - 1);
    }

    const isActive = (path) => location.pathname === path;

    const handleCreateOrder = () => {
        // send the data to the store
        dispatch(setCustomer({name, phone, guests: guestCount}));
        navigate("/tables");
    }

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-[#262626] p-2 h-16 flex justify-around">
            <button onClick={() => navigate("/")}
                    className={`flex items-center justify-center font-bold ${isActive("/") ? "text-[#f5f5f5] bg-[#343434]" : "text-[#ababab]"} w-[200px] rounded-[20px] hover:bg-[#343434]`}>
                <FaHome className="inline mr-4" size={20}/>Home
            </button>
            <button onClick={() => navigate("/orders")}
                    className={`flex items-center justify-center font-bold ${isActive("/orders") ? "text-[#f5f5f5] bg-[#343434]" : "text-[#ababab]"} w-[200px] rounded-[20px] hover:bg-[#343434]`}>
                <MdOutlineReorder
                className="inline mr-4" size={20}/>Orders
            </button>
            <button onClick={() => navigate("/tables")}
                    className={`flex items-center justify-center font-bold ${isActive("/tables") ? "text-[#f5f5f5] bg-[#343434]" : "text-[#ababab]"} w-[200px] rounded-[20px] hover:bg-[#343434]`}>
            <MdTableBar
                className="inline mr-4" size={20}/>Tables
            </button>
            <button className="flex items-center justify-center text-[#f5f5f5] w-[200px]"><CiCircleMore
                className="inline mr-4" size={20}/>More
            </button>

            <button
                disabled={isActive("/tables") || isActive("/menu")}
                onClick={openModal}
                    className="absolute bottom-6 bg-[#f68100] text-[#f5f5f5] rounded-full p-3 items-center cursor-pointer"><BiSolidDish
                size={30}/></button>

            <Modal isOpen={isModalOpen} onClose={closeModal} title="Create Order">
                <div>
                    <label className="block text-[#ababab] mb-2 text-sm font-medium">Customer Name</label>
                    <div className="flex items-center bg-[#1f1f1f] rounded-lg px-4 p-3">
                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="bg-transparent flex-1 text-white focus:outline-none"
                               placeholder="Enter Customer Name" name="" id=""/>
                    </div>
                </div>
                <div>
                    <label className="block text-[#ababab] mb-2 mt-3 text-sm font-medium">Customer Phone</label>
                    <div className="flex items-center bg-[#1f1f1f] rounded-lg px-4 p-3">
                        <input value={phone} onChange={(e) => setPhone(e.target.value)} type="number" className="bg-transparent flex-1 text-white focus:outline-none"
                               placeholder="Enter Customer Phone" name="" id=""/>
                    </div>
                </div>
                <div>
                    <label className="block mt-3 text-[#ababab] mb-2 text-sm font-medium">Guest</label>
                    <div className="flex items-center justify-between bg-[#1f1f1f] rounded-lg px-4 py-3">
                        <button onClick={decrement} className="text-yellow-500 text-2xl cursor-pointer">&minus;</button>
                        <span className="text-white">{guestCount} Person</span>
                        <button onClick={increment} className="text-yellow-500 text-2xl cursor-pointer">&#43;</button>
                    </div>
                    <button onClick={handleCreateOrder}
                            className="bg-[#f68100] text-[#f5f5f5] rounded-lg py-3 w-full mt-8 text-center font-semibold hover:bg-[#f6b100] cursor-pointer">
                        Create Order
                    </button>
                </div>
            </Modal>

        </div>
    );
}

export default BottomNav;