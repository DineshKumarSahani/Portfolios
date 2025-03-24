import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import SingleContactSocial from "./SingleContactSocial";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/dinesh-sahani/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/DineshKumarSahani" Icon={FiGithub} />
      <SingleContactSocial link="https://www.instagram.com/dinesh_sahani" Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;
