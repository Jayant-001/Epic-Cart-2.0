"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const UpdateStoreForm = ({ storeData }) => {
    const queryClient = useQueryClient();

    const [store, setStore] = useState({
        name: storeData.name,
        desc: storeData.desc,
    });

    const updateStoreMutation = useMutation({
        mutationFn: async (data) => {
            return await axios.patch(
                `/api/dashboard/store/${storeData.storeId}`,
                data
            );
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["dashboard", "stores"],
            });
            queryClient.invalidateQueries({
                queryKey: ["dashboard", "store", "detail"],
            });
            toast.success("Store updated");
        },
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        updateStoreMutation.mutate(store);
    };
    return (
        <div>
            <h1 className="text-lg lg:text-2xl font-semibold ">
                Update Store details
            </h1>
            <form className="my-5">
                <div className="mb-2">
                    <label
                        htmlFor="name"
                        className="block mb-2 text-base font-semibold text-gray-600"
                    >
                        Store name
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={store.name}
                        name="name"
                        onChange={(e) =>
                            setStore({
                                ...store,
                                [e.target.name]: e.target.value,
                            })
                        }
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Store name"
                        required
                    />
                </div>
                <div className="mb-2">
                    <label
                        htmlFor="desc"
                        className="block mb-2 text-base font-semibold text-gray-600 "
                    >
                        About store
                    </label>
                    <textarea
                        id="desc"
                        rows="4"
                        value={store.desc}
                        name="desc"
                        onChange={(e) =>
                            setStore({
                                ...store,
                                [e.target.name]: e.target.value,
                            })
                        }
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Store description"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    onClick={handleSubmit}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Update
                </button>
            </form>
        </div>
    );
};

export default UpdateStoreForm;
