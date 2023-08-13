"use client";
import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";

const ProductCard = ({ product }) => {
    const demoImageUrl =
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg";
    const queryClient = useQueryClient();

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

    return (
        <div key={product.id} className="group relative border rounded-lg ">
            <div className="relative aspect-h-1 aspect-w-1 w-full  overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 h-48">
                <Image
                    fill={true}
                    src={product.image || demoImageUrl}
                    alt="product image"
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
            </div>
            <div className="mt-4 px-2">
                <h4 className="text-lg font-semibold">{product.name}</h4>

                <p className=" font-medium">₹{product.price}</p>
                <div className="flex justify-evenly gap-2 w-full my-2">
                    <Link
                        href={`/products/${product.id}`}
                        className="text-sm flex items-center justify-center py-2 px-2 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-lg w-full"
                    >
                        Preview
                    </Link>
                    <button
                        onClick={addToCart}
                        className="text-sm flex items-center justify-center py-2 px-2  hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg w-full"
                    >
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
