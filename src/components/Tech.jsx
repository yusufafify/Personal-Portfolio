import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import {fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      <motion.div variants={textVariant()}>
        <h1 className={`${styles.heroHeadText} text-white`}>
          Technologies <span className="text-[#915EFF]">Used:</span>
        </h1>
        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          These are some of the technologies and programming languages I worked
          with
        </p>
      </motion.div>
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
