// import ExperienceInfo from "./ExperienceInfo";

// const ExperienceTopLeft = () => {
//   return (
//     <div className="flex flex-col gap-6 w-[300px]">
//       <p className="text-orange font-bold uppercase text-3xl font-special text-center">
//         Since 2022
//       </p>
//       <div className="flex justify-center items-center gap-4">
//         <ExperienceInfo number="3" text="Years" />
//         <p className="font-bold text-6xl text-lightBrown">-</p>
//         <ExperienceInfo number="23" text="Websites" />
//       </div>
//       <p className="text-center">
//         With 3 years of experience building dynamic and user-friendly web
//         applications.
//       </p>
//       <ExperienceInfo number="$100k" text="Max Budget" />
//     </div>
//   );
// };

// export default ExperienceTopLeft;






import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="xl:w-[25%] lg:w-[30%] border border-lightBrown p-4 rounded-xl">
      <p className="text-lg text-center text-lightGrey">
        I am{" "}
        <span className="font-bold text-white">
          Softwere Devloper
        </span>
        , best practices to create scalable and maintainable
        solutions give. <br />
        My experience working on diverse projects, Company
        websites to{" "}
        <span className="font-bold text-white">Problem Solution </span>,
         aiming for clean code and exceptional user experiences.
      </p>
    </div>
  );
};

export default ExperienceTopLeft;

