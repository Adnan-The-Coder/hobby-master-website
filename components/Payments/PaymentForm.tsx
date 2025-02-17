import React from "react";
import Link from "next/link";

// Define the props interface to include email and setEmail
interface PaymentCheckoutFormProps {
  amount: number;
  setAmount: React.Dispatch<React.SetStateAction<number>>; // Function to update amount
  email: string; // Email state
  setEmail: React.Dispatch<React.SetStateAction<string>>; // Function to update email
  onPaymentSubmit: (amount: number, email: string) => Promise<void>; // Function to handle payment submission
}

const PaymentCheckoutForm: React.FC<PaymentCheckoutFormProps> = ({
  amount,
  setAmount,
  email,
  setEmail,
  onPaymentSubmit,
}) => {

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (amount > 0 && email) {
      // Call the onPaymentSubmit function with the entered amount, email, and user status
      onPaymentSubmit(amount, email);
    } else {
      alert("Please enter a valid amount and email.");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-xl rounded-xl md:w-98 sm:w-full">
      <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">
        Payment Checkout
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex justify-between items-center">
          <label htmlFor="amount" className="text-lg font-medium text-gray-700">
            Enter Amount (₹):
          </label>
          <input
            id="amount"
            type="number"
            min="1"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))} // Update amount state
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter amount"
            required
          />
        </div>

        {/* Email input */}
        <div className="flex justify-between items-center">
          <label htmlFor="email" className="text-lg font-medium text-gray-700">
            Email:
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update email state
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 mt-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Pay ₹{isNaN(amount) || amount === 0 ? "0.00" : amount.toFixed(2)} {/* Guard check */}
        </button>
      </form>

      {/* Razorpay Secure Logo Section */}
      <div className="mt-6 text-center text-sm text-gray-600">
        <p>Secured by</p>
        <a
          href="https://razorpay.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Razorpay
        </a>
      </div>

      {/* Terms & Privacy Links */}
      <div className="mt-4 text-center text-sm text-gray-600">
        <Link
          href="/Terms-conditions"
          className="text-blue-600 hover:underline mr-4"
        >
          Terms and Conditions
        </Link>
        <Link
          href="/Privacy-Policy"
          className="text-blue-600 hover:underline"
        >
          Privacy Policy
        </Link>
      </div>
    </div>
  );
};

export default PaymentCheckoutForm;
