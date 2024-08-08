import React from "react";
import shivu2 from "../Images/shivu2.jpg";
import { aboutData, authorName } from "../Data/AllData";
import {gsap} from "gsap";


const AboutPage = () => {

  const handleMouseHover=()=>{
    gsap.set(".about-img-wrapper",{rotate:0,duration:0.2})
  }

  const handleMouseLeave=()=>{
    gsap.set(".about-img-wrapper",{rotate:'-10deg',duration:0.2})
  }

  return (
    <section className="about_page" id="about">
      <div className="about-title">
        <h6>GET TO KNOW MORE</h6>
        <h1>ABOUT ME</h1>
      </div>
      <div className="about-info">
        <div className="about-img-wrapper" onMouseEnter={handleMouseHover}  onMouseLeave={handleMouseLeave}>
          <img  src={shivu2} alt="shivu" className="about-img" />
        </div>
        <div className="about-info-content">
          <h1>Hello!, I am {authorName}</h1>
          <p>{aboutData}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
