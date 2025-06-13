import React, {useState} from 'react';
import {MdCategory, MdTableBar} from "react-icons/md";
import {BiSolidDish} from "react-icons/bi";
import {Meta} from "react-router-dom";
import Metrics from "../components/dashboard/Metrics.jsx";
import RecentOrders from "../components/dashboard/RecentOrders.jsx";

const buttons = [
    { label: "Add Table", icon: <MdTableBar />, action: "table" },
    { label: "Add Category", icon: <MdCategory />, action: "category" },
    { label: "Add Dishes", icon: <BiSolidDish />, action: "dishes" },
];
const tabs = ["Metrics", "Orders", "Payments"];

function Dashboard() {

    const [activeTab, setActiveTab] = useState("Metrics")

    return (
        <div className="bg-[#1f1f1f] h-[calc(100vh-5rem)]">
            <div className="container mx-auto flex items-center justify-between py-14 px-6 md:px-4">
                <div className="flex items-center gap-3">
                    {buttons.map(({label, icon, action}) => {
                        return (
                            <button className="bg-[#1a1a1a] hover:bg-[#262626] px-8 py-3 rounded-lg text-[#f5f5f5] font-semibold text-md flex items-center gap-2">
                                {label} {icon}
                            </button>
                        );
                    })
                    }
                </div>

                <div className="flex items-center gap-3">
                    {tabs.map((tab) => {
                        return (
                            <button onClick={() => setActiveTab(tab)} className={`px-8 py-3 rounded-lg text-[#f5f5f5] font-semibold text-md flex items-center gap-2 ${activeTab === tab ? "bg-[#262626]" : "bg-[#1a1a1a] hover:bg-[#262626]"}`}>
                                {tab}
                            </button>
                        );
                        })
                    }
                </div>
            </div>
            {activeTab === "Metrics" && <Metrics />}
            {activeTab === "Orders" && <RecentOrders />}

        </div>
    );
}

export default Dashboard;