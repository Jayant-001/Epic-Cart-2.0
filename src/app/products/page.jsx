"use client";

import ProductList from "@/components/products/ProductList";
import ProductsFilter from "@/components/products/ProductsFilter";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const ProductsPage = () => {
    const demoProducts = [
        {
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
        },
        {
            id: "5fb49bc9-76fd-4146-bda8-4fe7d4ab1467",
            name: "alkdsjf",
            desc: "lkasjdf",
            store_id: "37d15be5-2dcf-43fb-b6ea-97449710b049",
            user_id: "7c706253-4dfd-4d6a-8aeb-3ba33a57a4e5",
            quantity: 838,
            price: 838,
            image: "http://res.cloudinary.com/jayant-cloud/image/upload/v1691858313/epic_store/1102010_otzbv5.jpg",
            address: "lkasdjf",
            category_id: "3bc680f0-2668-4f3a-a77a-247897a22ed4",
        },
        {
            id: "68cbf427-a16d-4c11-94b8-09c4989b8e68",
            name: ";lkdfj",
            desc: "83lkasd",
            store_id: "37d15be5-2dcf-43fb-b6ea-97449710b049",
            user_id: "7c706253-4dfd-4d6a-8aeb-3ba33a57a4e5",
            quantity: 83,
            price: 3,
            image: "http://res.cloudinary.com/jayant-cloud/image/upload/v1691914598/epic_store/365_leetcode_fhpnzn.png",
            address: "lksdjf",
            category_id: "3bc680f0-2668-4f3a-a77a-247897a22ed4",
        },
        {
            id: "c4f73a89-71ac-4c34-b1b1-64875ca139ee",
            name: "lksdj ",
            desc: "laksdjf ",
            store_id: "37d15be5-2dcf-43fb-b6ea-97449710b049",
            user_id: "7c706253-4dfd-4d6a-8aeb-3ba33a57a4e5",
            quantity: 838,
            price: 8383,
            image: "http://res.cloudinary.com/jayant-cloud/image/upload/v1691858213/epic_store/1102010_u2jzih.jpg",
            address: " sdlkfj",
            category_id: "3bc680f0-2668-4f3a-a77a-247897a22ed4",
        },
    ];

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["home", "products"],
        queryFn: async () => {
            return await axios.get("/api/products");
        },
    });

    if (isLoading) {
        return (
            <h1 className="mt-10 text-center text-lg lg:text-2xl">
                Products are loading...
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

    const products = data.data.products;

    return (
        <div className="flex gap-5 mt-5 flex-col sm:flex-row">
            <ProductsFilter />
            <ProductList products={products} />
        </div>
    );
};

export default ProductsPage;
