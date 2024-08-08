import React, { useEffect } from "react";
import heroImg from "../Images/shivu_ai_img.png";
import { titleContent } from "../Data/MenuData";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Splitting from 'splitting';
import { authorName, heroTitle_1, heroTitle_2, resumeLink } from "../Data/AllData";
import { PiFileTextFill } from "react-icons/pi";

gsap.registerPlugin(ScrollToPlugin);

const HeroPage = () => {

  useEffect(() => {

    Splitting({
      target:".about-info-content p",
      by:"words"
    })


    var timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".about_page",
        start: "top 60%", 
        end: "top 20%", 
        scrub: 2,
      },
    });

    timeline
      .fromTo(
        ".about-title",
        {
          opacity: 0,
        },
        {
          opacity: 1,
        }
      )
      .fromTo(
        ".about-img-wrapper",
        {
          rotate: 0,
          opacity: 0,
        },
        {
          rotate: "-10deg",
          opacity: 1,
        }
      ).fromTo(
        ".about-info-content h1",
        {
          opacity: 0,
        },
        {
          opacity: 1,
        }
      )

      gsap.fromTo(".about-info-content p .word",{
        opacity:0
      },{
        opacity:1,
        stagger:0.2,
        scrollTrigger:{
          trigger:".about-info-content p",
          start:"top 70%",
          end:"top 55%",
          scrub:2,
        } 
      })
  }, []);

  return (
    <section className="hero-section" id="home">
      <div className="hero-section-info">
        <img src={heroImg} className="mobile-hero-img" alt="" />
        <div className="info-title">
          <div className="hero-info-bubble"></div>
          <div className="titles">
            <div className="title title-small">
              <div className="title-overlay"></div>
              <h6>
                Hello there, I'm <span>{authorName}</span>
              </h6>
            </div>
            <div className="title">
              <div className="title-overlay"></div>
              <h6>{heroTitle_1}</h6>
            </div>
            <div className="title">
              <div className="title-overlay"></div>
              <h6>{heroTitle_2}</h6>
            </div>
          </div>
          <div className="invite-box-wrapper">
            <div className="lines"></div>
            <div className="invite-box">{titleContent}</div>
          </div>
          <div className="mt-3">
          <a href={resumeLink} rel="noreferrer" target="_blank" download={true} className='btn download-btn flex items-center w-fit justify-between'><PiFileTextFill className='btn-icon'/>Download Resume</a>
          </div>
        </div>
      </div>
      <div className="hero-section-img">
        <div className="hero-img-bubble"></div>
        <img src={heroImg} alt="hero-img" className="hero-img" />
      </div>
    </section>
  );
};

export default HeroPage;
