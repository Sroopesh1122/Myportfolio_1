import React, { useContext, useEffect, useRef, useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import MobileNav from "./MobileNav";
import { gsap } from "gsap";
import { menuData } from "../Data/MenuData";
import { DataContext } from "../App";
import { authorName} from "../Data/AllData";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const mobile_menu_ref = useRef();

  const contextData = useContext(DataContext);

  useEffect(() => {
    var timeLine = gsap.timeline();

    timeLine
      .from(".menu-bar", {
        y: "-100%",
        opacity: 0,
        duration: 0.5,
      })
      .from(
        ".menu-bar h1",
        {
          x: "-150%",
          duration: 0.5,
        },
        "+=0.2"
      )
      .from(
        ".menu-bar button",
        {
          x: "400px",
          opacity: 0,
          duration: 0.4,
        },
        "+=0.1"
      )
      .from(
        ".menu-bar ul li",
        {
          y: "-10px",
          opacity: 0,
          stagger: 0.2,
        },
        0
      )
      .from(
        ".title-overlay",
        {
          left: 0,
          duration: 0.3,
          stagger: 0.2,
        },
        "+0.7"
      )
      .from(
        ".info-title .hero-info-bubble",
        {
          alpha: 0,
          duration: 0.2,
        },
        0
      )
      .from(
        ".hero-img-bubble",
        {
          alpha: 0,
          duration: 0.5,
        },
        0
      )
      .from(
        ".hero-img",
        {
          alpha: 0,
          scale: 0.6,
        },
        0
      )
      .from(
        ".mobile-hero-img",
        {
          alpha: 0,
          scale: 0.6,
        },
        0
      )
      .from(".invite-box-wrapper", {
        rotate: "360deg",
        alpha: 0,
        scale: 0.5,
      },0)
      .from(".download-btn", {
        alpha: 0,
        x: "-100px",
      },0)
      // .from(".about_page",{
      //   display:'none'
      // })
      // .from(".skills_page",{
      //   display:'none'
      // }).from(".project_page",{
      //   display:'none'
      // }).from(".contact_page",{
      //   display:'none'
      // });
  }, []);

  const handleMenuClick = () => {
    if (menuOpen === false) {
      gsap
        .timeline()
        .to(mobile_menu_ref.current, {
          left: 0,
          duration: 0.3,
        })
        .to(".main", {
          filter: "blur(5px)",
          duration: 0.3,
        })
        .to(mobile_menu_ref.current, {
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
          duration: 0.3,
        })
        .to(".mobile-menu-close", {
          opacity: 1,
        })
        .to(".mobile-menu li", {
          opacity: 1,
          stagger: 0.2,
          duration: 0.7,
        });

      setMenuOpen(true);
    } else {
      gsap
        .timeline()
        .to(".mobile-menu li", {
          opacity: 0,
          stagger: -0.2,
          duration: 0.7,
        })
        .to(".mobile-menu-close", {
          opacity: 0,
        })
        .to(mobile_menu_ref.current, {
          borderTopRightRadius: "50%",
          borderBottomRightRadius: "50%",
          duration: 0.3,
        })
        .to(".main", {
          filter: "blur(0px)",
          duration: 0.3,
        })
        .to(mobile_menu_ref.current, {
          left: "-100%",
          duration: 0.3,
        });
      setMenuOpen(false);
    }
  };
  return (
    <>
      <div className="flex justify-between items-center  px-1 xs:px-3 py-3 sticky top-0 w-full z-40 menu-bar ">
        <h1 className="text-nowrap font-charm text-[0.9rem] xs:text-2xl leading-6 md:text-4xl">
          {
            authorName
          }
        </h1>
        <ul className="md:flex hidden gap-8 list-none items-center justify-evenly text-[1.2rem] font-semibold ">
          {menuData.map((data, idx) => (
            <li
              key={idx}
              onClick={() => contextData.handleMenuClick(idx)}
              className={`menu-item ${
                contextData.selectedMenu === idx ? "menu-active" : ""
              }`}
            >
              {data.icon}
              <span>{data.title}</span>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          type="button"
          className="btn btn-primary hire-btn hidden md:flex"
        >
          Hire Me
        </a>

        {
          <HiOutlineMenuAlt3
            className="text-[1.2rem] cursor-pointer rounded-md  flex md:hidden"
            onClick={handleMenuClick}
          />
        }
        {
          <MobileNav
            navRef={mobile_menu_ref}
            handleCloseClick={handleMenuClick}
          />
        }
      </div>
    </>
  );
};

export default Navbar;
