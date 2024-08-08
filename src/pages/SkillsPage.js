import React, { useEffect } from "react";
import { skillsContent } from "../Data/AllData";
import SkillCard from "../components/SkillCard";
import Splitting from "splitting";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const SkillsPage = () => {

  useEffect(() => {
    Splitting({
      target: ".skill-title h1",
      by: "words",
    });


    gsap.fromTo(".skill-title h1 .word",{
      opacity:0,
    },{
      opacity:1,
      stagger:0.2,
      scrollTrigger:{
        trigger:".skill-title h1",
        start:"top center",
        end:"top 30%",
        scrub:2,
      }
    })

    gsap.fromTo(".skill-title h6",{
      opacity:0,
    },{
      opacity:1,
      stagger:0.2,
      scrollTrigger:{
        trigger:".skill-title h6",
        start:"top center",
        end:"top 30%",
        scrub:2,
      }
    })

  }, []);
  

  return (
    <section className="skills_page" id="skills">
      <div className="skill-title">
        <h6>EXPLORE MY</h6>
        <h1>EXPERIENCE / SKILLS</h1>
      </div>
      <div className="skills-content">
        {skillsContent.map((data, idx) => (
          <SkillCard key={idx} data={data} />
        ))}
      </div>
    </section>
  );
};

export default SkillsPage;
