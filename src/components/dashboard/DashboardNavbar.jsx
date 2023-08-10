import Link from "next/link";
import React from "react";
import { FaStore } from "react-icons/fa6";
import { MdManageAccounts } from "react-icons/md";
import {
    BsFillCartCheckFill,
    BsCurrencyDollar,
    BsFillWalletFill,
} from "react-icons/bs";

const DashboardNavbar = () => {
    const links = [
        {
            title: "Stores",
            url: "/dashboard/stores",
            icon: <FaStore />,
        },
        {
            title: "Orders",
            url: "/dashboard/orders",
            icon: <BsFillCartCheckFill />,
        },
        {
            title: "Products",
            url: "/dashboard/products",
            icon: <BsFillWalletFill />,
        },
        
    ];

    const styles =
        "flex gap-2 bg-gray-800 py-3 items-center w-full justify-center md:justify-start  px-5 rounded-lg shadow";

    return (
        <nav className="z-8 rounded-lg flex h-fit sticky top-24 items-center md:flex-col md:items-start md:gap-5 gap-2 border justify-between px-2 py-2">
            {links.map((link, id) => (
                <Link
                    key={id}
                    href={link.url}
                    className={styles}
                    title={link.title}
                >
                    {link.icon}
                    <span className="hidden sm:inline">{link.title}</span>
                </Link>
            ))}
        </nav>
    );
};

export default DashboardNavbar;
