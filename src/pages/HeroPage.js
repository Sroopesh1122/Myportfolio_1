import React, { useEffect } from "react";
import heroImg from "../Images/shivu_ai_img.png";
import { titleContent } from "../Data/MenuData";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Splitting from 'splitting';
import { authorName, heroTitle_1, heroTitle_2 } from "../Data/AllData";

gsap.registerPlugin(ScrollToPlugin);

const HeroPage = () => {

  // const contextData = useContext(DataContext);


  // ScrollTrigger.create({
  //   trigger: ".hero-section",
  //   start: "top 10%",
  //   onEnter: () => {
  //     contextData.handleMenuClick(0)
  //   }
  // });
  
  // ScrollTrigger.create({
  //   trigger: ".about_page",
  //   start: "top 10%",
  //   onEnter: () => {
  //     contextData.handleMenuClick(1)
  //   }
  // });
  
  // ScrollTrigger.create({
  //   trigger: ".skills_page",
  //   start: "top 10%",
  //   onEnter: () => {
  //     contextData.handleMenuClick(2)
  //   }
  // });
  // ScrollTrigger.create({
  //   trigger: ".project_page",
  //   start: "top 10%",
  //   onEnter: () => {
  //     contextData.handleMenuClick(3)
  //   }
  // });
  // ScrollTrigger.create({
  //   trigger: ".contact_page",
  //   start: "top 10%",
  //   onEnter: () => {
  //     contextData.handleMenuClick(4)
  //   }
  // });

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
            <button className="btn download-btn">Download Resume</button>
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

// <div className="hero-section min-h-[80vh] md:min-h-[100vh] max-w-[1700px] mx-auto flex  flex-col md:flex-row  p-3 bg-yellow-400  overflow-hidden relative">
//       <div className="hero-info min-h-[80vh] md:min-h-[100vh]  md:flex-1 relative  flex  flex-col items-start justify-between pt-[9vh] bg-red-500 md:pt-0 md:justify-center">

//         <div className="relative flex flex-1 md:mt-0  flex-col items-start md:justify-center  ps-0 -mt-20 md:ps-10 w-full h-full">
//           <div className="hero-bubble" />
//           <img
//           src={heroImg}
//           alt="hero_img"
//           className="mobile-img"
//         />
//           <div className="mx-auto w-[80%] flex flex-col mt-14 flex-1">
//           <h1 className="text-[1.1rem] sm:text-[1.2rem] font-extrabold small-text-gradient hero-name z-20 md:z-[1]">
//             Hello There I'm SHIVUROOPESH
//           </h1>
//           <h1 className="hero-section-title">
//             <div className="text-overlay-left  absolute top-0 -left-[100%] w-full h-full bg-body" />
//             I'M WEB
//           </h1>
//           <h1 className="hero-section-title">
//             <div className="text-overlay-right absolute top-0 left-[100%] w-full h-full bg-body"></div>
//             DEVELOPER
//           </h1>
//           </div>

//           <div className="hero-content-wrapper mt-[150px] md:mt-0 ">
//             <div className="lines"/>
//             <div className="hero-content">
//             Crafting seamless and engaging web experiences through modern
//               technologies. Whether you need a dynamic web application, an
//               intuitive user interface, or robust back-end solutions, I’m here
//               to transform your ideas into reality. Explore my projects and see
//               how I can help bring your vision to life.
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="hero-img h-[90vh] md:flex-1  justify-center items-center relative hidden md:flex">
//         <div className="img-bubble"></div>
//         <img
//           src={heroImg}
//           alt="hero_img"
//           className="w-[300px] h-[400px] md:w-[400px] md:h-[600px] object-cover"
//         />
//       </div>
//     </div>
