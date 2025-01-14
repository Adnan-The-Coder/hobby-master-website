"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FaLock, FaSpinner, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ToastMessage from "@/components/ui/ToastMessage";

interface Toast {
    id: number;
    message: string;
    type: 'success' | 'error';
}

const ResetPasswordPage = () => {
    const router = useRouter();
    const [token, setToken] = useState<string>("");
    const [newPassword, setNewPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [verified, setVerified] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [toasts, setToasts] = useState<Toast[]>([]);
    const [nextId, setNextId] = useState(0);

    const addToast = (message: string, type: 'success' | 'error') => {
        const newToast = { id: nextId, message, type };
        setToasts((prev) => [...prev, newToast]);
        setNextId((prev) => prev + 1);
        setTimeout(() => removeToast(newToast.id), 3000);
    };

    const removeToast = (id: number) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
    };

    const validatePasswords = () => {
        if (!newPassword || !confirmPassword) {
            addToast("Both password fields are required", 'error');
            return false;
        }
        if (newPassword !== confirmPassword) {
            addToast("Passwords must match", 'error');
            return false;
        }
        return true;
    };

    const resetPassword = async () => {
        if (!validatePasswords()) return;

        try {
            setLoading(true);
            const response = await axios.post('/api/users/reset-password', { token, password: newPassword });
            console.log("After posting axios", response.data);
            setVerified(true);
            addToast("Password reset successfully!", 'success');
            setTimeout(() => router.push('/login'), 2000);
        } catch (error: any) {
            setError(true);
            console.log(error.response?.data);
            addToast("Error occurred while resetting password", 'error');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const urlToken = new URLSearchParams(window.location.search).get("token");
        setToken(urlToken || "");
    }, []);

    return (
        <>
        <Navbar />
            <div className="py-8 min-h-screen bg-gradient-to-br from-emerald-900 via-gray-900 to-emerald-900 flex items-center justify-center relative overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-md w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden flex flex-col items-center justify-center py-2"
                >
                    <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
                        Create New Password
                    </h2>
                    <div className="p-8 w-full">
                        <form onSubmit={(e) => { e.preventDefault(); resetPassword(); }}>
                            <div className="mb-4">
                                <label htmlFor="newPassword" className="flex items-center">
                                    <FaLock className="mr-2" />
                                    New Password
                                </label>
                                <input
                                    id="newPassword"
                                    type="password"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    placeholder="New Password"
                                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="confirmPassword" className="flex items-center">
                                    <FaLock className="mr-2" />
                                    Confirm Password
                                </label>
                                <input
                                    id="confirmPassword"
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    placeholder="Confirm Password"
                                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600"
                                    required
                                />
                            </div>
                            <motion.button
                                className={`w-full py-3 mt-5 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg shadow-lg 
                                    hover:from-green-600 hover:to-emerald-700 focus:outline-none 
                                    focus:ring-2 focus:ring-green-500 focus:ring-offset-2 
                                    focus:ring-offset-gray-900 transition duration-200 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                                onClick={resetPassword}
                                disabled={loading}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {loading ? <FaSpinner className="animate-spin mx-auto" size={24} /> : "Set New Password"}
                            </motion.button>
                        </form>
                    </div>
                    {verified && (
                        <div className="flex flex-col items-center mt-6">
                            <FaCheckCircle className="text-green-500 text-5xl mb-2" />
                            <h2 className="text-2xl">Password Reset Success!</h2>
                            <Link href="/login" className="text-blue-500 hover:underline mt-2">Login to continue</Link>
                        </div>
                    )}
                    {error && (
                        <div className="flex flex-col items-center mt-6">
                            <FaExclamationCircle className="text-red-500 text-5xl mb-2" />
                            <h2 className="text-2xl text-red-500">Error occurred</h2>
                        </div>
                    )}
                </motion.div>
            </div>
            <Footer />
            <div className="absolute top-0 right-0 p-4">
                {toasts.map((toast) => (
                    <ToastMessage key={toast.id} message={toast.message} type={toast.type} onClose={() => removeToast(toast.id)} />
                ))}
            </div>
        </>
    );
};

export default ResetPasswordPage;