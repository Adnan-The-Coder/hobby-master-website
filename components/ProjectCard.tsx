"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  link: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { title, description, imageUrl, tags, link } = project;
  const [isClient, setIsClient] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    setIsClient(true);
    setAudio(new Audio('/assets/button-sound.mp3'));
  }, []);

  const handleClick = () => {
    if (audio) {
      audio.play();
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-800 to-black rounded-lg p-6">
      <div className="relative h-40 mb-4 rounded-md overflow-hidden">
        <Image src={imageUrl} alt={title} width={300} height={200} layout="responsive" objectFit="cover" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap mb-4">
        {tags.map((tag) => (
          <span key={tag} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md mr-2 mb-2 text-sm">
            {tag}
          </span>
        ))}
      </div>
      <a href={link} onClick={handleClick} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;
