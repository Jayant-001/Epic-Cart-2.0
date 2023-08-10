"use client";
import StoreProductsList from "@/components/dashboard/stores/ProductsList";
import UpdateStoreForm from "@/components/dashboard/stores/UpdateStoreForm";
// import BreadCrumb from "@/components/BreadCrumb";
// import StoreProductsList from "@/components/stores/ProductsList";
// import UpdateStoreForm from "@/components/stores/UpdateStoreForm";
// import StoreOrdersList from "@/components/stores/orders/StoreOrdersList";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
import { toast } from "react-toastify";

const StoreDetailsPage = ({ params }) => {
    const { storeId } = params;

    // const links = [
    //     {
    //         title: "Home",
    //         url: "/",
    //     },
    //     {
    //         title: "Account",
    //         url: "/account/profile",
    //     },
    //     {
    //         title: "Stores",
    //         url: "/account/stores",
    //     },
    //     {
    //         title: "storename",
    //         url: `/account/stores/${storeId}`,
    //     },
    // ];

    // const { data, isError, error, isLoading } = useQuery({
    //     queryKey: ["account", "store", "details"],
    //     queryFn: async () => {
    //         return await axios.get(`/api/account/stores/${storeId}`);
    //     },
    // });

    const {data, isLoading, isError, error} = useQuery({
        queryKey: [],
        queryFn: async () => {
            return await axios.get(`/api/dashboard/store/${storeId}`)
        }
    })

    const styles = "w-full text-center text-lg md:text-2xl my-10";

    if (isLoading) {
        return <h1 className={styles}>Store is loading...</h1>;
    }
    if (isError) {
        return <h1 className={styles}>{error.message}</h1>;
    }

    // console.log(data.data.store);
    // const storeData = {
    //     storeId,
    //     title: data.data.store.title,
    //     desc: data.data.store.desc,
    //     orders: data.data.store.orders,
    // };
    // links.at(-1).title = storeData.title;

        const demoStoreData = {
        storeId,
        title: "data.data.store.title",
        desc: "data.data.store.desc",
        orders: "data.data.store.orders",
    };

    const products = [
      {
          _id: "64b8da47f0ef140b2606b692",
          name: "Paint ",
          description: "Paint is hello new",
          price: 3322,
          stock: 103,
          seller: "Jaya tech for men",
          images: [],
          category: "men",
          createdAt: "2023-07-20T06:55:03.832Z",
          __v: 0,
      },
      {
          _id: "64b8da7df0ef140b2606b699",
          name: "Clothes 1 ",
          description: "Clothes for women",
          price: 3322,
          stock: 103,
          seller: "Momen store",
          images: [],
          category: "women",
          createdAt: "2023-07-20T06:55:57.550Z",
          __v: 0,
      },
      {
          _id: "64b8da88f0ef140b2606b69b",
          name: "Clothes 2",
          description: "Clothes for women and ",
          price: 332,
          stock: 103,
          seller: "Momen store",
          images: [],
          category: "women",
          createdAt: "2023-07-20T06:56:08.051Z",
          __v: 0,
      },
      {
          _id: "64b8da8cf0ef140b2606b69d",
          name: "Clothes 3",
          description: "Clothes for women and ",
          price: 332,
          stock: 103,
          seller: "Momen store",
          images: [],
          category: "women",
          createdAt: "2023-07-20T06:56:12.051Z",
          __v: 0,
      },
      {
          _id: "64b8da88f0ef140b2606b69b",
          name: "Clothes 2",
          description: "Clothes for women and ",
          price: 332,
          stock: 103,
          seller: "Momen store",
          images: [],
          category: "women",
          createdAt: "2023-07-20T06:56:08.051Z",
          __v: 0,
      },
      {
          _id: "64b8da8cf0ef140b2606b69d",
          name: "Clothes 3",
          description: "Clothes for women and ",
          price: 332,
          stock: 103,
          seller: "Momen store",
          images: [],
          category: "women",
          createdAt: "2023-07-20T06:56:12.051Z",
          __v: 0,
      },
  ];
    return (
        <div>
            {/* <BreadCrumb links={links} /> */}
            <StoreAddProduct id={storeId} />
            <StoreProductsList
                storeId={storeId}
                products={products}
            />
            {/* <StoreOrdersList orders={storeData.orders} /> */}
            <UpdateStoreForm storeId={storeId} storeData={demoStoreData} />
        </div>
    );
};

const StoreAddProduct = ({ id }) => {
    return (
        <div className="my-2 flex justify-center items-center flex-col gap-1 border rounded-lg py-2 w-full">
            <h3 className="text-xl lg:text-2xl font-semibold">
                Add more products
            </h3>
            <Link
                href={`/dashboard/stores/${id}/addProduct`}
                className="flex items-center justify-center gap-x-2 py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-lg md:inline-flex"
            >
                Add now
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                >
                    <path
                        fillRule="evenodd"
                        d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                        clipRule="evenodd"
                    />
                </svg>
            </Link>
        </div>
    );
};

export default StoreDetailsPage;
