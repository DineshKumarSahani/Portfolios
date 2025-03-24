import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Front-End Developer",
    // company: "Alex Apps",
    date: "2023 - Learn",
    responsibilities: [
      "Designing real world application.",
      "Working on front-end application.",
      "Working on the performance of web applications.",
      "Generating new ideas for better user experience.",
      "Create new user interface.",
    ],
  },
  {
    job: "Back-End Developer",
    // company: "Nucamp",
    date: "2024 - Learn",
    responsibilities: [
      "Problem solving from backend.",
      "Logic build for web application.",
      "Logic through optimization code implementation.",
      "Knowladge in Java and SpringBoot.",
      "Storing data in data base.",
    ],
  },
  {
    job: "Software Developer",
    // company: "Sprints",
    // date: "2024 - Present",
    responsibilities: [
      "For the Front-End Devlopment Html, CSS, TailwindCSS, JavaScript React.js .",
      "For the Back-End Devlopment Java and Spring Boot.",
      "For the Data base using MySQL.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
