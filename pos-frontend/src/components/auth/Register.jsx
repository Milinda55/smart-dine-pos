import React from 'react';

function Register() {
    return (
        <div>
            <form>
                {/*Name*/}
                <div>
                    <label className="block text-[#ababab] mb-2 text-sm font-medium">
                        Employee Name
                    </label>
                </div>
                <div className="flex item-center rounded-lg p-3 px-4 bg-[#1f1f1f]">
                    <input type="text"
                           name="name"
                           placeholder="Enter employee name"
                           className='bg-transparent flex-1 text-white focus:outline-none'
                           required
                    />
                </div>
                {/*Email*/}
                <div>
                    <label className="block text-[#ababab] mb-2 mt-3 text-sm font-medium">
                        Employee Email
                    </label>
                </div>
                <div className="flex item-center rounded-lg p-3 px-4 bg-[#1f1f1f]">
                    <input type="email"
                           name="email"
                           placeholder="Enter employee email"
                           className='bg-transparent flex-1 text-white focus:outline-none'
                           required
                    />
                </div>
                {/*Phone*/}
                <div>
                    <label className="block text-[#ababab] mb-2 mt-3 text-sm font-medium">
                        Employee Phone
                    </label>
                </div>
                <div className="flex item-center rounded-lg p-3 px-4 bg-[#1f1f1f]">
                    <input type="text"
                           name="phone"
                           placeholder="Enter employee phone"
                           className='bg-transparent flex-1 text-white focus:outline-none'
                           required
                    />
                </div>
                {/*Password*/}
                <div>
                    <label className="block text-[#ababab] mb-2 mt-3 text-sm font-medium">
                        Password
                    </label>
                </div>
                <div className="flex item-center rounded-lg p-3 px-4 bg-[#1f1f1f]">
                    <input type="password"
                           name="password"
                           placeholder="Enter password"
                           className='bg-transparent flex-1 text-white focus:outline-none'
                           required
                    />
                </div>
                {/*Role*/}
                <div>
                    <label className="block text-[#ababab] mb-2 mt-3 text-sm font-medium">
                        Choose your role
                    </label>
                    <div className="flex items-center gap-3 mt-4">
                        {["Waiter", "Cashier", "Admin"].map((role)=>{
                            return (
                                <button
                                    key={role}
                                    type="button"
                                    className="bg-[#1f1f1f] px-4 py-3 w-full rounded-lg text-[#ababab]"
                                    >
                                    {role}
                                </button>
                            );
                        })}
                    </div>
                </div>
                <button type="submit" className="w-full rounded-lg mt-6 py-3 text-lg bg-yellow-400 text-gray-900 font-bold" >
                    Sign up
                </button>
            </form>
        </div>
    );
}

export default Register;