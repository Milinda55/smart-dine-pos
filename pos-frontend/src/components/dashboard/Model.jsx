import React, {useState} from 'react';
import {motion} from 'framer-motion';
import {IoMdClose} from "react-icons/io";
import {useMutation} from "@tanstack/react-query";
import {addTable} from "../../https/index.js";
import {enqueueSnackbar} from "notistack";

function Model({setIsTableModelOpen}) {

    const [tableData, setTableData] = useState({
        tableNo: "",
        seats: ""
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTableData((prev) => ({...prev, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(tableData);
        tableMutation.mutate(tableData)
    }

    const handleCloseModal = () => {
        setIsTableModelOpen(false)
    }

    const tableMutation = useMutation({
        mutationFn: (reqData) => addTable(reqData),
        onSuccess: (data) => {
            setIsTableModelOpen(false);
            enqueueSnackbar(data.message, { variant: "success"})
            console.log(data)
        },
        onError: (error) => {
            const { data } = error.response
            enqueueSnackbar(data.message, { variant: "error"})
            console.log(error);
        }
    })

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
                <form onSubmit={handleSubmit} className="space-y-4 mt-10">
                    <div>
                        <label className="block text-[#ababab] mb-2 mt-3 text-sm font-medium">
                            Table Number
                        </label>
                    </div>
                    <div className="flex item-center rounded-lg p-3 px-4 bg-[#1f1f1f]">
                        <input type="number"
                               name="tableNo"
                               value={tableData.tableNo}
                               onChange={handleInputChange}
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
                               value={tableData.seats}
                               onChange={handleInputChange}
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