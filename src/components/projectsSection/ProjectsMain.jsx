import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { h1 } from "framer-motion/client";

const projects = [
  {
    name: "Ai Resume Generater",
    year: "Dec 2024",
    align: "right",
    image: "../../public/images/resumeGen.jpg",
    link: "#",
    
  },
  {
    name: "File Hiding and Unhiding",
    year: "Mar 2024",
    
    align: "left",
    image: "../../public/images/filehide.jpg",
    link: "#",
    
   
  },
  {
    name: "Weather App",
    year: "Nov 2023",
    align: "right",
    image: "../../public/images/website-img-3.jpg",
    link: "#",
  },
  {
    name: "Cloth Hub",
    year: "May2024",
    align: "left",
    image: "../../public/images/cothHub.jpg",
    link: "#",
    
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
