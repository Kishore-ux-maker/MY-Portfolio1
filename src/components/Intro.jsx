import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Intro = () => {
  return (
    <section 
     id="Home"
    className="min-h-[50vh] w-full px-6 pt-40 pb-30 flex items-center justify-start text-white">
      <div className="max-w-4xl text-left">
        <h1 className="text-3xl md:text-5xl font-light leading-relaxed">
          I'm a{' '}
          <span className="font-bold text-blue-500">
            <Typewriter
              words={["fullstack web developer."]}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl">
          I'm a quick learner and very curious about learning web development.
        </p>
      </div>
         <h2 className="text-4xl font-bold mb-12 text-center"></h2>
    </section>
  );
};

export default Intro;
