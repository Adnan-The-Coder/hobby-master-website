"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FaUserCircle, FaHome, FaServicestack, FaBell, FaClipboardList } from "react-icons/fa";
import Footer from "@/components/Footer";

interface UserData {
    _id: string;
    username: string;
    email: string;
    isVerified: boolean; // Updated to use isVerified
    isAdmin: boolean;    // You can use this if needed
}

export default function Dashboard() {
    const router = useRouter();
    const [data, setData] = useState<UserData | null>(null);
    const [activeTab, setActiveTab] = useState("overview");
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const getUserDetails = async () => {
        try {
            const res = await axios.get<{ data: UserData }>('/api/users/me');
            setData(res.data.data);
        } catch (error) {
            console.error(error);
            toast.error("Failed to fetch user details");
        }
    };

    const logout = async () => {
        try {
            await axios.get('/api/users/logout');
            toast.success("Logout Successful");
            router.push('/login');
        } catch (error: unknown) {
            console.error(error);
            toast.error("Logout failed");
        }
    };

    useEffect(() => {
        getUserDetails();

        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Set initial value
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
        <div className="flex flex-col h-screen bg-gray-900 overflow-hidden">
            <header className="flex justify-between items-center p-4 bg-gray-800 shadow-md">
                <h1 className="text-xl text-white md:hidden">Dashboard</h1>
                <h1 className="text-xl text-white hidden md:block">Dashboard</h1>
                <div className="hidden md:flex md:ml-4 space-x-4">
                    {["overview", "services", "notifications", "custom-plans"].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`text-white ${activeTab === tab ? 'font-bold' : 'hover:underline'}`}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </button>
                    ))}
                </div>

                <div className="relative">
                    <button onClick={() => setDropdownOpen(!dropdownOpen)}>
                        <FaUserCircle className="text-green-500 text-2xl cursor-pointer" />
                    </button>
                    {dropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                            <Link href="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Profile</Link>
                            <button onClick={logout} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200">Logout</button>
                        </div>
                    )}
                </div>
            </header>

            <div className="flex flex-1 overflow-hidden">
                <main className="flex-1 p-4 md:p-8 bg-gray-900 overflow-auto flex items-start justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl p-6 md:p-8 w-full max-w-3xl"
                    >
                        <h1 className="text-3xl font-bold text-center text-gradient bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text mb-6">
                            {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
                        </h1>

                        {activeTab === "overview" && data && (
                            <div>
                                <p className="text-lg text-white">
                                    Welcome {data.username}! Here's your Profile Overview.
                                </p>
                                <h2 className="mt-4 text-xl text-green-400 break-words">
                                    User ID: {data._id}
                                </h2>
                                <p className="text-lg text-white">Email: {data.email}</p>
                                <p className="text-lg text-white">Verified: {data.isVerified ? 'Yes' : 'No'}</p>
                            </div>
                        )}

                        {activeTab === "services" && (
                            <div>
                                <p className="text-lg text-white">Here are your services.</p>
                                {/* Add service details here */}
                            </div>
                        )}

                        {activeTab === "notifications" && (
                            <div>
                                <p className="text-lg text-white">You have no new notifications.</p>
                                {/* Add notification details here */}
                            </div>
                        )}

                        {activeTab === "custom-plans" && (
                            <div>
                                <p className="text-lg text-white">Create or manage your custom plans here.</p>
                                {/* Add custom plan details here */}
                            </div>
                        )}
                    </motion.div>
                </main>
            </div>

            <nav className="fixed bottom-0 left-0 right-0 bg-gray-800 p-4 md:hidden flex justify-around shadow-lg">
                {["overview", "services", "notifications", "custom-plans"].map((tab, index) => {
                    const icons = [<FaHome />, <FaServicestack />, <FaBell />, <FaClipboardList />];
                    return (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`text-white ${activeTab === tab ? 'font-bold' : ''}`}
                        >
                            {icons[index]}
                        </button>
                    );
                })}
            </nav>
        </div>
        {!isMobile && <Footer />}
        </>
    );
}