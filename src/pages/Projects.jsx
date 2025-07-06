import React from "react";

const projects = [
  {
    title: "Chat Application",
    description:
      "A real-time chat app with user auth, Firebase backend, and responsive design.",
    image: "./public/chat-bot.png",
    link: "https://your-chat-app.netlify.app",
  },
  {
    title: "Portfolio Website",
    description:
      "My personal portfolio showcasing skills, experience, and 3D animations using Three.js.",
    image: "/portfolio.jpeg",
    link: "https://your-portfolio.vercel.app",
  },
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured shopping site with cart, payment, admin panel using MERN stack.",
    image: "/ecommerce.jpeg",
    link: "https://your-store.vercel.app",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="w-full py-20 px-6 text-white bg-transparent">
      <h2 className="text-4xl font-bold text-center mb-16">My Projects</h2>

      <div className="flex flex-col gap-20 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } items-center gap-10`}
          >
            {/* Left: Image */}
           <div className="w-[300px] h-[200px] bg-black/60 rounded-xl shadow-xl overflow-hidden flex items-center justify-center">
          <img
                 src={project.image}
              alt={project.title}
                 className="w-full h-full object-cover"
                   />
               </div>


            {/* Right: Text */}
            <div className="w-full ">
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
              <p className="text-gray-300 mb-6">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition"
              >
                Visit Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
