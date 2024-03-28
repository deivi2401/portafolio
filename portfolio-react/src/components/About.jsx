import React from "react";
import { Reveal } from "./Reveal";

export const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <Reveal>
              <p className="text-4xl font-bold inline border-b-4 border-pink-600">
                About
              </p>
            </Reveal>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <Reveal>
              <p>
                Hi my name is David, nice to meet you. Please take a look
                around.{" "}
              </p>
            </Reveal>
          </div>
          <div>
            <Reveal>
              <p>
                I'm passionate about making all kinds of web applications, and
                I'm fascinated by anything related to technology and programming
                and eager to learn whatever I can, and hopefully this portfolio
                reflects that. Thanks for passing by regardless!
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
};
