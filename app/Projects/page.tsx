'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Code, BookOpen, Video, X } from 'lucide-react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  Tutorial: URL | null; // Allow null for tutorial
  VideoLink: URL | null; // Allow null for video demonstration
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Jarvis Desktop Assitant',
    description: 'A tkinter GUI Based interactive Desktop Assistant built using Python and has API integrations.',
    image: '/assets/jarvis.jpeg',
    price: 129.99,
    Tutorial: new URL('https://www.youtube.com/watch?v=W7gI6r0IVIE&list=PLhBsO0aDPQ2GNpiLGUP2xjo-gEienL893'),
    VideoLink: new URL('https://www.youtube.com/watch?v=JkdTQzA_KOw'),
  },
  {
    id: '2',
    title: 'Time Management System',
    description: 'A User friendly time management system with a calendar view and task tracking features.',
    image: '/assets/toggle.webp',
    price: 29.99,
    Tutorial: null, // No tutorial
    VideoLink: new URL('https://www.youtube.com/watch?v=SSAMQDuCp5w'),
  },
  {
    id: '3',
    title: 'Airways Management System',
    description: 'A complete airline management system with booking, check-in, and flight tracking features.',
    image: '/assets/cops.webp',
    price: 39.99,
    Tutorial: null, // No tutorial
    VideoLink: new URL('https://www.youtube.com/watch?v=S-bOqnopwSI'), // No video demonstration
  },
  // Add more projects as necessary...
];

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    // Prevent background scrolling when modal is open
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Re-enable scrolling when modal is closed
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <>
    <Navbar/>
    <br />
    <br />
    <div className="container mx-auto py-8 md:py-12 px-4">
      <h1 className="text-3xl text-white md:text-4xl font-bold text-center mb-8 md:mb-12">Projects</h1>
      
      {/* Modified grid to have max 3 columns and wider cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:scale-105 w-full"
          >
            <div className="relative h-48 sm:h-56 lg:h-64 w-full">
              <Image 
                src={project.image} 
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            
            <div className="p-5 md:p-6 lg:p-8">
              <h2 className="text-xl text-gray-950 md:text-2xl font-semibold mb-3">{project.title}</h2>
              <p className="text-gray-600 text-sm md:text-base mb-5">{project.description}</p>
              
              <div className="flex justify-around mt-5 md:mt-6">
                <div className="group relative">
                  <button 
                    onClick={() => openModal(project)}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
                    aria-label="Source Code"
                  >
                    <Code className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
                  </button>
                  <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white text-xs py-1 px-2 rounded whitespace-nowrap z-10">
                    Source Code
                  </span>
                </div>
                
                {/* Tutorial button */}
                <div className="group relative">
                  {project.Tutorial ? (
                    <Link 
                      href={project.Tutorial.toString()}
                      passHref
                    >
                      <button 
                        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
                        aria-label="Tutorial"
                      >
                        <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
                      </button>
                    </Link>
                  ) : (
                    <button 
                      className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
                      disabled
                    >
                      <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
                    </button>
                  )}
                  <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white text-xs py-1 px-2 rounded whitespace-nowrap z-10">
                    {project.Tutorial ? 'Tutorial' : 'Coming up soon'}
                  </span>
                </div>
                
                {/* Video demonstration button */}
                <div className="group relative">
                  {project.VideoLink ? (
                    <Link 
                      href={project.VideoLink.toString()}
                      passHref
                    >
                      <button 
                        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
                        aria-label="Video Demonstration"
                      >
                        <Video className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
                      </button>
                    </Link>
                  ) : (
                    <button 
                      className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
                      disabled
                    >
                      <Video className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
                    </button>
                  )}
                  <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white text-xs py-1 px-2 rounded whitespace-nowrap z-10">
                    {project.VideoLink ? 'Video Demonstration' : 'Coming up soon'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div 
            className="bg-white rounded-lg max-w-sm md:max-w-md w-full p-5 md:p-6 lg:p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={closeModal}
              className="absolute top-3 right-3 md:top-4 md:right-4 text-gray-500 hover:text-gray-700"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            
            <h3 className="text-xl md:text-2xl font-bold mb-4">{selectedProject.title} - Source Code</h3>
            
            <div className="mb-6">
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-center py-6 md:py-8 px-4 rounded-lg mb-4">
                <p className="text-md md:text-lg font-medium mb-2">Unlock the complete source code</p>
                <p className="text-3xl md:text-4xl font-bold">₹{selectedProject.price.toFixed(2)}</p>
                <p className="text-xs md:text-sm mt-2 opacity-80">One-time payment, lifetime access</p>
              </div>
              
              <ul className="space-y-2 mb-6 text-gray-700">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span> Full documentation included
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span> 30-day technical support
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span> All dependencies included
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span> Regular updates
                </li>
              </ul>
            </div>
            
            <button className="w-full py-2 md:py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300 shadow-md">
              Continue to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
    <Footer/>
    </>
  );
}
