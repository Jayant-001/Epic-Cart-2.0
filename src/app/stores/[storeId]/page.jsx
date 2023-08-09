import React from "react";

const StorePage = ({ params }) => {
    const { storeId } = params;
    return <div>StorePage {storeId}</div>;
};

export default StorePage;
