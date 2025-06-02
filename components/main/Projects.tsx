import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-10"
      id="projects"
      style={{ position: "relative", zIndex: 9998 }}
    >
      <h1 className="text-[32px] md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10 md:py-20">
        My Projects
      </h1>
      <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4 md:px-10">
        <ProjectCard
          src="/TradingHub.png"
          title="Trading Hub"
          description="A Crypto Asset Management and Trading Platform. Tech Stack: VueJS, ExpressJS, MongoDB"
          link="https://www.linkedin.com/in/shingson/overlay/1712941964511/single-media-viewer/?profileId=ACoAAChT3SIBo1Rizj9i5POZbI_jIBa9C6CQd8w"
        />
        <ProjectCard
          src="/Zirkol.png"
          title="Zirkol"
          description="A E-Commerce Cross-Platform Mobile Application. Tech Stack: Flutter, NestJS, AWS EC2, Mysql, Elastic Search"
          link="https://www.linkedin.com/in/shingson/overlay/experience/2213501470/multiple-media-viewer/?profileId=ACoAAChT3SIBo1Rizj9i5POZbI_jIBa9C6CQd8w&treasuryMediaId=1712942166815"
        />
        <ProjectCard
          src="/JarvixPay.png"
          title="Jarvix Pay"
          description="Intelligent one-stop Payment Application. Tech Stack: VueJS, Ionic, Typescript, ExpressJS, Mysql, AWS EC2, AWS ELB, AWS S3, AWS RDS"
          link="https://www.linkedin.com/in/shingson/overlay/experience/2213501470/multiple-media-viewer/?profileId=ACoAAChT3SIBo1Rizj9i5POZbI_jIBa9C6CQd8w&treasuryMediaId=1712942166816"
        />
        <ProjectCard
          src="/Decarbon.png"
          title="Decarbon"
          description="A Carbon-base Coupon Platform for IOS & Android. Tech Stack: Flutter, ExpressJS, Mysql, AWS Lambda, AWS API Gateway, AWS Cognito"
          link="https://github.com/zinxon/Decarbon-Flutter"
        />
        <ProjectCard
          src="/Fanchat.png"
          title="Fanchat"
          description="Hong Kong Stock Price Prediction AI Chatbot. Tech Stack: Flutter, Python, Keras, Flask, Firebase, Dialogflow"
          link="https://github.com/zinxon/Fanchat"
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="NextJS Portfolio Website"
          description="James's Personal Portfolio Website. Tech Stack: NextJS, Github Actions, Vercel"
          link="https://next-portfolio-zinxon.vercel.app/"
        />
      </div>
    </div>
  );
};

export default Projects;
