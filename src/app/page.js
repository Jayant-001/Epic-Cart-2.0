"use client";

import Categories from "@/components/home/Categories";
import HeroSection from "@/components/home/Hero";
import HomeProducts from "@/components/home/HomeProducts";
import SellSection from "@/components/home/SellProducts";
import { userContext } from "@/context/UserContext";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useEffect } from "react";
import { toast } from "react-toastify";

export default function Home() {
    const { user, setUser } = useContext(userContext);

    const verifyMutation = useMutation({
        mutationFn: async () => {
            return await axios.get("api/auth/verify");
        },
        onSuccess: (res) => {
            setUser({
                id: res.data.user.id,
                name: res.data.user.name,
                email: res.data.user.email,
            });
        },
        onError: (err) => {
            toast.error(err.message)
            setUser({ id: null, name: null, email: null });
        },
    });

    useEffect(() => {
        if (user.id === null) {
            verifyMutation.mutate();
        }
    }, [user.id]);

    return (
        <div>
            <HeroSection />
            <Categories />
            <SellSection />
            <HomeProducts />
        </div>
    );
}
