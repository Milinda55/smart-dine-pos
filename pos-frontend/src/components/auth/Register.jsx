import React, {useState} from 'react';

function Register() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        role: ""
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }

    const handleRoleSelection = (selectedRole) => {
        setFormData({...formData, role: selectedRole})
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/*Name*/}
                <div>
                    <label className="block text-[#ababab] mb-2 text-sm font-medium">
                        Employee Name
                    </label>
                </div>
                <div className="flex item-center rounded-lg p-3 px-4 bg-[#1f1f1f]">
                    <input type="text"
                           name="name"
                           value={formData.name}
                           onChange={handleChange}
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
                           value={formData.email}
                           onChange={handleChange}
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
                           value={formData.phone}
                           onChange={handleChange}
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
                           value={formData.password}
                           onChange={handleChange}
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
                                    onClick={() => handleRoleSelection(role)}
                                    className={`bg-[#1f1f1f] px-4 py-3 w-full rounded-lg text-[#ababab] ${formData.role === role ? "bg-yellow-900 text-white" : ""}`}
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