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
      <div className="h-full w-full grid grid-cols-3 md:flex-row gap-10 px-10">
        <ProjectCard
          src="/TradingHub.png"
          title="Trading Hub"
          description="A Crypto Asset Management and Trading Platform. Tech Stack: VueJS, ExpressJS, MongoDB"
        />
        <ProjectCard
          src="/Zirkol.png"
          title="Zirkol"
          description="A E-Commerce Cross-Platform Mobile Application. Tech Stack: Flutter, NestJS, AWS EC2, Mysql, Elastic Search"
        />
        <ProjectCard
          src="/JarvixPay.png"
          title="Jarvix Pay"
          description="Intelligent one-stop Payment Application. Tech Stack: VueJS, Ionic, Typescript, ExpressJS, Mysql, AWS EC2, AWS ELB, AWS S3, AWS RDS"
        />
        <ProjectCard
          src="/Decarbon.png"
          title="Decarbon"
          description="A Carbon-base Coupon Platform for IOS & Android. Tech Stack: Flutter, ExpressJS, Mysql, AWS Lambda, AWS API Gateway, AWS Cognito"
        />
        <ProjectCard
          src="/Fanchat.png"
          title="Fanchat"
          description="Hong Kong Stock Price Prediction AI Chatbot. Tech Stack: Flutter, Python, Keras, Flask, Firebase, Dialogflow"
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="NextJS Portfolio Website"
          description="James's Personal Portfolio Website. Tech Stack: NextJS, Github Actions, Vercel"
        />
      </div>
    </div>
  );
};

export default Projects;
