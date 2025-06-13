import React from 'react';
import {motion} from 'framer-motion';
import {IoMdClose} from "react-icons/io";

function Model({setIsTableModelOpen}) {

    const handleCloseModal = () => {
        setIsTableModelOpen(false)
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <motion.div
                initial={{opacity: 0, scale: 0.9}}
                animate={{opacity: 1, scale: 1}}
                exit={{opacity: 0, scale: 0.9}}
                transition={{duration: 0.3, ease: "easeInOut"}}
                className="bg-[#262626] p-6 rounded-lg shadow-lg w-96"
            >

                {/*Model Header*/}
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-[#f5f5f5] text-xl font-semibold">Add Table</h2>
                    <button onClick={handleCloseModal} className="text-[#f5f5f5] hover:text-red-500">
                        <IoMdClose size={24} />
                    </button>
                </div>

                {/*Model Body*/}
                <form className="space-y-4 mt-10">
                    <div>
                        <label className="block text-[#ababab] mb-2 mt-3 text-sm font-medium">
                            Table Number
                        </label>
                    </div>
                    <div className="flex item-center rounded-lg p-3 px-4 bg-[#1f1f1f]">
                        <input type="number"
                               name="tableNo"
                               className='bg-transparent flex-1 text-white focus:outline-none'
                               required
                        />
                    </div>

                    <div>
                        <label className="block text-[#ababab] mb-2 mt-3 text-sm font-medium">
                            Number of Seats
                        </label>
                    </div>
                    <div className="flex item-center rounded-lg p-3 px-4 bg-[#1f1f1f]">
                        <input type="number"
                               name="seats"
                               className='bg-transparent flex-1 text-white focus:outline-none'
                               required
                        />
                    </div>
                    <button type="submit" className="w-full rounded-lg mt-6 py-3 text-lg bg-yellow-400 text-gray-900 font-bold cursor-pointer" >
                        Add Table
                    </button>
                </form>


            </motion.div>
        </div>
    );
}

export default Model;