import React from "react";
import Tilt from "react-tilt";
import { color, motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import troyFace from "../../public/troy_face.jpg";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col">
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText} style={{ color: "#d989a6" }}>
              Introduction
            </p>
            <h2 className={styles.sectionHeadText}>Overview.</h2>
          </motion.div>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            I'm a web/mobile developer with four years of advanced, daily
            implementation experience in framework technologies such as Next.js,
            React/React Native, and Node. Maintain a deep understanding and
            utilization of cloud based technologies such as Supabase and AWS.
            Previously, I worked as a Production Director for a number of
            commercial radio stations where I maintained broadcast servers,
            databases, and produced advertisements for clients.
          </motion.p>
        </div>
        <img
          className="rounded-full shadow-lg shadow-gray-100"
          style={{ height: "25%", width: "25%" }}
          src={troyFace}
        />
      </div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
