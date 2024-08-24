"use client";
import React from 'react';
// import ThreeDBackground from './ThreeDBackground';
import ThreeDBackground from '@/components/ui/3Dbackground';
import Navbar2 from "@/components/Navbar2";
import Footer from "@/components/Footer";

const Aboutpage = () => {
  return (
  <>
      <Navbar2 />
    <div className="relative w-full h-screen overflow-hidden">
      <br></br>
      <br></br>
      <br></br>
      <ThreeDBackground />
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 z-10">
        <h2 className="text-5xl font-bold mb-8 text-white">About Us</h2>
        <p className="text-lg mb-4 text-white">
        Welcome to our vibrant community, where passion for technology, artificial intelligence, coding, and robotics fuels our collective journey of discovery and innovation.
        <br></br>
        Our mission is to empower you with high-quality content and tutorials that inspire exploration, foster innovation, and ignite creativity. 

        We believe in the transformative power of learning and the limitless potential of the human mind. Our platform is a testament to this belief, offering a rich array of resources designed to stimulate curiosity, challenge conventional thinking, and encourage problem-solving. 
        <br></br>
        <br></br>
        From comprehensive hacking tutorials that demystify the complex world of cybersecurity to creative DIY projects that blend art and technology, we strive to bring you the best resources. Our content is meticulously curated and regularly updated, ensuring you have access to the latest trends and developments in the tech world.

        But we`re more than just a resource hub. We`re a thriving community of innovators, dreamers, and doers. We believe in the power of collaboration and the magic that happens when bright minds come together. That`s why we invite you to join us, to be part of this dynamic community that learns together, grows together, and innovates together.

        By subscribing, you`ll stay updated with our latest content, gain exclusive access to our expert-led webinars and workshops, and become part of a network of like-minded individuals. You`ll also have the opportunity to contribute your own ideas, share your projects, and learn from others.

        So, come along and join us on this exciting journey of learning and creativity. Together, let`s explore the fascinating world of technology, push the boundaries of innovation, and create a future that`s as brilliant as our imaginations.🚀 </p>
        <p className="text-lg mb-4 text-white">
          We aim to bring you the best resources and inspiration for your projects. Subscribe to stay updated with our latest content and be part of our community of innovators.
        </p>
      </section>
    </div>
      <Footer />
  </>
  );
};

export default Aboutpage;
