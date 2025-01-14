"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaLock, FaSpinner } from "react-icons/fa";
import PasswordStrengthMeter from "@/components/ui/PasswordStrengthMeter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ToastMessage from "@/components/ui/ToastMessage"; // Import your ToastMessage component

interface Toast {
  id: number;
  message: string;
  type: 'success' | 'error';
}

const Page: React.FC = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [nextId, setNextId] = useState(0);

  const addToast = (message: string, type: 'success' | 'error') => {
    const newToast = { id: nextId, message, type };
    setToasts((prev) => [...prev, newToast]);
    setNextId((prev) => prev + 1);

    // Auto-remove toast after 3 seconds
    setTimeout(() => {
      removeToast(newToast.id);
    }, 3000);
  };

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const onSignup = async () => {
    try {
      setLoading(true);
      await axios.post("/api/users/signup", user);
      addToast("Sign up successful! An email has been sent to verify your account.", 'success');
      
      const login_user = async () => {
        try {
          const response = await axios.post("/api/users/login", user);
          console.log(response);
          router.push('/verifyemail');
        } catch (error: any) {
          console.log("Login Failed ", error.message);
          addToast(error.message, 'error');
        }
      };
      setTimeout(login_user, 3000); // Delay login after signup success
    } catch (error: any) {
      console.log("Sign Up failed ", error.message);
      addToast(error.message, 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setButtonDisabled(!(user.email && user.password && user.username));
  }, [user]);

  return (
    <>
    <Navbar /> 
      <div className="py-8 min-h-screen bg-gradient-to-br from-emerald-900 via-gray-900 to-emerald-900 flex items-center justify-center relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden flex flex-col items-center justify-center min-h-screen py-2"
        >
          <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
            Create Account
          </h2>
          <div className="p-8 w-full">
            <form onSubmit={(e) => { e.preventDefault(); onSignup(); }}>
              <div className="mb-4">
                <label htmlFor="username" className="flex items-center">
                  <FaUser className="mr-2" />
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  value={user.username}
                  onChange={(e) => setUser({ ...user, username: e.target.value })}
                  placeholder="username"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="flex items-center">
                  <FaEnvelope className="mr-2" />
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  placeholder="email"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="flex items-center">
                  <FaLock className="mr-2" />
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={user.password}
                  onChange={(e) => setUser({ ...user, password: e.target.value })}
                  placeholder="password"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600"
                />
                <PasswordStrengthMeter password={user.password} />
              </div>
              <motion.button
                className={`w-full py-3 mt-5 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg shadow-lg 
                  hover:from-green-600 hover:to-emerald-700 focus:outline-none 
                  focus:ring-2 focus:ring-green-500 focus:ring-offset-2 
                  focus:ring-offset-gray-900 transition duration-200 ${buttonDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={onSignup}
                disabled={buttonDisabled || loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {loading ? <FaSpinner className="animate-spin mx-auto" size={24} /> : "Sign Up"}
              </motion.button>
            </form>
            {/* Add terms and conditions text */}
            <div className="mt-4 text-sm text-gray-400 text-center">
              By signing up, you agree with our{" "}
              <Link href="/Terms-And-Conditions" target="_blanck" className="text-green-400 hover:underline">
                terms and conditions
              </Link>.
            </div>
          </div>
          <div className="px-8 py-4 bg-gray-900 bg-opacity-50 flex justify-center">
            <p className="text-sm text-gray-400">
              Already have an account?{" "}
              <Link href={'/login'} className='text-green-400 hover:underline'>
                Login
              </Link>
            </p>
          </div>
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

export default Page;