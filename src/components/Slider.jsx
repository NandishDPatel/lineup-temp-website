import React, { useState, useEffect, forwardRef } from "react";
import Flickity from "flickity";
import "flickity/css/flickity.css";
import { projects } from "../data/project.js";
import { motion } from "motion/react";
import "../index.css";
import "../App.css";

const ImageWithBlur = ({ img, blurredImg, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative h-64 w-full overflow-hidden">
      {/* Blurred background always visible */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-center blur-lg transition-transform duration-300 ease-in-out"
        style={{
          backgroundImage: `url(${blurredImg})`,
          opacity: isLoaded ? 0 : 1,
        }}
      ></div>

      {/* Real image: only visible after loading */}
      <img
        src={img}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          console.error("Image failed to load:", img);
          setIsLoaded(true); // fallback
        }}
        className={`absolute h-full w-full object-cover hover:scale-110 duration-300 transition-transform ease-in-out ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        loading="lazy"
      />
    </div>
  );
};


const ProjectSlider = forwardRef((props, ref) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const flkty = new Flickity(".gallery", {
      wrapAround: true,
      autoPlay: 3000,
      prevNextButtons: true,
      pageDots: false,
      cellAlign: "center",
      contain: true,
    });

    return () => {
      flkty.destroy();
    };
  }, []);

  const handleImageClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <div className="slideshow bg-white max-w-full" id="slider" ref={ref}>
      <div className="gallery js-flickity h-screen mx-auto bg-black">
        {projects.map((project) => (
          <div
            key={project.id}
            className="gallery-cell w-full relative cursor-pointer"
            style={{
              backgroundImage: `url(${project.image[0]})`,
              backgroundSize: "100% 100%",
              backgroundPosition: "center",
              height: "100%",
              width: "100%",
            }}
            onClick={() => handleImageClick(project)}
          >
            <motion.span
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 2 }}
              className="absolute top-5 left-1/2 transform -translate-x-1/2 text-4xl font-medium text-white px-2 py-1 rounded"
            >
              {project.title}
            </motion.span>
            <motion.span
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 2 }}
              className="absolute top-20 left-1/2 transform -translate-x-1/2 text-sm font-sm text-white px-2 py-1 rounded"
            >
              {project.tagline}
            </motion.span>
            <motion.span
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -50 }}
              transition={{ duration: 1 }}
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-sm font-bold text-white px-2 py-1 rounded"
            >
              {project.tag}
            </motion.span>
          </div>
        ))}
      </div>

      {/* Image Grid Modal */}
      {isModalOpen && selectedProject && projects && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 overflow-y-auto p-4 flex flex-col">
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsModalOpen(false)}
              className="text-white text-2xl hover:text-gray-300 hover:cursor-pointer"
            >
              ×
            </button>
          </div>

          <div
            className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 flex-grow overflow-y-auto`}
          >
            {/* {selectedProject.image.map((img, index) => (
              <div key={index} className="image-box relative h-64 w-full overflow-hidden">
                <div
                  className="blurred-img absolute inset-0 bg-cover bg-no-repeat bg-center blur-lg "
                  style={{
                    backgroundImage: `url(${selectedProject.imageBlurred[index]})`,
                  }}
                >
                </div>

                <img
                    src={img}
                    alt={`Project ${selectedProject.id} - ${index}`}
                    className="absolute h-full w-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    decoding="async"
                  />
              </div>
            ))} */}
            {selectedProject.image.map((img, index) => (
  <ImageWithBlur
    key={index}
    img={img}
    blurredImg={selectedProject.imageBlurred[index]}
    alt={`Project ${selectedProject.id} - ${index}`}
  />
))}

          </div>

          <div className="text-center text-white py-4">
            <span className="text-xl font-medium px-2 py-1">
              {selectedProject.tag}
            </span>
          </div>
        </div>
      )}
    </div>
  );
});

export default ProjectSlider;
