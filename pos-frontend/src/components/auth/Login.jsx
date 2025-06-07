import React, {useState} from 'react';

function Login() {

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
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
                <button type="submit" className="w-full rounded-lg mt-6 py-3 text-lg bg-yellow-400 text-gray-900 font-bold" >
                    Sign in
                </button>
            </form>
        </div>
    );
}

export default Login;