import React, { useEffect, useState } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github, view} from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  web_link
}) => {
  return (
      <div className="bg-tertiary p-5 rounded-2xl sm:w-[260px] w-full" >
        <div className="relative w-full h-[130px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-between m-3 card-img_hover">
            
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-9 h-9 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
            <div
              onClick={() => window.open(web_link, "_blank")}
              className="black-gradient w-9 h-9 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={view}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-3">
          <h3 className="text-white font-bold text-[20px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
  );
};

const Works = () => {

  const [domains, setDomains] = useState(["React JS","MERN Stack","Dapps","Smart Contract","All"]);
  const [filteredProj, setFilteredProj] = useState(projects)

  const filterDomains = (domain) => {
    let filteredProjects;
    if(domain != "All"){
      filteredProjects = projects.filter(e=>e.domain == domain)
    }else {
      filteredProjects=projects;
    }
    setFilteredProj(filteredProjects);
  }

  return (
    <>
      <motion.div className="about_header_details">
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex about_header_details">
        <motion.p
          // variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="domains">
        {domains?.map((e)=>(
          <button key={e} onClick={() => filterDomains(e)} className="domains__each">
            <h2>{e}</h2>
          </button>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-7 about_header_details">
        {filteredProj?.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
