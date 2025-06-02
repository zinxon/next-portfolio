"use client";

import Image from "next/image";
import React, { ReactNode } from "react";

interface Props {
  src: string;
  title: string;
  description: string | ReactNode;
  link: string;
}

const ProjectCard = ({ src, title, description, link }: Props) => {
  const handleCardClick = (e: React.MouseEvent) => {
    // Only open the main link if we didn't click on a nested link
    if (
      (e.target as HTMLElement).tagName !== "A" &&
      !(e.target as HTMLElement).closest("a")
    ) {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div
      onClick={handleCardClick}
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] hover:shadow-xl hover:border-purple-500 transition-all duration-300 transform hover:scale-105 cursor-pointer block bg-gray-800"
      style={{ position: "relative", zIndex: 9999 }}
    >
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
