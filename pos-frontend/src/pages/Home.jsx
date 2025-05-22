import React from 'react';
import BottomNav from "../components/shared/BottomNav.jsx";
import Greetings from "../components/home/Greetings.jsx";

function Home() {
    return (
        <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden flex gap-3">
            { /* Left Div */ }
            <div className="flex-[3]">
                <Greetings />
            </div>

            { /* Right Div */ }

            <div className="flex-[2] bg-[#1a1a1a] ">
            </div>
            <BottomNav />

        </section>
    );
}

export default Home;