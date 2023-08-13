import React from "react";
import ProductList from "../products/ProductList";

const StoreDetails = ({ store }) => {
    return (
        <div className="space-y-5 mt-5">
            <div>
                <p>Store name</p>
                <h2 className="text-lg lg:text-2xl">
                    <span className="text-blue-300 font-semibold">
                        {store?.name}
                    </span>
                </h2>
                <p>About store</p>
                <p>
                    <span className="text-blue-300 font-semibold">
                        {store?.desc}
                    </span>
                </p>
                <p>Owner name</p>
                <p>
                    <span className="text-blue-300 font-semibold">
                        {store?.user.name}
                    </span>
                </p>
                <p>Owner email</p>
                <p>
                    <span className="text-blue-300 font-semibold">
                        {store?.user.email}
                    </span>
                </p>
            </div>
            <div>
                <h2 className="text-lg lg:text-2xl">Our products</h2>
                <ProductList products={store?.products} />
            </div>
        </div>
    );
};

export default StoreDetails;
