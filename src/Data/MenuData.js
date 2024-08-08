import { FaFolderOpen, FaInfoCircle, FaPhone } from "react-icons/fa";
import { IoMdCog } from "react-icons/io";
import { TiHome } from "react-icons/ti";

export const menuData = [
  {
    icon: <TiHome className="icon text-[0.9rem]" />,
    title: "HOME",
  },
  {
    icon: <FaInfoCircle className="icon text-[0.9rem]" />,
    title: "ABOUT",
  },
  {
    icon: <IoMdCog className="icon text-[0.9rem]" />,
    title: "SKILLS",
  },
  {
    icon: <FaFolderOpen className="icon text-[0.9rem]" />,
    title: "PROJECTS",
  },
  {
    icon: <FaPhone className="icon text-[0.9rem]" />,
    title: "CONTACT",
  },
];

export const titleContent =
  "Crafting seamless and engaging web experiences through modern technologies. Whether you need a dynamic web application, an intuitive user interface, or robust back-end solutions, I’m here to transform your ideas into reality. Explore my projects and see how I can help bring your vision to life.";
