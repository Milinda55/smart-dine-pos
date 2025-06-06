import React from 'react';
import restaurant from "../assets/images/restaurant.jpg";
import logo from "../assets/images/logo.png"
import Register from "../components/auth/Register.jsx";

function Auth() {
    return (
        <div className="flex min-h-screen w-full overflow-hidden">
            { /* Left Section */ }
            <div className="w-2/3 relative h-screen overflow-hidden">
                <img
                    src={restaurant}
                    alt="Restaurant"
                    className="w-full h-full object-cover select-none"
                />

                <div className="absolute inset-0 bg-black opacity-80"></div>

                { /* Centered Quote */ }
                <div className="absolute inset-0 flex flex-col justify-end items-start pb-10 px-8">
                    <blockquote className="text-xl italic text-white">
                        "Serve customers the best food with prompt and friendly service in a
                        welcoming atmosphere, and they'll keep coming back."
                        <footer className="mt-4 text-yellow-400 not-italic">
                            - Founder of the Restaurant
                        </footer>
                    </blockquote>
                </div>
            </div>

            { /* Right Section */ }
            <div className="w-1/3 h-screen bg-[#1a1a1a] p-5 px-10 overflow-y-auto">
                <div className="flex flex-col items-center gap-2">
                    <img src={logo} alt="Restro Logo" className="h-16 border-2 border-gray-600 rounded-full p-1" />
                    <h1 className="text-lg  font-semibold text-[#f5f5f5] tracking-wide">Restro</h1>
                </div>

                <h2 className="text-2xl text-center mt-2 font-semibold text-yellow-400 mb-5">
                    Employee Registration
                </h2>

                { /* Components */ }

                <Register />

                <div className="flex justify-center mt-3">
                    <p className="text-sm text-[#ababab]">
                        Already have an account?
                        <a className="text-yellow-400 font-semibold ml-2 hover:underline" href="#">
                            Sign in
                        </a>
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Auth;