import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Other_skill,
  Skill_data,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden"
      style={{ transform: "scale(0.9" }}
    >
      {/* // 13, 10, 8, 4, 1 = 36
      aws,nextjs,react,vue,html,css,javascript,typescript,tailwind,nodejs,express,java,python
      gcp,flutter,dart,flask,php,mongodb,mysql,postgres,firebase,docker
      kubernetes,terraform,github,gitlab,githubactions,git,nginx,redis
      postman,bash,vscode,figma
      bun */}

      <SkillText />
      {/* <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        <img src="https://skillicons.dev/icons?i=aws,nextjs,react,vue,html,css,javascript,typescript,tailwind,nodejs,express,java,python" />
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        <img src="https://skillicons.dev/icons?i=gcp,flutter,dart,flask,php,mongodb,mysql,postgres,firebase,docker" />
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        <img src="https://skillicons.dev/icons?i=kubernetes,terraform,github,gitlab,githubactions,git,nginx,redis" />
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        <img src="https://skillicons.dev/icons?i=postman,bash,vscode,figma" />
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        <img src="https://skillicons.dev/icons?i=bun" />
      </div> */}

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Skill_data.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Frontend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Backend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Full_stack.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Other_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
