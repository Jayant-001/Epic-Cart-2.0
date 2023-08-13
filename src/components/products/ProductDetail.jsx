"use client";
import axios from "axios";
import { BsFillCartPlusFill } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Link from "next/link";

const ProductDetail = ({ product }) => {
    const router = useRouter();
    const queryClient = useQueryClient();

    const imageurl =
        "https://www.whitmorerarebooks.com/pictures/medium/2465.jpg";

    const addToCartMutation = useMutation({
        mutationKey: ["cart", "add"],
        mutationFn: async (payload) => {
            return await axios.post("/api/account/cart", payload);
        },
        onSuccess: () => {
            queryClient.invalidateQueries(["account", "cart"]);
        },
    });

    const addToCart = async () => {};

    const onCheckout = async () => {};

    return (
        <section className="body-font overflow-hidden">
            <div className="container py-10 mx-auto">
                <div className="w-4/5 mx-auto flex flex-wrap">
                    <img
                        alt="ecommerce"
                        className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
                        src={product?.image || imageurl}
                    />
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h1 className=" text-3xl title-font font-medium mb-1">
                            {product?.name}
                        </h1>
                        <h2 className="text-sm title-font text-slate-300 tracking-widest">
                            store{" "}
                            <span className="font-semibold text-blue-300 hover:underline">
                                <Link href={`/stores/${product?.store.id}`}>
                                    {product?.store.name}
                                </Link>
                            </span>
                        </h2>
                        <div className="flex mb-4">
                            <span className="flex items-center">
                                <svg
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    className="w-4 h-4 text-red-500"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    className="w-4 h-4 text-red-500"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    className="w-4 h-4 text-red-500"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    className="w-4 h-4 text-red-500"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    className="w-4 h-4 text-red-500"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <span className="text-slate-300 ml-3">
                                    4 Reviews
                                </span>
                            </span>
                            <span className="flex ml-3 pl-3 py-2 space-x-2 border-l-2 border-slate-300">
                                <a>
                                    <svg
                                        fill="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                </a>
                                <a>
                                    <svg
                                        fill="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                </a>
                                <a>
                                    <svg
                                        fill="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                    </svg>
                                </a>
                            </span>
                        </div>
                        <p className="leading-relaxed">
                            {product?.desc}
                        </p>
                        <div className=" mt-6 space-y-3 w-fit pb-5 border-b-2 border-gray-200 mb-5">
                            <div className="grid grid-cols-2">
                                <h6 className="font-semibold text-lg">Category</h6>
                                <p>{product?.category.name}</p>
                            </div>
                            <div className="grid grid-cols-2">
                                <h6 className="font-semibold text-lg">
                                    Seller
                                </h6>
                                <p>{product?.store.name}</p>
                            </div>
                            <div className="grid grid-cols-2">
                                <h6 className="font-semibold text-lg">Brand</h6>
                                <p>Unknown</p>
                            </div>
                            <div className="grid grid-cols-2">
                                <h6 className="font-semibold text-lg">Stock</h6>
                                <p>{product?.quantity}</p>
                            </div>
                        </div>
                        <div className="flex">
                            <span className="title-font font-semibold text-2xl ">
                                ₹{product?.price}
                            </span>
                            <button
                                onClick={addToCart}
                                className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
                            >
                                Add to cart
                            </button>
                            <Link
                                href="/account/cart"
                                title="Go to cart"
                                className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4"
                            >
                                <BsFillCartPlusFill />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetail;
