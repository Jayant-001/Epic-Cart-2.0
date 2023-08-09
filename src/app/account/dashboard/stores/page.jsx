'use client'
import StoresList from "@/components/dashboard/stores/StoreList";
import Link from "next/link";
import { FaStoreAlt } from "react-icons/fa";

const DashboardStoresPage = () => {

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
    <div className="space-y-10">
      <CreateStore />
      <StoresList stores={stores} />
    </div>
  )
}

const CreateStore = () => {
  return (
      <div className="w-full flex flex-col sm:flex-row justify-center gap-5 items-center py-5 mt-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <FaStoreAlt className="text-white w-8 h-8" />
          <Link
              href={`/account/dashboard/stores/create`}
              className="inline-flex items-center px-4 py-2 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
              Create a one
          </Link>
      </div>
  );
};

export default DashboardStoresPage