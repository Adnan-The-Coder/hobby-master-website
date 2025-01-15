// shipping-delivery/page.tsx
"use client";
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import { NextPage } from 'next';

const Page: NextPage = () => {
  return (
    <>
    <Navbar />
    <div className="min-h-screen py-4 bg-gray-900 text-white flex flex-col items-center">
      <motion.div
        className="container mx-auto px-4 py-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-12">
          <motion.h1
            className="text-4xl font-bold mb-4"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
          >
            Shipping and Delivery Policy
          </motion.h1>
          <motion.p
            className="text-lg mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Please review our Shipping and Delivery Policy for more information.
          </motion.p>
        </div>

        <motion.div
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-4">1. Digital Content Delivery</h2>
          <p className="text-md leading-relaxed mb-4">
            Hobby Master provides online content, including personalized roadmaps and curated resources, which are accessible via our platform. There is no physical delivery or shipping involved. All learning materials are provided digitally and can be accessed at any time.
          </p>

          <h2 className="text-2xl font-semibold mb-4">2. Access to Content</h2>
          <p className="text-md leading-relaxed mb-4">
            Once you subscribe to our services, you will gain immediate access to the personalized learning roadmaps and resources directly on your account. You can download or view these materials at your convenience, within the given deadlines.
          </p>

          <h2 className="text-2xl font-semibold mb-4">3. No Physical Products</h2>
          <p className="text-md leading-relaxed mb-4">
            Hobby Master does not offer any physical products or shipping services. All the materials, including video lessons, articles, and guides, are provided online for a fully digital learning experience.
          </p>

          <h2 className="text-2xl font-semibold mb-4">4. Customer Support</h2>
          <p className="text-md leading-relaxed">
            If you face any issues accessing your content or have questions about your learning experience, please feel free to contact our support team at syedadnanali0106@gmail.com. We are here to ensure you have a seamless learning journey.
          </p>
        </motion.div>
      </motion.div>
    </div>
    <Footer />
    </>
  );
};

export default Page;
