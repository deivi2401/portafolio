import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiArrowNarrowRight, HiOutlineMail } from "react-icons/hi";
import { Reveal } from "./Reveal";
import { Link } from "react-scroll";

export const Home = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/*Todo: Implementar las burbujas flotantes de sociales*/}

      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <Reveal>
          <p className="text-pink-600">Hello, my name is</p>
        </Reveal>
        <Reveal>
          <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
            David Lopez
          </h1>
        </Reveal>
        <Reveal>
          <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
            I'm a Full Stack Developer.
          </h2>
        </Reveal>
        <Reveal>
          <p className="text-[#8892b0] py-4 max-w-[700px]"> </p>
        </Reveal>
        <Reveal>
          <Link
            onClick={handleClick}
            to="work"
            spy={true}
            smooth={true}
            duration={500}
          >
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </Reveal>
        <Reveal>
          <div className="grid grid-cols-3 justify-start hover:cursor-pointer">
            <a href="https://github.com/deivi2401" className="px-1">
              <FaGithub size={20} color="white" />
            </a>
            <a
              href="https://www.linkedin.com/in/david-lopez-89a777207/"
              className="px-1"
            >
              <FaLinkedin size={20} color="white" />
            </a>
            <Link
              onClick={handleClick}
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              <HiOutlineMail size={20} color="white" />
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
};
