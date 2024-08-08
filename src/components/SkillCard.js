import React, { useEffect } from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const SkillCard = ({ data }) => {

  useEffect(()=>{


    const timeline = gsap.timeline()

    timeline.fromTo(".skill-card",{
      opacity:0,
      y:50
    },{
      opacity:1,
      y:0,
      stagger:0.2,
      scrollTrigger:{
        trigger:".skill-card",
        start:"top 60%",
        end:"top 45%",
        scrub:2,
      }
    }).fromTo(".skill-data",{
      opacity:0,
    },{
      opacity:1,
      stagger:0.3,
      scrollTrigger:{
        trigger:".skill-card",
        start:"top 60%",
        end:"top 50%",
        scrub:2,
      }
    },0)

  },[])

  return (
    <div className="skill-card">
      <div className="skill-card-title">
        <h1>{data.title}</h1>
      </div>
      <div className="skill-card-content">
        {data.skills.map((content, idx) => {
          return (
            <div key={idx} className="skill-data">
              <BsFillPatchCheckFill  className="skill-badge"/>
              <div>
                <h1>{content.title}</h1>
                <h6 className="skill-status">{content.status}</h6>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillCard;
