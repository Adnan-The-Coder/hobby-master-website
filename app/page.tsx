"use client";
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import Projects from '@/components/Projects';

const Home = () => {

  return (
    <>
    <Navbar/>
    <Hero/>
    <Features/>
    <Projects/>
    <Footer/>
    </>
  );
};

export default Home;
