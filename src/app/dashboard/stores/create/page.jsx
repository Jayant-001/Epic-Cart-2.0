"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const CreateStorePage = () => {
    const queryClient = useQueryClient();

    const [disableButton, setDisableButton] = useState(true);
    const [store, setStore] = useState({ name: "", desc: "" });

    const createStoreMutation = useMutation({
        mutationFn: async (data) => {
            return await axios.post("/api/dashboard/store", data);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["account", "dashboard", "stores"],
            });
            setStore({ name: "", desc: "" });
            toast.success("Store created");
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });

    useEffect(() => {
        if (store.name.length >= 3 && store.desc.length >= 5) {
            setDisableButton(false);
        } else {
            setDisableButton(true);
        }
    }, [store]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        createStoreMutation.mutate(store);
    };

    return (
        <form>
            <div className="mb-6">
                <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Store name
                </label>
                <input
                    type="text"
                    id="name"
                    value={store.name}
                    name="name"
                    onChange={(e) =>
                        setStore({ ...store, [e.target.name]: e.target.value })
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Store name"
                    required
                />
            </div>
            <div className="mb-6">
                <label
                    htmlFor="desc"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
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
                disabled={disableButton}
                onClick={handleSubmit}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                {createStoreMutation.isLoading ? "Creating..." : "Create"}
            </button>
        </form>
    );
};

export default CreateStorePage;
