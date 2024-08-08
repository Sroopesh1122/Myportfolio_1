import React, { useEffect } from "react";
import { contactData, contactInfo } from "../Data/AllData";
import ContactCard from "../components/ContactCard";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Splitting from 'splitting';

gsap.registerPlugin(ScrollToPlugin);

const ContactPage = () => {


  useEffect(() => {

    Splitting({
      target:".contact-info p",
      by:"words"
    })

   
    gsap.fromTo(".contact-title h6",{
      opacity:0,
    },{
      opacity:1,
      scrollTrigger:{
        trigger:".contact-title h6",
        start:"top 60%",
        end:"top 40%",
        scrub:2,
      }
    })

    gsap.fromTo(".contact-info h1",{
      opacity:0,
    },{
      opacity:1,
      scrollTrigger:{
        trigger:".contact-title h6",
        start:"top 40%",
        end:"top 35%",
        scrub:2,
      }
    })

    gsap.fromTo(".contact-info p .word",{
      opacity:0,
    },{
      opacity:1,
      stagger:0.1,
      scrollTrigger:{
        trigger:".contact-title h6",
        start:"top 40%",
        end:"top 35%",
        scrub:2,
      }
    })

    gsap.fromTo(".contact-card",{
      opacity:0,
      y:100
    },{
      opacity:1,
      y:0,
      stagger:0.1,
      scrollTrigger:{
        trigger:".contact-details",
        start:"top 60%",
        end:"top 35%",
        scrub:2,
      }
    })


  }, []);

  return (
    <section className="contact_page" id="contact">
      <div className="contact-title">
        <h6>GET IN TOUCH</h6>
      </div>
      <div className="contact-content">
        <div className="contact-info">
          <h1>CONTACT ME</h1>
          <p>{contactInfo}</p>
        </div>
        <div className="contact-details">
             {
                contactData.map((data,idx)=><ContactCard data={data} key={idx}/>)
             }
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
