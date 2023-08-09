import ProductDetail from "@/components/products/ProductDetail";
import React from "react";

const ProductPage = () => {
    const product = {
        _id: 3,
        name: "prdocut 3",
        desc: "product desc",
        price: 2344,
        image: "",
    };

    return <ProductDetail product={product} />;
};

export default ProductPage;
