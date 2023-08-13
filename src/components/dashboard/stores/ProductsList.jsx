"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiXCircle } from "react-icons/fi";
import { toast } from "react-toastify";

const StoreProductsList = ({ storeId, products }) => {

    return (
        <div className="mt-5">
            <h1 className=" font-bold text-2xl my-2">Products</h1>
            {products.length > 0 ? (
                products.map((product, id) => (
                    <StoreProductItem
                        key={product.id}
                        storeId={storeId}
                        product={product}
                    />
                ))
            ) : (
                <h1 className="text-center text-lg">No Products listed</h1>
            )}
        </div>
    );
};

const StoreProductItem = ({ product }) => {
    const imageurl =
        "https://www.whitmorerarebooks.com/pictures/medium/2465.jpg";
    const queryClient = useQueryClient();

    // const productDeleteMutation = useMutation({
    //     mutationFn: async (id) =>
    //         await axios.delete(`/api/account/stores/${product.storeId}/products`, {
    //             data: { id },
    //         }),
    //     onSuccess: () => {
    //         queryClient.invalidateQueries(["account", "store", "details"]);
    //         toast.success("Item deleted");
    //     },
    // });

    const deleteProduct = (e) => {
        e.preventDefault();
        toast.warning("Product deleted")
        // productDeleteMutation.mutate(product._id);
    };

    const styles = {
        buttonAccept:
            "px-2 py-1 rounded-lg shadow bg-gray-600 active:bg-green-400 cursor-pointer",
        buttonDecline:
            "px-2 py-1 rounded-lg shadow bg-red-300 active:bg-red-400 cursor-pointer",
    };

    return (
        <div className="px-5 py-2 flex items-center justify-between border-t">
            <div className="flex items-center relative">
                <Image
                    src={product.image || imageurl}
                    width={0}
                    alt="product image"
                    height={0}
                    sizes="100vw"
                    style={{ width: "50px", height: "auto" }} // optional
                />
                <div className="flex ml-2 flex-col h-full justify-center">
                    <h1 className="font-medium text-base sm:text-lg ">
                        {product.name}
                    </h1>
                    <p>
                        ₹{product.price} | <span>{product.quantity}</span> stocks
                    </p>
                </div>
            </div>
            <div className="space-x-2 text-sm sm:text-base">
                <Link href="" className={styles.buttonAccept}>
                    Edit
                </Link>
                <button
                    className={styles.buttonDecline}
                    onClick={deleteProduct}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default StoreProductsList;
