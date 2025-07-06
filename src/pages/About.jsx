import React from "react";

const About = () => {
  return (
    
    <section
  id="About"
  className="min-h-screen w-full py-20 bg-transparent text-white px-6 z-10 relative"
>
  {/* ✅ Heading outside flex row */}
  <h2 className="text-4xl font-bold text-center text-white mb-12">About</h2>

  {/* FLEX LAYOUT for content */}
  <div className="flex flex-col md:flex-row items-center justify-center gap-10">
    
    {/* LEFT: About Text */}
    <div className="md:w-1/2 w-full md:pr-10 mb-10 md:mb-0">
      <p className="text-lg leading-8 text-gray-300">
        I'm a <span className="font-semibold text-blue-500">Full-Stack Web Developer</span> 
        who crafts modern, scalable, and high-performance web applications.
        I specialize in frontend development with 
        <span className="text-white"> React.js</span> and <span className="text-white">Tailwind CSS</span>, and backend engineering with 
        <span className="text-white"> Node.js, Express, and MongoDB</span>.
      </p>

      <p className="mt-6 text-lg leading-8 text-gray-300">
        My passion lies in translating complex ideas into elegant code.
        I love building responsive UI, secure backends, and seamless user experiences.
      </p>

      <p className="mt-6 text-lg leading-8 text-gray-300">
        Whether it's a portfolio, real-time chat app, or AI-powered tool — I always focus on clean architecture, modularity, and user-centric design.
      </p>
    </div>

    {/* RIGHT: ID Card */}
    <div className="md:w-1/2 w-full flex justify-center">
      <div className="w-[280px] h-[400px] bg-black/60 backdrop-blur-lg rounded-2xl shadow-2xl flex items-center justify-center p-4">
        <img
          src="/ID Card.png"
          alt="My ID Card"
          className="w-full h-full object-cover rounded-xl transition-transform duration-300 ease-in-out hover:scale-90"
        />
      </div>
    </div>
  </div>
</section>

  );
};

export default About;
