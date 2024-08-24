"use client";
import React from 'react';
import BlogsCard from '@/components/BlogCard'; // Adjust the path as needed
import Navbar2 from '@/components/Navbar2';
import Footer from '@/components/Footer';

// Sample data
const blogPosts = [
  {
    id: 1,
    imageUrl: 'https://hobbymaster.xyz/assets/Mastering%20Git%20Branch%20Case%20Sensitivity.jpg',
    title: 'Mastering Git Branch Case Sensitivity',
    description: 'This is a brief description of blog post 1.',
    blog_url: '/Blog/Mastering_Git_branch_case_sensitivity',
  },
];

const handleReadMore = (blog_url: string) => {
  // Implement read more functionality here
  window.open(blog_url);
};

const BlogPage: React.FC = () => {
  return (
    <>
    <Navbar2/>
    <br />
    <br />
    <div className="p-4 md:p-8 lg:p-12">
      <h1 className="text-4xl md:text-3xl font-bold mb-6 text-center">Blog Posts</h1>
      <br />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
            <BlogsCard
            key={post.id}
            imageUrl={post.imageUrl}
            title={post.title}
            onReadMore={() => handleReadMore(post.blog_url)}
            />
        ))}
      </div>
      <br />
      <br />
      <br />
      <h1 className='text-center text-xl'>More Blogs Coming Soon...</h1>
    </div>
    <br />
    <br />
    <Footer/>
    </>
  );
};

export default BlogPage;
