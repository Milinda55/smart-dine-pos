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

            </motion.div>


        </div>
    );
}

export default Model;