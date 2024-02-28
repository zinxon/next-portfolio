import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/TradingHub.png"
          title="Trading Hub"
          description="A Crypto Asset Management and Trading Platform. Tech Stack: VueJS, ExpressJS, MongoDB"
        />
        <ProjectCard
          src="/Decarbon.png"
          title="Decarbon"
          description="Tech Stack: Flutter, ExpressJS, Mysql, AWS Lambda, AWS API Gateway, AWS Cognito"
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="NextJS Portfolio Website"
          description="Tech Stack: NextJS, Github Actions, Vercel"
        />
      </div>
    </div>
  );
};

export default Projects;
