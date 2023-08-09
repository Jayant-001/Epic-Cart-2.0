"use client";

import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import React, { useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const ProductsFilter = () => {
    const [showFilter, setShowFilter] = useState(false);

    const sellers = [
        {
            name: "seller 1",
            value: 1,
        },
        {
            name: "seller 2",
            value: 2,
        },
        {
            name: "seller 3",
            value: 3,
        },
        {
            name: "seller 4",
            value: 4,
        },
        {
            name: "seller 5",
            value: 5,
        },
        {
            name: "seller 6",
            value: 6,
        },
        {
            name: "seller 7",
            value: 7,
        },
    ];

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const createQueryString = useCallback(
        (name, value) => {
            const params = new URLSearchParams(searchParams);
            params.set(name, value);

            return params.toString();
        },
        [searchParams]
    );

    return (
        <div id="accordionExample5" className="min-w-[200px]">
            <div className="rounded-t-lg border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                <h2 className="mb-0" id="headingOne5">
                    <button
                        className="group relative flex w-full justify-between items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                        type="button"
                        data-te-collapse-init
                        data-te-target="#collapseOne5"
                        aria-expanded="true"
                        aria-controls="collapseOne5"
                        onClick={(e) => setShowFilter((prev) => !prev)}
                    >
                        Sellers
                        {showFilter ? (
                            <IoIosArrowUp className="w-5 h-5" />
                        ) : (
                            <IoIosArrowDown className="w-5 h-5" />
                        )}
                    </button>
                </h2>
                <div
                    id="collapseOne5"
                    className={`!visible ${!showFilter ? "hidden" : ""}`}
                    data-te-collapse-item
                    data-te-collapse-show
                    aria-labelledby="headingOne5"
                >
                    <div className="px-5 py-4 flex flex-col gap-2">
                        {sellers.map((item, id) => {
                            return (
                                <div className="flex items-center" key={id}>
                                    <input
                                        className=" mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                                        type="checkbox"
                                        value={item.value}
                                        id={item.value}
                                        onChange={(e) =>
                                            router.push(
                                                pathname +
                                                    "?" +
                                                    createQueryString(
                                                        "seller",
                                                        e.target.value.toLowerCase()
                                                    )
                                            )
                                        }
                                    />
                                    <label htmlFor={item.value}>
                                        {item.name}
                                    </label>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsFilter;
