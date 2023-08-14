"use client";

import { userContext } from "@/context/UserContext";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useEffect } from "react";
import { toast } from "react-toastify";

const ValidateUser = ({ children }) => {
    const { user, setUser } = useContext(userContext);

    const verifyMutation = useMutation({
        mutationFn: async () => {
            return await axios.get("/api/auth/verify");
        },
        onSuccess: (res) => {
            setUser({
                id: res.data.user.id,
                name: res.data.user.name,
                email: res.data.user.email,
            });
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
