"use client";
import StoreFilter from "@/components/stores/StoreFilter";
import React from "react";
import StoresList from "@/components/dashboard/stores/StoreList";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const StoresPage = () => {
    const demoStores = [
        {
            id: "2078fe49-dea0-4709-afab-198dd3d33d4c",
            name: "mobile store",
            desc: "this is mobile store",
            user_id: "40ed91c9-360d-408a-b5a5-2dcd3955d790",
        },
        {
            id: "37d15be5-2dcf-43fb-b6ea-97449710b049",
            name: "store beauty",
            desc: "store beauty product",
            user_id: "7c706253-4dfd-4d6a-8aeb-3ba33a57a4e5",
        },
    ];

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["home", "stores"],
        queryFn: async () => {
            return await axios.get("api/stores");
        },
    });

    if (isLoading) {
        return (
            <h1 className="mt-10 text-center text-lg lg:text-2xl">
                Stores are loading...
            </h1>
        );
    }

    if (isError) {
        return (
            <h1 className="mt-10 text-center text-lg lg:text-2xl">
                {error.message}
            </h1>
        );
    }

    const stores = data.data.stores;

    return (
        // <div className="flex gap-5 mt-10 flex-col sm:flex-row">
        <div className="mx-auto mt-10">
            {/* <StoreFilter /> */}
            <StoresList stores={stores} />
        </div>
        //  </div>
    );
};

export default StoresPage;
