"use client";

import { userContext } from "@/context/UserContext";
import { loadStripe } from "@stripe/stripe-js";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useEffect, useState } from "react";

const CheckoutPage = () => {
    const { user, cart } = useContext(userContext);
    const STRIPE_PUBLISHABLE_KEY =
        "pk_test_51NR8ifSFrdAW28uNoBTYAGcUg6DgrEo5qQ0bzXMCk7wjg8YDfPfTskgsk4NT7OJ2uWgwGL3xGw54aZ2ZL5NNb3Cx00AuwbOZ8Y";
    const stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);

    const [checkoutForm, setCheckoutForm] = useState({
        email: "",
        address: "",
        city: "",
        pincode: "",
        state: "",
        paymentMethod: "stripe",
    });
    const [totalPrice, setTotalPrice] = useState(0);
    const [cartProducts, setCartProducts] = useState([]);

    useEffect(() => {
        if (user?.address) {
            setCheckoutForm({
                ...checkoutForm,
                email: user.email,
                address: user.address[0].address,
                city: user.address[0].city,
                pincode: user.address[0].pincode,
                state: user.address[0].state,
            });
            setCartProducts(cart.products);
            let totalPrice = 0;
            cart.products.forEach((element) => {
                totalPrice += element.price;
            });

            setTotalPrice(totalPrice);
        }
    }, [user, cart]);

    const [checkoutFormData, setCheckoutFormData] = useState({
        shippingAddress: {},
        paymentMethod: "",
        totalPrice: 0,
        isPaid: false,
        paidAt: new Date(),
        isProcessing: true,
    });

    const handleChange = (e) => {
        e.preventDefault();

        setCheckoutForm({ ...checkoutForm, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const stripe = await stripePromise;

        const items = cartProducts.map((product) => ({
            price_data: {
                currency: "usd",
                product_data: {
                    images: [product.image],
                    name: product.name,
                },
                unit_amount: product.price,
            },
            quantity: 1,
        }));

        stripeCheckout.mutate(items);
    };

    const stripeCheckout = useMutation({
        mutationFn: async (payload) => {
            return await axios.post("/api/stripe", payload);
        },
        onSuccess: async (res) => {
            console.log(res.data);

            const stripe = await stripePromise;

            const { error } = await stripe.redirectToCheckout({
                sessionId: res.data.id,
            });

            console.log(error);
        },
        onError: (err) => {
            console.log(err);
        },
    });

    return (
        <>
            <div className="grid lg:grid-cols-2 ">
                <div className="px-4 pt-8">
                    <p className=" text-lg font-medium">Shipping Methods</p>
                    <form className="mt-5 grid gap-6">
                        <div className="relative">
                            <input
                                className="peer hidden bg-black"
                                id="radio_1"
                                type="radio"
                                name="radio"
                                onChange={handleChange}
                                checked
                            />
                            <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-gray-600"></span>
                            <label
                                className="peer-checked:border-2 bg-black peer-checked:border-gray-700 peer-checked:bg-gray-500 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                                htmlFor="radio_1"
                            >
                                <img
                                    className="w-14 object-contain"
                                    src="/images/naorrAeygcJzX0SyNI4Y0.png"
                                    alt=""
                                />
                                <div className="ml-5">
                                    <span className="mt-2 font-semibold">
                                        Fedex Delivery
                                    </span>
                                    <p className="text-slate-500 text-sm leading-6">
                                        Delivery: 2-4 Days
                                    </p>
                                </div>
                            </label>
                        </div>
                        <div className="relative text-black">
                            <input
                                className="peer hidden"
                                onChange={handleChange}
                                id="radio_2"
                                type="radio"
                                name="radio"
                                checked
                            />
                            <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                            <label
                                className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                                htmlFor="radio_2"
                            >
                                <img
                                    className="w-14 object-contain"
                                    src="/images/oG8xsl3xsOkwkMsrLGKM4.png"
                                    alt=""
                                />
                                <div className="ml-5">
                                    <span className="mt-2 font-semibold">
                                        Fedex Delivery
                                    </span>
                                    <p className="text-slate-500 text-sm leading-6">
                                        Delivery: 4-8 Days
                                    </p>
                                </div>
                            </label>
                        </div>
                    </form>
                    <p className="text-xl font-medium mt-8">Order Summary</p>
                    <p className="text-gray-400">
                        Check your items. And select a suitable shipping method.
                    </p>
                    <div className="mt-8 space-y-3 rounded-lg bg-[#202020] px-2 py-4 sm:px-6">
                        {cartProducts.map((product) => {
                            return (
                                <CheckoutProduct
                                    key={product.id}
                                    product={product}
                                />
                            );
                        })}
                    </div>
                </div>

                {/* payment details form */}
                <form
                    onSubmit={handleSubmit}
                    className="mt-10 bg-[#202020] h-fit px-4 pt-8 lg:mt-0"
                >
                    <p className="text-xl font-medium">Payment Details</p>
                    <p className="text-gray-400">
                        Complete your order by providing your payment details.
                    </p>
                    <div className="">
                        <label
                            htmlFor="email"
                            className="mt-4 mb-2 block text-sm font-medium"
                        >
                            Email
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                id="email"
                                name="email"
                                onChange={handleChange}
                                value={checkoutForm.email}
                                className="w-full bg-black rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                                placeholder="your.email@gmail.com"
                            />
                            <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                    />
                                </svg>
                            </div>
                        </div>
                        <label
                            htmlFor="address"
                            className="mt-4 mb-2 block text-sm font-medium"
                        >
                            Full Address
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                id="address"
                                name="address"
                                onChange={handleChange}
                                value={checkoutForm?.address}
                                className="w-full rounded-md border bg-black border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                                placeholder="Full address"
                            />
                            <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                                    />
                                </svg>
                            </div>
                        </div>
                        <label
                            htmlFor="phone"
                            className="mt-4 mb-2 block text-sm font-medium"
                        >
                            Mobile number
                        </label>
                        <div className="flex">
                            <div className="relative w-7/12 flex-shrink-0">
                                <input
                                    type="number"
                                    id="phone"
                                    name="phone"
                                    onChange={handleChange}
                                    className="w-full bg-black rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                                    placeholder="+91 **********"
                                />
                                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                    <svg
                                        className="h-4 w-4 text-gray-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />{" "}
                                        <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <label
                            htmlFor="city"
                            className="mt-4 mb-2 block text-sm font-medium"
                        >
                            Billing Address
                        </label>
                        <div className="flex flex-col sm:flex-row">
                            <div className="relative flex-shrink-0 sm:w-7/12">
                                <input
                                    type="text"
                                    id="city"
                                    name="city"
                                    onChange={handleChange}
                                    value={checkoutForm.city}
                                    className="w-full bg-black rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                                    placeholder="City"
                                />
                                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                    <img
                                        className="h-4 w-4 object-contain"
                                        src="https://flagpack.xyz/_nuxt/4c829b6c0131de7162790d2f897a90fd.svg"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <input
                                type="text"
                                name="state"
                                onChange={handleChange}
                                value={checkoutForm.state}
                                className="flex-shrink-0 bg-black rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                                placeholder="State"
                            />
                            <input
                                type="number"
                                name="pincode"
                                onChange={handleChange}
                                value={checkoutForm.pincode}
                                className="flex-shrink-0 bg-black rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                                placeholder="ZIP"
                            />
                        </div>

                        {/* <!-- Total --> */}
                        <div className="mt-6 border-t border-b py-2">
                            <div className="flex items-center justify-between">
                                <p className="text-sm font-medium ">Subtotal</p>
                                <p className="font-semibold ">${totalPrice}</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-sm font-medium ">Shipping</p>
                                <p className="font-semibold ">$10.00</p>
                            </div>
                        </div>
                        <div className="mt-6 flex items-center justify-between">
                            <p className="text-sm font-medium ">Total</p>
                            <p className="text-2xl font-semibold ">
                                ${totalPrice + 10}
                            </p>
                        </div>
                    </div>
                    <input
                        type="submit"
                        value="Place Order"
                        className="mt-4 cursor-pointer mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white"
                    />
                    {/* Place Order
                    </input> */}
                </form>
            </div>
        </>
    );
};

export default CheckoutPage;

const CheckoutProduct = (prd) => {
    const image1 =
        "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60";
    const image2 =
        "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60";
    const product = prd.product;
    return (
        <div className="flex flex-col rounded-lg bg-black sm:flex-row">
            <img
                className="m-2 h-24 w-28 rounded-md border object-cover object-center"
                src={product.image}
                alt="product image"
            />
            <div className="flex w-full flex-col px-4 py-4">
                <span className="font-semibold">{product.name}</span>
                <span className="float-right text-gray-400">42EU - 8.5US</span>
                <p className="mt-auto text-lg font-bold">${product.price}</p>
            </div>
        </div>
    );
};
