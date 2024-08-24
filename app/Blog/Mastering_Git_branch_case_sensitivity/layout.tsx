import React from 'react';
import Head from 'next/head'; // Assuming you are using Next.js for head management

const Layout: React.FC<{ children: React.ReactNode; }> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Mastering Git Branch Case Sensitivity | Hobby Master</title>
        <meta name="description" content="Learn about Git branch case sensitivity with a detailed guide, including commands, issues, and best practices to avoid confusion." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.yourwebsite.com/mastering-git-branch-case-sensitivity" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Mastering Git Branch Case Sensitivity" />
        <meta property="og:description" content="Learn about Git branch case sensitivity with a detailed guide, including commands, issues, and best practices to avoid confusion." />
        <meta property="og:image" content="https://hobbymaster.xyz/assets/Mastering%20Git%20Branch%20Case%20Sensitivity.jpg" />
        <meta property="og:url" content="https://hobbymaster.xyz/Blog/Mastering_Git_branch_case_sensitivity" />
        <meta property="og:type" content="article" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mastering Git Branch Case Sensitivity" />
        <meta name="twitter:description" content="Learn about Git branch case sensitivity with a detailed guide, including commands, issues, and best practices to avoid confusion." />
        <meta name="twitter:image" content="https://hobbymaster.xyz/Blog/Mastering_Git_branch_case_sensitivity" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        
        {/* Additional meta tags for accessibility and performance */}
        <meta name="author" content="Syed Adnan Ali" />
        <meta name="theme-color" content="#000000" />
        <link rel="stylesheet" href="/styles/global.css" />
      </Head>
      
      <main>
        {children}
      </main>
    </>
  );
};

export default Layout;
