"use client";

import { useState } from "react";
import { toast } from "react-toastify";

const AccountPage = () => {
    const [isEditMode, setIsEditMode] = useState(false);
    const [user, setUser] = useState({
        name: "user 1",
        email: "user1@gmail.com",
        gender: "Male",
        password: "******",
        address: "unknown",
    });

    const styles = {
        container: "flex justify-between w-full gap-10",
        input: `bg-gray-800 w-[80%] ${
            isEditMode ? "border" : ""
        } shadow rounded px-1`,
        button: "bg-gray-600 mx-auto px-5 py-1 rounded-lg shadow-lg cursor-pointer active:bg-gray-800",
    };

    const handleEdit = (e) => {
        e.preventDefault();
        setIsEditMode((prev) => !prev);
    };

    const handleSave = (e) => {
        e.preventDefault();
        setIsEditMode((prev) => !prev);
        toast.success("Profile updated");
    };

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    return (
        <form className="w-[50%] mx-auto flex text-lg flex-col justify-center items-start space-y-10 mt-10">
            <div className={styles.container}>
                <label htmlFor="name">Name</label>
                <input
                    disabled={!isEditMode}
                    onChange={handleChange}
                    value={user.name}
                    className={styles.input}
                    type="text"
                    name="name"
                    id="name"
                />
            </div>
            <div className={styles.container}>
                <label htmlFor="email">Email</label>
                <input
                    disabled={!isEditMode}
                    className={styles.input}
                    onChange={handleChange}
                    value={user.email}
                    type="email"
                    name="email"
                    id="email"
                />
            </div>
            <div className={styles.container}>
                <label htmlFor="password">Password</label>
                <input
                    disabled={!isEditMode}
                    onChange={handleChange}
                    className={styles.input}
                    value={user.password}
                    type="password"
                    name="password"
                    id="password"
                />
            </div>
            <div className={styles.container}>
                <label htmlFor="address">Address</label>
                <textarea
                    disabled={!isEditMode}
                    className={styles.input}
                    onChange={handleChange}
                    value={user.address}
                    name="address"
                    id="address"
                />
            </div>
            {isEditMode ? (
                <input
                    className={styles.button}
                    type="button"
                    value="Save"
                    onClick={handleSave}
                />
            ) : (
                <input
                    className={styles.button}
                    type="button"
                    value="Edit"
                    onClick={handleEdit}
                />
            )}
        </form>
    );
};

export default AccountPage;
