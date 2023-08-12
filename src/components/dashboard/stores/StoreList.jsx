"use client";
import { FaStoreAlt } from "react-icons/fa";
import Link from "next/link";

const StoresList = ({ stores }) => {
    return (
        <div className="w-full gap-5 justify-start px-auto flex flex-wrap">
            {stores?.map((store) => (
                <StoreCard key={store.id} store={store} />
            ))}
        </div>
    );
};

const StoreCard = ({ store }) => {
    return (
        <div className=" flex-shrink w-[45%] h-fit sm:w-[30%] lg:w-[22%] py-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col items-center">
                <FaStoreAlt className="text-white w-10 h-10" />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                    {store.name}
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                    {store.desc}
                </span>
                <div className="flex mt-4 space-x-3 md:mt-6">
                    <Link
                        href={`stores/${store.id}`}
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        View store
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default StoresList;
