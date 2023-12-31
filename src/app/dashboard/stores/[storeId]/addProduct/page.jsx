"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { BsCardImage } from "react-icons/bs";

const imageUpload = async (data) => {
    const res = await fetch(
        `https://api.cloudinary.com/v1_1/jayant-cloud/image/upload`,
        {
            method: "POST",
            body: data,
        }
    );
    const imageData = await res.json();
    return imageData.url;
};

const AddProductPage = ({ params }) => {
    const { storeId } = params;
    const queryClient = useQueryClient();

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        price: "",
        quantity: "",
        storeId: storeId,
        category: "Others",
        address: "",
    });

    const [image, setImage] = useState(null);

    const options = [
        "Others",
        "Electronics",
        "Accessories",
        "Beauty",
        "Men",
        "Women",
        "Kids",
    ];

    const addProductMutation = useMutation({
        mutationFn: async (product) => {
            return await axios.post(
                `/api/dashboard/store/${storeId}/products`,
                product
            );
        },
        onSuccess: () => {
            queryClient.invalidateQueries(["account", "stores", "products"]);
            clear();
            toast.success("Product added to store");
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });

    const clear = () => {
        setFormData({
            name: "",
            description: "",
            price: "",
            quantity: "",
            storeId: storeId,
            category: "Others",
            address: "",
        });
        setImage(null);
    };

    const handleClear = (e) => {
        e.preventDefault();
        clear();
        toast.error("Data cleared");
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        e.preventDefault();
        const image = e.target.files[0];

        if (image.size > 2000000) {
            toast.error("Image size limit 2 MB");
            return;
        }

        const data = new FormData();
        data.append("file", image);
        data.append("upload_preset", "epic_store_cloud");
        setImage(data);
    };

    const handleUpload = async (e) => {
        e.preventDefault();

        const imageUrl = await imageUpload(image);
        // const imageUrl = "";
        const data = {
            name: formData.name,
            desc: formData.description,
            price: parseInt(formData.price),
            quantity: parseInt(formData.quantity),
            store_id: storeId,
            address: formData.address,
            image: imageUrl,
            category_id: "3bc680f0-2668-4f3a-a77a-247897a22ed4",
        };

        addProductMutation.mutate(data);
    };

    const styles = {
        inputBg: "bg-gray-700 text-slate-300",
    };

    return (
        <form onSubmit={handleUpload}>
            <div className="space-y-12 max-w-3xl mx-auto">
                <div className="border-gray-900/10">
                    <h2 className="text-3xl mt-5 font-semibold leading-7 ">
                        Product information
                    </h2>
                    <p className="mt-1 text-sm leading-6 ">
                        This information will be displayed publicly so be
                        careful while filling product information.
                    </p>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium leading-6 "
                            >
                                Product name
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-gray-600 sm:max-w-md">
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="block flex-1 border-0 outline-none bg-transparent py-1.5 px-2  placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="Apple iPhone 14 (128 GB) - Blue "
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label
                                htmlFor="description"
                                className="block text-sm font-medium leading-6 "
                            >
                                description
                            </label>
                            <div className="mt-2">
                                <textarea
                                    id="description"
                                    name="description"
                                    rows={3}
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    placeholder="Product description"
                                    className="block w-full rounded-md outline-none border-0 py-1.5 px-2 bg-gray-950 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label
                                htmlFor="price"
                                className="block text-sm font-medium leading-6 "
                            >
                                Price
                            </label>
                            <div className="mt-2">
                                <input
                                    type="number"
                                    name="price"
                                    value={formData.price}
                                    onChange={handleInputChange}
                                    id="price"
                                    required={true}
                                    placeholder="Price"
                                    className="block w-full rounded-md border-0 py-1.5 outline-none bg-transparent shadow-sm px-2 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label
                                htmlFor="quantity"
                                className="block text-sm font-medium leading-6 "
                            >
                                Inventory
                            </label>
                            <div className="mt-2">
                                <input
                                    type="number"
                                    name="quantity"
                                    value={formData.quantity}
                                    onChange={handleInputChange}
                                    id="quantity"
                                    required={true}
                                    placeholder="quantity"
                                    className="block w-full rounded-md border-0 outline-none py-1.5 px-2 bg-transparent shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label
                                htmlFor="category"
                                className="block mb-2 text-sm font-medium bg-transparent "
                            >
                                Product category
                            </label>
                            <select
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        [e.target.name]:
                                            e.target.value.toLowerCase(),
                                    });
                                }}
                                name="category"
                                id="category"
                                value={formData.category}
                                className=" border border-gray-300 bg-transparent text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5    "
                            >
                                {options.map((option, id) => (
                                    <option
                                        className="bg-black m-0 p-0"
                                        key={id}
                                    >
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="col-span-full">
                            <label
                                htmlFor="address"
                                className="block text-sm font-medium leading-6 "
                            >
                                Street address
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="address"
                                    id="address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    required={true}
                                    className="block w-full rounded-md border-0 bg-transparent outline-none px-2 py-1.5 text-slate-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label
                                htmlFor="cover-photo"
                                className="block text-sm font-medium leading-6 "
                            >
                                Product images
                            </label>
                            <div className="mt-2 flex justify-center rounded-lg border border-dashed px-6 py-10">
                                <div className="text-center">
                                    <BsCardImage
                                        className="mx-auto h-12 w-12 "
                                        aria-hidden="true"
                                    />
                                    <div className="mt-4 flex text-sm leading-6 text-slate-200">
                                        <label
                                            htmlFor="file-upload"
                                            className="relative cursor-pointer rounded-md  font-semibold text-slate-200 focus-within:outline-none focus-within:ring-2 focus-within:ring-gray-600 focus-within:ring-offset-2 hover:text-gray-500"
                                        >
                                            <span>Select a image</span>
                                            <input
                                                onChange={handleImageChange}
                                                id="file-upload"
                                                name="images"
                                                type="file"
                                                required={true}
                                                accept="image/*"
                                                className="sr-only "
                                            />
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs leading-5text-slate-200">
                                        PNG, JPG, GIF up to 10MB
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                    onClick={handleClear}
                    type="button"
                    className="text-sm font-semibold leading-6"
                >
                    Clear
                </button>
                <button
                    type="submit"
                    className="rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                >
                    {addProductMutation.isLoading ? "Loading..." : "Upload"}
                </button>
            </div>
        </form>
    );
};

export default AddProductPage;

// AddProductForm
