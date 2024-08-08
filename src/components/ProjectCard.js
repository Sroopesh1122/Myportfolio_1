import React from "react";
const ProjectCard = ({ data }) => {
  return (
    <div className="project-card">
      <div className="project-card-img">
        <img src={data.img} alt="" />
      </div>
      <div className="project-card-content">
        <h1 className="project-card-title">{data.title}</h1>
        <div className="project-desc custom-scrollbar">{data.desc}</div>
        <div className='project-technoloy'>
            <div className="project-technoloy-title"><h1>Technologies</h1></div>
           <div className="project-tech-content">
           {
            data.technology.map((tech,idx)=>{
                return <div className='tech-data' key={idx}>
                        <img src={tech.icon} alt="" />
                        <h1>{tech.name}</h1>
                       </div>
            })
           }
           </div>
         </div>
      </div>
      <div className="project-card-footer">
        {data.demo ? <a href={data.demo} target="_blank" rel="noopener noreferrer" className="project-card-btn">Demo</a> : null}
        {data.git ? <a href={data.git} target="_blank" rel="noopener noreferrer" className="project-card-btn">Code</a> : null}
      </div>
    </div>
  );
};

export default ProjectCard;
