import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    id: 1,
    title: 'Jarvis',
    description: 'Unleash the power of automation at your fingertips. Engineered with Python, this state-of-the-art tool is equipped with over 20+ dynamic features designed to streamline your digital life. Experience the future of desktop assistance through its interactive and user-friendly Tkinter GUI.',
    imageUrl: '/assets/jarvis.jpeg',
    tags: ['Python', 'Tkinter'],
    link: 'https://www.youtube.com/watch?v=aj7t6DxpHAE',
  },
  {
    id: 2,
    title: 'Toggle',
    description: 'Master your time with Toggle, a revolutionary time management system built using Python. With SQL database connectivity, it ensures seamless data handling and storage. Its intriguing Tkinter GUI offers an intuitive and engaging user experience.',
    imageUrl: '/assets/toggle.webp',
    tags: ['Python', 'SQL'],
    link: 'https://www.youtube.com/watch?v=SSAMQDuCp5w',
  },
  {
    id: 3,
    title: 'Website',
    description: 'Dive into the world of creativity creating Websites which are modern and stylish designed for the future. Built using cutting-edge technologies like NEXT.JS, Tailwind CSS, and TypeScript, it offers interactive options and a wealth of resources to fuel your passion. Hobby Master - Embrace the future, ignite your imagination.',
    imageUrl: '/assets/website.jpg',
    tags: ['NEXTJS','Typescript','Tailwind CSS'],
    link: '#',
},
  {
    id: 4,
    title: 'COPS',
    description: 'Navigate the skies with ease using COPS, a cutting-edge airways management system built using Python. Designed to revolutionize air traffic control, COPS brings efficiency and precision to your operations. Experience the future of airways management with COPS - Soaring above, beyond expectations.',
    imageUrl: '/assets/cops.webp',
    tags: ['Python'],
    link: 'https://www.youtube.com/watch?v=S-bOqnopwSI',
  },
  {
    id: 5,
    title: 'Face Recognition',
    description: "Developed using Python and OpenCV. Experience the magic of technology as it identifies faces with remarkable precision. Follow our video tutorial to build your own system. Let's explore the fascinating realm of face recognition together on this thrilling tech journey!🚀",
    imageUrl: '/assets/biometric.jpg',
    tags: ['Python','OpenCV'],
    link: 'https://www.youtube.com/watch?v=I0gnK2D82-4',
  },
];

const Projects = () => {
  return (
    <div className="py-12 bg-gradient-to-l from-yellow-100 to-gray-800">
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 gradient-bg">
      <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
    </div>
  );
};

export default Projects;
