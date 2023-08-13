"use client";
import StoreDetails from "@/components/stores/StoreDetails";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const StorePage = ({ params }) => {
    const { storeId } = params;

    const demoStore = {
        id: "2078fe49-dea0-4709-afab-198dd3d33d4c",
        name: "mobile store",
        desc: "this is mobile store",
        user_id: "40ed91c9-360d-408a-b5a5-2dcd3955d790",
        products: [
            {
                id: "11b2efd7-d5e1-481a-b0ad-66b91dea605a",
                name: "first mobile",
                desc: "lksdfj ",
                store_id: "2078fe49-dea0-4709-afab-198dd3d33d4c",
                user_id: "40ed91c9-360d-408a-b5a5-2dcd3955d790",
                quantity: 1334,
                price: 1233,
                image: "http://res.cloudinary.com/jayant-cloud/image/upload/v1691924522/epic_store/python-essentials-cisco_f6o0nx.png",
                address: " laskdjf ",
                category_id: "3bc680f0-2668-4f3a-a77a-247897a22ed4",
            },
            {
                id: "d2b62eae-080a-4d59-b5e1-24a317d96fb1",
                name: "mobile 2",
                desc: "salkdjf ",
                store_id: "2078fe49-dea0-4709-afab-198dd3d33d4c",
                user_id: "40ed91c9-360d-408a-b5a5-2dcd3955d790",
                quantity: 73949,
                price: 727,
                image: "http://res.cloudinary.com/jayant-cloud/image/upload/v1691924582/epic_store/wallpaperflare.com_wallpaper_fsqt8a.jpg",
                address: "lsksdj fasdlfkj sdaflkj ",
                category_id: "3bc680f0-2668-4f3a-a77a-247897a22ed4",
            },
        ],
        user: {
            name: "user 1",
            email: "user1@gmail.com",
            id: "40ed91c9-360d-408a-b5a5-2dcd3955d790",
        },
    };

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["home", "stores", "detail"],
        queryFn: async () => {
            return await axios.get(`/api/stores/${storeId}`);
        },
    });

    if (isLoading) {
        return (
            <h1 className="mt-10 text-center text-lg lg:text-2xl">
                Loading store...
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

    const store = data.data.store;

    return <StoreDetails store={store} />;
};

export default StorePage;
