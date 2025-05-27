import React, {useState} from 'react';
import BottomNav from "../components/shared/BottomNav.jsx";
import BackButton from "../components/shared/BackButton.jsx";
import TableCard from "../components/tables/TableCard.jsx";
import {tables} from "../constants/index.js";

function Tables() {

    const [status, setStatus] = useState("All");

    return (
        <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden">
            <div className="flex justify-between items-center px-10 py-4">
                <div className="flex items-center gap-4">
                    <BackButton />
                    <h1 className="text-[#f5f5f5] text-2xl font-bold tracking-wide">Tables</h1>
                </div>
                <div className="flex items-center justify-around gap-4">
                    <button onClick={() => setStatus("All")} className={`text-[#ababab] text-lg ${status === "All" && "bg-[#383838] rounded-lg px-5 py-2"} rounded-lg px-5 py-2 font-semibold`}>All</button>
                    <button onClick={() => setStatus("booked")} className={`text-[#ababab] text-lg ${status === "booked" && "bg-[#383838] rounded-lg px-5 py-2"} rounded-lg px-5 py-2 font-semibold`}>Booked</button>
                </div>
            </div>

            <div className="flex flex-wrap gap-6 px-10 py-4 overflow-y-scroll h-[calc(100vh-5rem-10rem)] scrollbar-hide">
                {
                    tables.map((table) => {
                        return (
                            <TableCard key={table.id} id={table.id} name={table.name} status={table.status} initials={table.initial} seats={table.seats} />
                        )
                    })
                }
            </div>

            <BottomNav />
        </section>
    );
}

export default Tables;