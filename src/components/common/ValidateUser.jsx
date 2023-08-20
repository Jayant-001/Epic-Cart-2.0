"use client";

import { userContext } from "@/context/UserContext";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useEffect } from "react";
import { toast } from "react-toastify";

const ValidateUser = ({ children }) => {
    const { user, setUser, setCart } = useContext(userContext);

    const verifyMutation = useMutation({
        mutationFn: async () => {
            return await axios.get("/api/auth/verify");
        },
        onSuccess: (res) => {
            setUser(res.data.user);
            setCart(res.data.cart);
        },
        onError: (err) => {
            toast.error(err.message);
            setUser({ id: null, name: null, email: null });
        },
    });

    useEffect(() => {
        if (user.id === null) {
            verifyMutation.mutate();
        }
    }, [user.id]);

    return <>{children}</>;
};

export default ValidateUser;
