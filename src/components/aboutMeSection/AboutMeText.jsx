import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I am Dinesh Kumar, a passionate software developer with strong expertise
        in Java, Spring Boot, MySQl,React.js, and JavaScript. I specialize in
        building scalable and efficient web applications, handling both backend
        development and frontend development with a focus on writing clean,
        maintainable code and creating user-friendly interfaces, I am always
        eager to learn, solve complex problems, and work on innovative projects.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
      <button>
        <a
          href="DineshResume.pdf"
          download=""
          className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center"
        >
          Resume
        </a>
      </button>
    </div>
  );
};

export default AboutMeText;
