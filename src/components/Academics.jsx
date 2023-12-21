import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { academics } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ academics }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#343a40",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={academics.date}
      iconStyle={{ background: academics.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={academics.icon}
            alt={academics.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{academics.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {academics.company_name}
        </p>
      </div>

      <ul className='mt-5 font-semibold space-y-2'>
        {academics.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Academics = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Education
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {academics.map((academics, index) => (
            <ExperienceCard
              key={`academics-${index}`}
              academics={academics}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Academics, "work");
