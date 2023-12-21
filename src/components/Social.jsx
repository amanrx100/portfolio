import React from "react";
import { Link } from "react-router-dom";

const Social = () => {
  return (
    <div className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0">
      <div className="bg-tertiary m-50px  min-h-[200px] rounded-3xl">
        <div className="flex flex-wrap justify-center">
          <h1 className="font-bold text-[30px] mt-5">Connect With Me </h1>
        </div>
        <div className="flex sm:gap-20 items-center justify-center mt-10 cursor-pointer ">
          <a href="https://www.instagram.com/its_amanrx100/?hl=en" target="_blank">
            <img
              className="hover:scale-110 transition duration-300 ease-in-out w-16"
              width="48"
              height="48"
              src="https://img.icons8.com/color/48/instagram-new--v1.png"
              alt="instagram-new--v1"
              />
            </a>
      
          <a href="inkedin.com/in/aman-kumawat-238074202/" target="_blank">
            <img
              className="hover:scale-110 transition duration-300 ease-in-out w-16 m-3"
              width="48"
              height="48"
              src="https://img.icons8.com/fluency/48/linkedin.png"
              alt="linkedin"
            />
          </a>

          <a href="https://github.com/amanrx100" target="_blank">
          <img
            className="hover:scale-110 transition duration-300 ease-in-out w-20"
            width="100"
            height="100"
            src="https://img.icons8.com/plasticine/100/github-squared.png"
            alt="github-squared"
            />
            </a>
        </div>
      </div>
    </div>
  );
};

export default Social;
