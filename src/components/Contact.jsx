import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

import contact from "../assets/contact.png";
import { email, githubLogo, linkedin, mobileLogo, twitter } from "../assets";

const Contact = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);


  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <div className="contactDetails">
          <img className="contactDetails__img" width="50" height="50" src={email} alt="" srcset="" />
          <p className="contactDetails__img">sujaywebdev@gmail.com</p>
        </div>
        <div className="contactDetails">
          <img className="contactDetails__img" width="50" height="50" src={mobileLogo} alt="" srcset="" />
          <p className="contactDetails__img">+91 9035 925-456</p>
        </div>

        <div className="contactSocial">
          <a href="https://www.linkedin.com/in/sujaywebdev/" target="_blank"><img width="50" height="50" src={linkedin} alt="" srcset="" /></a>
          <a href="https://twitter.com/sujayvadavadagi" target="_blank"><img width="50" height="50" src={twitter} alt="" srcset="" /></a>
          <a href="https://github.com/sujay-web-dev" target="_blank"><img width="50" height="50" src={githubLogo} alt="" srcset="" /></a>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className={`xl:flex-1 xl:h-auto md:h-[200px] h-[${isMobile ? "180px" : "250px "
          }]`}
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
