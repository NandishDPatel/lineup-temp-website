import React, { forwardRef } from "react";
import { LineupMission } from "../data/teamInfo";
import { motion } from "motion/react";

const About = forwardRef((props, ref) => {
  return (
    <>
      <div
      ref={ref}
        className="container max-w-full lg:px-32 sm:px-12 px-5 mt-6 bg-gray-200 border-y-2 border-black"
        id="aboutSec"
        
      >
        <div className="p-3">
          <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
            className="text-center border-b-2 mx-auto text-2xl font-bold py-2 w-auto"
          >
            Our Mission
          </motion.h2>
          <div className="text-justify">{LineupMission}</div>
          {/* <div className="flex justify-center py-4">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 1.5,
                type: "spring",
                stiffness: 100,
                damping: 10,
              }}
              className="text-center origin-center max-w-prose"
            >
              {LineupMission}
            </motion.div>
          </div> */}
        </div>
      </div>
    </>
  );
});

export default About;
