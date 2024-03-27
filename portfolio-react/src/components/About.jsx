import React from "react";

export const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi my name is David, nice to meet you. Please take a look around.{" "}
            </p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
              beatae facere adipisci reiciendis nobis temporibus numquam quae
              voluptate nesciunt molestias quas dolore quibusdam voluptas, eum
              veritatis saepe, distinctio ullam laboriosam!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
