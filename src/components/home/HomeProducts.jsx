"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
import ProductList from "../products/ProductList";

const HomeProducts = () => {
    // const limit = 8;
    // const getQuery = useQuery({
    //     queryFn: async () => {
    //         return await axios.get(`/api/products?limit=${limit}`);
    //     },
    //     queryKey: ["home", "featured"],
    // });

    // const { data, error, isLoading, isError } = getQuery;

    const products = [
        {
            _id: 1,
            name: "prdocut 1",
            desc: "product desc",
            price: 2344,
            image: "",
        },
        {
            _id: 2,
            name: "prdocut 2",
            desc: "product 2 desc",
            price: 2344,
            image: "",
        },
        {
            _id: 3,
            name: "prdocut 3",
            desc: "product desc",
            price: 2344,
            image: "",
        },
        {
            _id: 4,
            name: "prdocut 2",
            desc: "product 2 desc",
            price: 2344,
            image: "",
        },
        {
            _id: 5,
            name: "prdocut 3",
            desc: "product desc",
            price: 2344,
            image: "",
        },
    ];

    const isLoading = false;
    const isError = false;
    const error = false;

    return (
        <div className="space-y-5">
            <div className="flex justify-between w-full items-center">
                <h4 className="text-xl md:text-3xl font-semibold tracking-wider">
                    Featured products
                </h4>
                <Link href="/products">
                    <button className="bg-gray-800 text-white py-2 px-4 shadow font-medium text-sm md:text-base duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-lg ">
                        View all
                    </button>
                </Link>
            </div>
            <div className="border rounded-lg">
                {isLoading ? (
                    <div className="min-h-[100px] flex justify-center items-center">
                        <h1 className="text-xl md:text-3xl tracking-widest font-semibold">
                            Loading...
                        </h1>
                    </div>
                ) : isError ? (
                    <div className="min-h-[100px] flex justify-center items-center flex-col p-2">
                        <h1 className="sm:text-xl md:text-2xl tracking-widest font-semibold text-center">
                            {error.message} 😁
                        </h1>
                        <p>Please refresh the page</p>
                    </div>
                ) : (
                    <ProductList products={products} />
                )}
            </div>
        </div>
    );
};

export default HomeProducts;
