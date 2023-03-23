import React, { useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import { award, closeLogo, Hackathon, view } from "../assets";


const Feedbacks = () => {

  const [showPopup, setShowPopup] = useState(false);
  const [imgPath, setImgPath] = useState(null);
  const body = document.querySelector("body");

  const handlePopup = (img) => {
    setShowPopup(true);
    setImgPath(img);
  }

  const closeModal = function (e) {
    setShowPopup(false)
  };

  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('Sujay_UI_Resume.pdf').then(response => {
      response.blob().then(blob => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'Sujay_UI_Resume.pdf';
        alink.click();
      })
    })
  }

  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >

        {showPopup && (
          <div className="popupOverlay relative z-0">
            <div className="popupOverlay__card">
              <img src={closeLogo} onClick={() => closeModal()} className="popupOverlay__close" alt="" srcset="" />
              <img src={imgPath} alt="" srcset="" className="popupOverlay__img" />
            </div>
          </div>
        )}

        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Recognitions</p>
          <h2 className={styles.sectionHeadText}>&nbsp;Hackathon & Award</h2>
          <div className="awards">
            <div className="Hackathon">
              <img src={Hackathon} className="awards__img" alt="" />
              <div>
                <img src={view} className="view" alt="" srcset="" onClick={() => handlePopup(Hackathon)} />
                <h2 className="text-white font-bold text-[18px] m-2 mt-6">Hackathon</h2>
                <p className="desc text-secondary text-[16px] p-2">I successfully developed a MERN Full Stack Application, in response to a challenge presented during a Hackathon event.</p>
              </div>
            </div>
            <div className="awards_Legato">
              <img src={award} className="awards__img" alt="" />
              <div>
                <img src={view} className="view" alt="" srcset="" onClick={() => handlePopup(award)} />
                <h2 className="text-white font-bold text-[18px] m-2 mt-6">Go Above Award</h2>
                <p className="desc text-secondary text-[16px] p-2">Awarded for exceptional execution of wireframe conversion into functional components, resulting in significant improvement of user experience.</p>
              </div>
            </div>
          </div>
          <div className="resume">
          <button className='app__resume-download-btn' onClick={onButtonClick}>Resume.pdf</button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
