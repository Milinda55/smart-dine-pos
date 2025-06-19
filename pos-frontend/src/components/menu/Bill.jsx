import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {getTotalPrice} from "../../redux/slices/cartSlice.js";
import {enqueueSnackbar} from "notistack";
import {createOrderRazorpay} from "../../https/index.js";

function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => {
            resolve(true);
        };
        script.onerror = () => {
            resolve(false);
        };
        document.body.appendChild(script);
    });
}

function Bill() {

    const cartData = useSelector((state) => state.cart);
    const total = useSelector(getTotalPrice);
    const taxRate = 5.25
    const tax = (total * taxRate) / 100;
    const totalPriceWithTax = total + tax;
    const customerData = useSelector((state) => state.customer);

    const [paymentMethod, setPaymentMethod] = useState();

    const handlePlaceOrder = async () => {
        if (!paymentMethod) {
            enqueueSnackbar("Please select a payment method!", {variant: "warning"});

            return;
        }

        try {
            const res = await loadScript(
                "https://checkout.razorpay.com/v1/checkout.js"
            );

            if (!res) {
                enqueueSnackbar("Razorpay SDK failed to load. Are you online?", {
                    variant: "warning",
                });
                return;
            }

            const reqData = {
                amount: totalPriceWithTax,
                currency: "LKR",
            };
            const { data } = await createOrderRazorpay(reqData);

            const options = {
                key: `${import.meta.env.VITE_RAZORPAY_KEY_ID}`,
                amount: data.order.amount,
                currency: data.order.currency,
                name: "DinePos",
                description: "Secure Payment for Your Meal",
                order_id: data.order.id,
                handler: async function (response) {
                    console.log(response)
                    // const verification = await verifyPaymentRazorpay(response);
                    // console.log(verification);
                    // enqueueSnackbar(verification.data.message, { variant: "success" });
                },
                prefill: {
                    name: customerData.name,
                    email: "",
                    contact: customerData.phone,
                },
                theme: { color: "#025cca" },
            };

            const rzp = new window.Razorpay(options);
            rzp.open();


        } catch (error) {
            console.log(error)
            enqueueSnackbar("Payment failed", {
                variant: "error",
            });
        }

    }

    return (
        <>
            <div className="flex items-center justify-between px-5 mt-2">
                <p className="text-xs text-[#ababab] font-medium mt-2">Items({cartData.length})</p>
                <h1 className="text-[#f5f5f5] text-md font-bold">Rs.{total.toFixed(2)}</h1>
            </div>
            <div className="flex items-center justify-between px-5 mt-2">
                <p className="text-xs text-[#ababab] font-medium mt-2">Tax({taxRate}%)</p>
                <h1 className="text-[#f5f5f5] text-md font-bold">Rs.{tax.toFixed(2)}</h1>
            </div>
            <div className="flex items-center justify-between px-5 mt-2">
                <p className="text-xs text-[#ababab] font-medium mt-2">Total with Tax</p>
                <h1 className="text-[#f5f5f5] text-md font-bold">Rs.{totalPriceWithTax.toFixed(2)}</h1>
            </div>
            <div className="flex items-center gap-3 px-5 mt-4">
                <button onClick={() => setPaymentMethod("Cash")} className={`bg-[#1f1f1f] px-4 py-2 w-full rounded-lg text-[#ababab] font-semibold ${paymentMethod === "Cash" ? "bg-[#383737]" : ""}`}>Cash</button>
                <button onClick={() => setPaymentMethod("Online")} className={`bg-[#1f1f1f] px-4 py-2 w-full rounded-lg text-[#ababab] font-semibold ${paymentMethod === "Online" ? "bg-[#383737]" : ""}`}>Online</button>
            </div>
            <div className="flex items-center gap-3 px-5 mt-4">
                <button className="bg-[#025cca] px-4 py-2 w-full rounded-lg text-[#f5f5f5] font-semibold text-lg">Print Receipt</button>
                <button onClick={handlePlaceOrder} className="bg-[#f6b100] px-4 py-2 w-full rounded-lg text-[#1f1f1f] font-semibold text-lg">Place Order</button>
            </div>
        </>
    );
}

export default Bill;