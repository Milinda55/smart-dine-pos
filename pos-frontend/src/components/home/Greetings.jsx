import React, {useEffect, useState} from 'react';

function Greetings() {

    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setDateTime(new Date()), 1000)
        return () => clearInterval(timer);
    }, [])

    const formatDate = (date) => {
        const months = [
            'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
        ];
        return `${months[date.getMonth()]} ${String(date.getDate()).padStart(2, '0')}, ${date.getFullYear()}`
    };

    const formatTime = (date) =>
        `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}`;


    return (
        <div className="flex justify-between items-center px-8 mt-2">
            <div>
                <h1 className="text-[#f5f5f5] text-2xl font-semibold tracking-wide">Good morning</h1>
                <p className="text-[#ababab] text-sm">Give your best service for customers 😃</p>
            </div>
            <div>
                <h1 className="text-[#f5f5f5] text-3xl font-bold tracking-wide w-[130px]">{formatTime(dateTime)}</h1>
                <p className="text-[#ababab] text-sm">{formatDate(dateTime)}</p>
            </div>
        </div>
    );
}

export default Greetings;