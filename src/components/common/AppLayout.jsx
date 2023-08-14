"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "./Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserContext from "@/context/UserContext";
import ValidateUser from "./ValidateUser";

const AppLayout = ({ children }) => {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <UserContext>
                <ValidateUser>
                    <ToastContainer theme="dark" />
                    <div className="flex flex-col min-h-screen">
                        <Navbar />
                        <div className="max-w-[95%] md:max-w-[90%] my-2 flex-grow mx-auto w-full">
                            {children}
                        </div>
                        <div>Fototer</div>
                    </div>
                </ValidateUser>
            </UserContext>
        </QueryClientProvider>
    );
};

export default AppLayout;
