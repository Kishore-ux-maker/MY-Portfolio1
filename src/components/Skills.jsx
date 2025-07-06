import React from "react";


import {
  SiJavascript,
  SiReact,
  SiMongodb,
  SiTailwindcss,
  SiNodedotjs,     // ✅ this is the correct one
  SiGithub,
} from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: <SiJavascript />, color: "#f7df1e" },
  { name: "React", icon: <SiReact />, color: "#61dafb" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#4DB33D" },
  { name: "TailwindCSS", icon: <SiTailwindcss />, color: "#38BDF8" },
{ name: "Node.js", icon: <SiNodedotjs />, color: "#3C873A" }, // ✅ correct

  { name: "GitHub", icon: <SiGithub />, color: "#fff" },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-[60vh] w-full flex flex-col justify-center items-center py-20 px-6 text-white z-10 relative"
    >
      <h2 className="text-4xl font-bold mb-12 text-center">Skill Section</h2>

      <div className="flex flex-wrap justify-center gap-10 max-w-5xl">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="w-[100px] h-[100px] rounded-full bg-black/60 backdrop-blur-md shadow-lg flex items-center justify-center transition-transform duration-500 transform hover:rotate-[360deg] hover:scale-110 hover:shadow-2xl"
            style={{ color: skill.color, fontSize: "40px" }}
            title={skill.name}
          >
            {skill.icon}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
