import StoreFilter from "@/components/stores/StoreFilter";
import React from "react";
import StoresList from "@/components/dashboard/stores/StoreList";

const StoresPage = () => {
    const stores = [
        {
            _id: 1,
            title: "Store 1",
            productsCount: 19,
        },
        {
            _id: 2,
            title: "Store 2",
            productsCount: 19,
        },
        {
            _id: 3,
            title: "Store 3",
            productsCount: 19,
        },
        {
            _id: 4,
            title: "Store 4",
            productsCount: 19,
        },
    ];

    return (
        <div className="flex gap-5 mt-5 flex-col sm:flex-row">
            <StoreFilter />
            <StoresList stores={stores} />
        </div>
    );
};

export default StoresPage;
