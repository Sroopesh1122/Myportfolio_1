import React, { useEffect } from 'react'
import { projectData } from '../Data/AllData'
import ProjectCard from '../components/ProjectCard'
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const ProjectPage = () => {

  useEffect(() => {


   
    gsap.fromTo(".project-title h6",{
      opacity:0,
    },{
      opacity:1,
      scrollTrigger:{
        trigger:".project_page",
        start:"top 60%",
        end:"top 40%",
        scrub:2,
        
      }
    })

    gsap.fromTo(".project-title h1",{
      opacity:0,
    },{
      opacity:1,
      scrollTrigger:{
        trigger:".project_page h6",
        start:"top 60%",
        end:"top 40%",
        scrub:2,
       
      }
    })

      gsap.fromTo(".project-card",{
        opacity:0,
      },{
        opacity:1,
        stagger:0.2,
        scrollTrigger:{
          trigger:".project-card",
          start:"top 60%",
          end:"top 30%",
          scrub:2,
        }
      })
  }, []);

  return (
    <section className="project_page" id="projects">
    <div className="project-title">
      <h6>EXPLORE MY</h6>
      <h1>PROJECTS</h1>
    </div>
    <div className='project-content'>
        {
            projectData.map((data,idx)=>{
              return <ProjectCard key={idx} data={data}/>
            })
        }
    </div>
  </section>
  )
}

export default ProjectPage
