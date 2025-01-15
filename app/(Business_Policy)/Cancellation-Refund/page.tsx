// cancellation-refund/page.tsx
"use client";
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import { NextPage } from 'next';

const CancellationRefund: NextPage = () => {
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
            Cancellation and Refund Policy
          </motion.h1>
          <motion.p
            className="text-lg mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Please read our Cancellation and Refund Policy carefully before using our services.
          </motion.p>
        </div>

        <motion.div
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-4">1. Cancellation Policy</h2>
          <p className="text-md leading-relaxed mb-4">
            At Hobby Master, we strive to provide the best personalized learning experience. If you wish to cancel your subscription, you can do so through your account settings or by contacting our support team. Cancellations made before the billing cycle will not incur any charges for the upcoming period.
          </p>

          <h2 className="text-2xl font-semibold mb-4">2. Refund Policy</h2>
          <p className="text-md leading-relaxed mb-4">
            We offer a 7-day refund policy for all our subscription plans. If you are not satisfied with our service within the first 7 days, you can request a refund. Refunds will be processed within 5-7 business days after the request has been approved.
          </p>

          <h2 className="text-2xl font-semibold mb-4">3. Non-Refundable Situations</h2>
          <p className="text-md leading-relaxed mb-4">
            Certain services and digital products may not be eligible for a refund once accessed or downloaded. Please review the specific terms applicable to each service during purchase.
          </p>

          <h2 className="text-2xl font-semibold mb-4">4. Contact Us</h2>
          <p className="text-md leading-relaxed">
            If you have any questions about our Cancellation and Refund Policy, please contact us at support@hobbymaster.com. We are here to help you and ensure you have a great experience.
          </p>
        </motion.div>
      </motion.div>
    </div>
    <Footer />
    </>
  );
};

export default CancellationRefund;
