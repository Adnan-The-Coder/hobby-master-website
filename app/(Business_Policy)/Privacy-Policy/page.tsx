// privacy-policy/page.tsx

"use client";
import { motion } from 'framer-motion';
import { NextPage } from 'next';

const PrivacyPolicy: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center">
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
            Privacy Policy
          </motion.h1>
          <motion.p
            className="text-lg mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
          </motion.p>
        </div>

        <motion.div
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
          <p className="text-md leading-relaxed mb-4">
            We may collect personal information that you provide to us directly, such as your name, email address, and contact details when you interact with our site. Additionally, we may collect information about your browsing behavior and device through cookies and other tracking technologies.
          </p>

          <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
          <p className="text-md leading-relaxed mb-4">
            We use the information we collect to improve our website, respond to your inquiries, provide customer support, and send periodic updates. Your data helps us understand your preferences and enhance your overall experience with our services.
          </p>

          <h2 className="text-2xl font-semibold mb-4">3. Information Sharing</h2>
          <p className="text-md leading-relaxed mb-4">
            We do not sell or rent your personal information to third parties. We may share your data with trusted service providers who assist us in operating our website and conducting our business, provided that they agree to keep this information confidential.
          </p>

          <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
          <p className="text-md leading-relaxed mb-4">
            We implement appropriate security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl font-semibold mb-4">5. Your Choices</h2>
          <p className="text-md leading-relaxed mb-4">
            You have the right to access, correct, or delete your personal information. You can also opt out of receiving promotional communications from us by following the instructions provided in those communications.
          </p>

          <h2 className="text-2xl font-semibold mb-4">6. Changes to This Privacy Policy</h2>
          <p className="text-md leading-relaxed mb-4">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this Privacy Policy periodically for any modifications.
          </p>

          <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
          <p className="text-md leading-relaxed">
            If you have any questions or concerns about this Privacy Policy or our practices, please contact us at syedadnanali0106@gmail.com.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicy;