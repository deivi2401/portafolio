import React from "react";
import Github from "../assets/github-mark.png";
import Firebase from "../assets/firebase.png";
import HTML from "../assets/Html.png";
import Javascript from "../assets/javascript.png";
import React_icon from "../assets/React_icon.png";
import CSS from "../assets/Css.png";

const Skills = () => {
  return (
    <div name="skills" className="bg-[#0a192f] text-gray-300">
      <div>
        <p className="text-4xl font-bold inline border-b-4 border-pink-600">
          Experience
        </p>
        <p className="py-4">// I've worked with the following technologies</p>
      </div>
      <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
          <img className="w-20 mx-auto" src={Github} alt="Github Logo" />
          <p className="my-4">Github</p>
        </div>
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
          <img className="w-20 mx-auto" src={HTML} alt="HTML Logo" />
          <p className="my-4">HTML</p>
        </div>
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
          <img className="w-20 mx-auto" src={CSS} alt="CSS Logo" />
          <p className="my-4">CSS</p>
        </div>
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
          <img className="w-20 mx-auto" src={Javascript} alt="Javascript Logo" />
          <p className="my-4">Javascript</p>
        </div>
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
          <img className="w-20 mx-auto" src={React_icon} alt="React Logo" />
          <p className="my-4">React</p>
        </div>
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
          <img className="w-20 mx-auto" src={Firebase} alt="Firebase Logo" />
          <p className="my-4">Firebase</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
