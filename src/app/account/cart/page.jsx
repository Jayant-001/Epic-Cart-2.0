"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
import { toast } from "react-toastify";

const CartPage = () => {
    const queryClient = useQueryClient();
    const products = [
        {
            id: "19826d5e-6440-4c7d-b986-19f84afc0d33",
            name: "abc product",
            desc: "this is abc product",
            store_id: "a3598015-336d-477c-8e09-0b8305a87b51",
            user_id: "a834706a-592e-419d-bc28-cdc6a825ed25",
            quantity: 72,
            price: 3883,
            image: "http://res.cloudinary.com/jayant-cloud/image/upload/v1692028836/epic_store/python-essentials-cisco_x1bks0.png",
            address: " lksdjf  sdklfj ",
            category_id: "3bc680f0-2668-4f3a-a77a-247897a22ed4",
        },
    ];

    const { data, isLoading, isError, err } = useQuery({
        queryKey: ["account", "cart"],
        queryFn: async () => {
            return await axios.get("/api/cart");
        },
        onError: (err) => {
            console.log(err);
        },
    });

    const removeProductMutation = useMutation({
        mutationFn: async (payload) => {
            return await axios.patch("/api/cart", payload);
        },
        onSuccess: () => {
            toast.error("Removed from cart");
            queryClient.invalidateQueries({ queryKey: ["account", "cart"] });
        },
    });

    const removeProduct = (productId) => {
        removeProductMutation.mutate({ productId });
    };

    return (
        <div className="container mx-auto mt-10 ">
            <div className="flex flex-col md:flex-row shadow-md my-10 gap-10">
                <div className="w-full md:w-3/4 py-10">
                    <div className="flex justify-between border-b pb-8">
                        <h1 className="font-semibold text-2xl">
                            Shopping Cart
                        </h1>
                        <h2 className="font-semibold text-2xl">3 Items</h2>
                    </div>

                    {isLoading ? (
                        <h1 className="text-center mt-10 text-lg">
                            Loading cart
                        </h1>
                    ) : data === null || isError ? (
                        <h1 className="text-center mt-10 text-lg">
                            No product found
                        </h1>
                    ) : (
                        <>
                            <div className="flex mt-10 mb-5">
                                <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                                    Product Details
                                </h3>
                                <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
                                    Quantity
                                </h3>
                                <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
                                    Price
                                </h3>
                                <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
                                    Total
                                </h3>
                            </div>

                            {data?.data?.cart?.products?.map((product) => {
                                return (
                                    <div
                                        key={product.id}
                                        className="flex items-center hover:bg-gray-800 -mx-8 px-6 py-5"
                                    >
                                        <div className="flex w-2/5">
                                            <div className="w-20">
                                                <img
                                                    className="h-24"
                                                    src="https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="flex flex-col justify-between ml-4 flex-grow">
                                                <span className="font-bold text-sm cursor-pointer">
                                                    <Link
                                                        href={`/products/${product.id}`}
                                                    >
                                                        {product.name}
                                                    </Link>
                                                </span>
                                                <span className="text-red-500 text-xs">
                                                    {product?.store?.name}
                                                </span>
                                                <p
                                                    onClick={() =>
                                                        removeProduct(
                                                            product.id
                                                        )
                                                    }
                                                    className="font-semibold cursor-pointer hover:text-red-500 text-gray-500 text-xs"
                                                >
                                                    Remove
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex justify-center w-1/5">
                                            <svg
                                                className="fill-current text-gray-600 w-3"
                                                viewBox="0 0 448 512"
                                            >
                                                <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                            </svg>

                                            <input
                                                className="mx-2 border text-center w-8 bg-transparent"
                                                type="text"
                                                onChange={() => {}}
                                                value={1}
                                            />

                                            <svg
                                                className="fill-current text-gray-600 w-3"
                                                viewBox="0 0 448 512"
                                            >
                                                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                            </svg>
                                        </div>
                                        <span className="text-center w-1/5 font-semibold text-sm">
                                            ${product.price}
                                        </span>
                                        <span className="text-center w-1/5 font-semibold text-sm">
                                            ${product.price}
                                        </span>
                                    </div>
                                );
                            })}
                        </>
                    )}

                    <Link
                        href="/products"
                        className="flex font-semibold text-indigo-600 text-sm mt-10"
                    >
                        <svg
                            className="fill-current mr-2 text-indigo-600 w-4"
                            viewBox="0 0 448 512"
                        >
                            <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                        </svg>
                        Continue Shopping
                    </Link>
                </div>

                <div id="summary" className="w-full md:w-1/4 px-8 py-10">
                    <h1 className="font-semibold text-2xl border-b pb-8">
                        Order Summary
                    </h1>
                    <div className="flex justify-between mt-10 mb-5">
                        <span className="font-semibold text-sm uppercase">
                            Items {data ? data?.data?.cart?.products?.length : "0"}
                        </span>
                        <span className="font-semibold text-sm">
                            $
                            {data
                                ? (() => {
                                      let total = 0;
                                      data?.data?.cart?.products.forEach(
                                          (product) => {
                                              total += product.price;
                                          }
                                      );

                                      return total;
                                  })()
                                : "$0"}
                        </span>
                    </div>
                    <div>
                        <label className="font-medium inline-block mb-3 text-sm uppercase">
                            Shipping
                        </label>
                        <select className="block p-2 text-gray-600 w-full text-sm">
                            <option>Standard shipping - $10.00</option>
                        </select>
                    </div>
                    <div className="py-10">
                        <label
                            htmlFor="promo"
                            className="font-semibold inline-block mb-3 text-sm uppercase"
                        >
                            Promo Code
                        </label>
                        <input
                            type="text"
                            id="promo"
                            placeholder="Enter your code"
                            className="p-2 text-sm w-full text-black"
                        />
                    </div>
                    <button
                        onClick={() => alert("Invalid code")}
                        className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm  uppercase"
                    >
                        Apply
                    </button>
                    <div className="border-t mt-8">
                        <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                            <span>Total cost</span>
                            <span>
                                $
                                {data
                                    ? (() => {
                                          let total = 0;
                                          data?.data?.cart?.products.forEach(
                                              (product) => {
                                                  total += product.price;
                                              }
                                          );
                                          return total;
                                      })()
                                    : "$0"}
                            </span>
                        </div>
                        <Link
                            href="/account/checkout"
                            className="bg-indigo-500 font-semibold px-2 rounded shadow hover:bg-indigo-600 py-3 text-sm uppercase w-full"
                        >
                            Checkout
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
