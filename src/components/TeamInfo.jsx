import React from "react";
import { teamMembers } from "../data/teamInfo";
import { motion } from "motion/react";
const TeamInfo = () => {
  return (
    <>
      <div className="container max-w-full lg:px-32 sm:px-12 px-5">
        <div className="p-3">
          <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
            className="text-center border-b-2 m-auto max-w-full text-2xl font-bold py-2"
          >
            Meet Our Team
          </motion.h2>
          <div className="team py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {teamMembers.map((member) => (
                  <div
                    key={member.id}
                    className="team-member bg-white shadow-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="p-3 md:p-6">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="mx-auto h-40 w-40 md:h-64 md:w-64 object-cover rounded-full border-4 border-white shadow-md"
                      />
                      <h3 className="mt-3 md:mt-6 text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 text-center">
                        {member.name}
                      </h3>
                      <p className="mt-2 text-sm sm:text-md md:text-lg text-gray-500 font-medium text-center">
                        {member.role}
                      </p>
                      <p className="mt-2 md:mt-4 text-gray-600 text-justify text-sm sm:text-md md:text-lg">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TeamInfo;
