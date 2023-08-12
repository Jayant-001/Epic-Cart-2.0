import Link from "next/link";
import React from "react";

const DashboardPage = () => {
    return (
        <div className="text-center space-y-5">
            <h1 className="text-xl font-bold">Welcome to your dashboard</h1>
            <p>You can create your personalized stores here</p>
            <p>Go to your</p>
            <div className="flex w-full justify-around text-slate-400 text-lg font-medium">
                <Link href="/dashboard/stores">Stores</Link>
                <Link href="/dashboard/orders">Orders</Link>
                <Link href="/dashboard/products">Product</Link>
            </div>
        </div>
    );
};

export default DashboardPage;
