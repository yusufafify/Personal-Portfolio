import { motion } from "framer-motion";

import { styles } from "../styles";
import { personal } from "../assets";
import { Tilt } from "react-tilt";

import hi from "../assets/hi.svg";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto mb-32`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#915EFF]">Youssef</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              🧠As I navigate the intricate world of biomedical engineering, I
              also thrive in the dynamic realm of web development. My journey
              involves mastering the intricacies of both fields, allowing me to
              bring a unique perspective to projects that bridge the gap between
              science and technology. ✨
            </p>
            <div className="mb-10 mt-2">
              <a href="#about">
                <button className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium text-sm  text-center py-2 px-4 rounded-xl inline-flex items-center mr-4 mb-2">
                  <img src={hi} alt="hi" className="w-6 h-6 mr-2" />
                  <span className="text-white">Know Me More</span>
                </button>
              </a>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1_DrsbRWjHMuq8RyLHcm0ZDvsmBDHSpEr/view?usp=drive_link",
                    "_blank"
                  )
                }
                className="bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-xl py-2 px-4 inline-flex items-center mr-4 mb-2"
              >
                <svg
                  className="fill-current w-6 h-6 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                </svg>
                <span className="text-white">Download CV</span>
              </button>
            </div>
          </div>
          <Tilt className="w-full flex justify-center items-center h-full sm:h-[530px]">
            <img
              src={personal}
              alt="personal photo"
              className="sm:w-[500px] sm:h-[500px] w-full h-full object-contain rounded-full"
              style={{ boxShadow: "5px 2px 5px 2px #b968ff" }}
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default Hero;
