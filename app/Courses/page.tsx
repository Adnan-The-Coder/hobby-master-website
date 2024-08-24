"use client";
import React from 'react';
import Navbar2 from '@/components/Navbar2';
import Footer from '@/components/Footer';

const Coursespage = () => {
  const courses = [
    {
      id: 1,
      title: 'JARVIS COURSE',
      description: 'Unleash the power of automation at your fingertips. Engineered with Python, this state-of-the-art course is equipped with over 20+ dynamic features designed to streamline your digital life. Experience the future of automation.',
      videoUrl: 'https://www.youtube.com/embed/W7gI6r0IVIE?list=PLhBsO0aDPQ2GNpiLGUP2xjo-gEienL893',
      design: 'Modern and Sci-Fi Futuristic',
    },
    {
      id: 2,
      title: 'Enhance Your Python Skills With projects',
      description: "Enhance your Python skills with hands-on projects. Explore coding challenges, real-world applications, and tutorials to boost your programming expertise.",
      videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLhBsO0aDPQ2GHp0kMvlanhJHDYqkJhIB0',
      design: 'Brilliant Modern Design',
    },
  ];

  return (
    <>
    <Navbar2/>
    <div className="py-12 bg-gradient-to-t from-cyan-800 to-gray-900">
      <section className="max-w-78xl mx-auto px-4 sm:px-6 lg:px-8 py-12 gradient-bg">
        <h2 className="text-3xl text-center font-bold mb-8">Explore Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl text-black font-bold mb-2">{course.title}</h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              {course.videoUrl ? (
                <div className="mb-4">
                  <iframe 
                      src={course.videoUrl}
                      title="YouTube video player" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen 
                  ></iframe>
                </div>
              ) : (
                <div className="mb-4">
                  <a href={course.videoUrl} target="_blank" rel="noopener noreferrer">
                    View Playlist
                  </a>
                </div>
              )}
              <p className="text-sm text-gray-500">Design: {course.design}</p>
            </div>
          ))}
        </div>
      </section>
      <h3 className='text-center'>More Courses Coming Soon...</h3>
    </div>
    <Footer/>
    </>
  );
};

export default Coursespage;
