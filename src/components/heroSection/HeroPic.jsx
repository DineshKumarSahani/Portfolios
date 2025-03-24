import { motion } from "framer-motion";
import { PiHexagonThin } from "react-icons/pi";
import { fadeIn } from "../../framerMotion/variants";

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className=" h-full flex items-center justify-center "
    >
      <img
        src="../../public/images/mm.png"
        alt="Abdelrahman Qassem"
        className="max-h-[450px] w-auto"
      />

      <div className=" absolute -z-12 flex justify-center items-center animate-pulse ">
        <PiHexagonThin className=" md:h-[90%] sm:h-[120%] min-h-[570px] w-auto text-silver blur-md animate-[spin_20s_linear_infinite] " />
      </div>
    </motion.div>
  );
};

export default HeroPic;
