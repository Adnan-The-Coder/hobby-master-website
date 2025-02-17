"use client";
import PaymentCheckoutForm from '@/components/Payments/PaymentForm';
import PaymentSuccess from '@/components/Payments/PaymentSuccess';
import Script from 'next/script';
import React, { useEffect, useState } from 'react'
import { useRouter } from "next/navigation";
import axios from 'axios';

interface UserData {
  _id: string;
  username: string;
  email: string;
  isVerified: boolean; // Updated to use isVerified
  isAdmin: boolean;    // You can use this if needed
}

function Page() {
    const [amount,setAmount] = useState<number>(0);
    const [email,setEmail] = useState<string>('');
    const [data, setData] = useState<UserData | null>(null);
    const router = useRouter();


    const getUserDetails = async () => {
      try {
          const res = await axios.get<{ data: UserData }>('/api/users/me');
          setData(res.data.data);
      } catch (error) {
          console.error(error);
      }
  };
    

    useEffect(()=>{
      getUserDetails();
    });

    const EmailSuccess = async () => {
      await axios.post("/api/payments/razorpay/sendVerifyEmail", data);
      alert("Email Sent !");
    }

    const createOrder = async () => {
        const res = await fetch('/api/payments/razorpay/createOrder',{
            method:'POST',
            body: JSON.stringify({amount:amount * 100}),
        })
        const data = await res.json();

        const PaymentData = {
            key: process.env.RAZORPAY_LIVE_KEY_ID,
            order_id: data.id,
            
            handler: async function (response: any) {
                // verify payment
                const res = await fetch("/api/payments/razorpay/verifyOrder", {
                  method: "POST",
                  body: JSON.stringify({
                    orderId: response.razorpay_order_id,
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpaySignature: response.razorpay_signature,
                  }),
                });
                const data = await res.json();
                console.log(data);
                if (data.isOk) {
                  // do whatever page transition you want here as payment was successful
                  router.push('/Payment-Success');
                  EmailSuccess();
                  // alert("Payment successful");
                  // <PaymentSuccess/>
                } else {
                  alert("Payment failed");
                }
              },
        };

        const payment = new (window as any).Razorpay(PaymentData);
        payment.open();


    }

  return (
    <div className="flex w-screen h-screen items-center justify-center flex-col gap-4">
        <Script 
            type='text/javascript'
            src='https://checkout.razorpay.com/v1/checkout.js'
        />
        <PaymentCheckoutForm
        amount={amount}
        setAmount={setAmount}
        email={email}
        setEmail={setEmail}
        onPaymentSubmit={createOrder} // Pass the createOrder function
      />
      {/* <input
        type='number'
        placeholder='Enter Amount'
        className="px-4 py-2 rounded-md text-black"
        value={amount}
        onChange={(e)=>setAmount(Number(e.target.value))}
      />
      <button className='bg-green-500 text-white px-4 py-2 rounded-md' 
      onClick={createOrder}
      >
        Create Order
      </button> */}
    </div>
  )
}

export default Page