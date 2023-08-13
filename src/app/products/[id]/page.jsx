"use client";
import ProductDetail from "@/components/products/ProductDetail";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const ProductPage = ({ params }) => {
    const { id } = params;

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["home", "products", "detail"],
        queryFn: async () => {
            return await axios.get(`/api/products/${id}`);
        },
    });

    const demoProduct = {
        id: "33ed7808-6056-4b8e-a5fb-493695f59f51",
        name: "lksdj ",
        desc: "laksdjf ",
        store_id: "37d15be5-2dcf-43fb-b6ea-97449710b049",
        user_id: "7c706253-4dfd-4d6a-8aeb-3ba33a57a4e5",
        quantity: 838,
        price: 8383,
        image: "http://res.cloudinary.com/jayant-cloud/image/upload/v1691858211/epic_store/1102010_hckqv5.jpg",
        address: " sdlkfj",
        category_id: "3bc680f0-2668-4f3a-a77a-247897a22ed4",
        store: {
            id: "37d15be5-2dcf-43fb-b6ea-97449710b049",
            name: "store beauty",
            desc: "store beauty product",
            user_id: "7c706253-4dfd-4d6a-8aeb-3ba33a57a4e5",
        },
        category: {
            id: "3bc680f0-2668-4f3a-a77a-247897a22ed4",
            name: "all",
        },
    };

    if (isLoading) {
        return (
            <h1 className="mt-10 text-center text-lg lg:text-2xl">
                Loading product...
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

    const product = data.data.product;

    return <ProductDetail product={product} />;
};

export default ProductPage;
