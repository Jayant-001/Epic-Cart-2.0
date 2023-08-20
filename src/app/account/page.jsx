"use client";

import Image from "next/image";
import { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";
import Link from "next/link";

const AccountPage = () => {
    const [user, setUser] = useState({
        name: "user 1",
        email: "user1@gmail.com",
        gender: "Male",
        password: "******",
        address: "unknown",
    });

    const data = {
        cart: {
            id: "d2121354-24d6-4f3e-afdc-8054020b2f65",
            user_id: "7c706253-4dfd-4d6a-8aeb-3ba33a57a4e5",
            products: [
                {
                    id: "11b2efd7-d5e1-481a-b0ad-66b91dea605a",
                    name: "first mobile",
                    desc: "lksdfj ",
                    store_id: "2078fe49-dea0-4709-afab-198dd3d33d4c",
                    user_id: "40ed91c9-360d-408a-b5a5-2dcd3955d790",
                    quantity: 1334,
                    price: 1233,
                    image: "http://res.cloudinary.com/jayant-cloud/image/upload/v1691924522/epic_store/python-essentials-cisco_f6o0nx.png",
                    address: " laskdjf ",
                    category_id: "3bc680f0-2668-4f3a-a77a-247897a22ed4",
                    store: {
                        id: "2078fe49-dea0-4709-afab-198dd3d33d4c",
                        name: "mobile store",
                        desc: "this is mobile store",
                        user_id: "40ed91c9-360d-408a-b5a5-2dcd3955d790",
                    },
                },
                {
                    id: "19826d5e-6440-4c7d-b986-19f84afc0d33",
                    name: "abc product",
                    desc: "this is abc product",
                    store_id: "a3598015-336d-477c-8e09-0b8305a87b51",
                    user_id: "a834706a-592e-419d-bc28-cdc6a825ed25",
                    quantity: 72,
                    price: 3883,
                    image: "http://res.cloudinary.com/jayant-cloud/image/upload/v1692028836/epic_store/python-essentials-cisco_x1bks0.png",
                    address: " lksdjf  sdklfj ",
                    category_id: "3bc680f0-2668-4f3a-a77a-247897a22ed4",
                    store: {
                        id: "a3598015-336d-477c-8e09-0b8305a87b51",
                        name: "kiet sutta store",
                        desc: "new kiet ",
                        user_id: "a834706a-592e-419d-bc28-cdc6a825ed25",
                    },
                },
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
                    store: {
                        id: "37d15be5-2dcf-43fb-b6ea-97449710b049",
                        name: "store beauty",
                        desc: "store beauty product",
                        user_id: "7c706253-4dfd-4d6a-8aeb-3ba33a57a4e5",
                    },
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
                    store: {
                        id: "37d15be5-2dcf-43fb-b6ea-97449710b049",
                        name: "store beauty",
                        desc: "store beauty product",
                        user_id: "7c706253-4dfd-4d6a-8aeb-3ba33a57a4e5",
                    },
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
                    store: {
                        id: "37d15be5-2dcf-43fb-b6ea-97449710b049",
                        name: "store beauty",
                        desc: "store beauty product",
                        user_id: "7c706253-4dfd-4d6a-8aeb-3ba33a57a4e5",
                    },
                },
                {
                    id: "d2b62eae-080a-4d59-b5e1-24a317d96fb1",
                    name: "mobile 2",
                    desc: "salkdjf ",
                    store_id: "2078fe49-dea0-4709-afab-198dd3d33d4c",
                    user_id: "40ed91c9-360d-408a-b5a5-2dcd3955d790",
                    quantity: 73949,
                    price: 727,
                    image: "http://res.cloudinary.com/jayant-cloud/image/upload/v1691924582/epic_store/wallpaperflare.com_wallpaper_fsqt8a.jpg",
                    address: "lsksdj fasdlfkj sdaflkj ",
                    category_id: "3bc680f0-2668-4f3a-a77a-247897a22ed4",
                    store: {
                        id: "2078fe49-dea0-4709-afab-198dd3d33d4c",
                        name: "mobile store",
                        desc: "this is mobile store",
                        user_id: "40ed91c9-360d-408a-b5a5-2dcd3955d790",
                    },
                },
            ],
        },
    };

    return (
        <div className="flex gap-5 flex-col md:flex-row">
            <div className="bg-[#202020] rounded shadow w-full md:w-[40%] p-8 flex flex-col gap-3 h-fit">
                <Image
                    className="rounded shadow"
                    width={75}
                    height={75}
                    alt="Profile image"
                    src="https://i.pravatar.cc/300"
                />
                <h2 className="text-xl font-bold">{user.name}</h2>
                <div className="flex flex-col gap-1 ">
                    <div className="flex items-center gap-2">
                        <HiOutlineMail className="opacity-80" />
                        <p>{user.email}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <MdLocationOn className="opacity-80" />
                        <p>India</p>
                    </div>
                </div>
                <div className=" space-y-1 gap-3 ">
                    <p className="text-sm opacity-80">Home address</p>
                    <span>Friends colony, Muradnagar</span>
                </div>
                <div className=" space-y-1 gap-3 ">
                    <p className="text-sm opacity-80">City</p>
                    <span>Ghaziabad</span>
                </div>
                <div className=" space-y-1 gap-3 ">
                    <p className="text-sm opacity-80">Pincode</p>
                    <span>201206</span>
                </div>
                <div className=" space-y-1 gap-3 ">
                    <p className="text-sm opacity-80">Phone number</p>
                    <span>123456789</span>
                </div>
                <div className=" space-y-1 gap-3 ">
                    <p className="text-sm opacity-80">Member since</p>
                    <span>23-06-2021</span>
                </div>
                <div className="w-full flex mt-5 justify-around">
                    <button className="px-2 py-1 bg-red-500 rounded shadow hover:bg-red-400 active:bg-red-500">
                        Delete account
                    </button>
                    <Link
                        href="/account/edit"
                        className="px-2 py-1 rounded shadow hover:bg-gray-800 active:bg-gray-500"
                    >
                        Edit account
                    </Link>
                </div>
            </div>
            <div className="bg-[#202020] rounded p-8 shadow w-full">
                <h1 className="text-2xl font-bold">Part purchases</h1>
                <>
                    <div className="flex mt-10 mb-5">
                        <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                            Product Details
                        </h3>
                        <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
                            Date
                        </h3>
                        <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
                            Price
                        </h3>
                        <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
                            Total
                        </h3>
                    </div>

                    {data.cart.products.map((product) => {
                        return (
                            <div
                                key={product.id}
                                className="flex items-center hover:bg-gray-800 -mx-8 px-6 py-5"
                            >
                                <div className="flex w-2/5">
                                    <div className="w-20">
                                        <img
                                            className="h-24"
                                            src="https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z"
                                            alt="product image"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-3 ml-4 flex-grow">
                                        <span className="font-bold text-sm">
                                            {product.name}
                                        </span>
                                        <span className="text-red-500 text-xs">
                                            {product?.store?.name}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex justify-center w-1/5">
                                    <span>10-20-1010</span>
                                </div>
                                <span className="text-center w-1/5 font-semibold text-sm">
                                    ${product.price}
                                </span>
                                <span className="text-center w-1/5 font-semibold text-sm">
                                    ${product.price}
                                </span>
                            </div>
                        );
                    })}
                </>
            </div>
        </div>
    );
};

export default AccountPage;
