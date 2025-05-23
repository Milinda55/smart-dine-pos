import React, {useState} from 'react';
import BottomNav from "../components/shared/BottomNav.jsx";
import OrderCard from "../components/orders/OrderCard.jsx";
import BackButton from "../components/shared/BackButton.jsx";

function Orders() {

    const [status, setStatus] = useState("All");

    return (
        <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden">
            <div className="flex justify-between items-center px-10 py-4">
                <div className="flex items-center gap-4">
                    <BackButton />
                    <h1 className="text-[#f5f5f5] text-2xl font-bold tracking-wide">Orders</h1>
                </div>
                <div className="flex items-center justify-around gap-4">
                    <button onClick={() => setStatus("All")} className={`text-[#ababab] text-lg ${status === "All" && "bg-[#383838] rounded-lg px-5 py-2"} rounded-lg px-5 py-2 font-semibold`}>All</button>
                    <button onClick={() => setStatus("progress")} className={`text-[#ababab] text-lg ${status === "progress" && "bg-[#383838] rounded-lg px-5 py-2"} rounded-lg px-5 py-2 font-semibold`}>In Progress</button>
                    <button onClick={() => setStatus("ready")} className={`text-[#ababab] text-lg ${status === "ready" && "bg-[#383838] rounded-lg px-5 py-2"} rounded-lg px-5 py-2 font-semibold`}>Ready</button>
                    <button onClick={() => setStatus("complete")} className={`text-[#ababab] text-lg ${status === "complete" && "bg-[#383838] rounded-lg px-5 py-2"} rounded-lg px-5 py-2 font-semibold`}>Completed</button>
                </div>
            </div>

            <div className="flex flex-wrap gap-6 px-16 py-4 overflow-y-scroll h-[calc(100vh-5rem-10rem)] scrollbar-hide">
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
            </div>
            <BottomNav />
        </section>
    );
}

export default Orders;