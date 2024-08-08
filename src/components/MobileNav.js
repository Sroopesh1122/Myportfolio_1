import React, { useContext } from "react";
import { menuData } from "../Data/MenuData";
import { DataContext } from "../App";
import { IoCloseSharp } from "react-icons/io5";

const MobileNav = ({  navRef ,handleCloseClick}) => {
  const contextData = useContext(DataContext);

  const handleMenuClick = (val)=>{
    contextData.handleMenuClick(val)
    handleCloseClick()
  }

  return (
    <ul
      ref={navRef}
      className="absolute z-20  top-0 -left-full  h-[100vh] flex flex-col  md:hidden ps-6  list-none items-start justify-center gap-7 text-[1.2rem] font-semibold w-[100%]  mobile-menu"
    >
      <IoCloseSharp
            className="text-[1.5rem] cursor-pointer rounded-md absolute top-1 right-1 mobile-menu-close"
            onClick={handleCloseClick}
          />
      {menuData.map((data, idx) => (
        <li
          key={idx}
          onClick={()=>handleMenuClick(idx)}
          className={`menu-item ${
            contextData.selectedMenu === idx ? "menu-active " : ""
          }opacity-0`}
        >
          {data.icon}
          <span>{data.title}</span>
        </li>
      ))}
    </ul>
  );
};
export default MobileNav;
