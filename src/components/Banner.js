import React, { useState } from "react";

import image from "../assets/avatar.svg";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Slider from "./Slider";
import Contact from "./Contact";
import ResumePdf from "../assets/resume/Abhinandan_Mishra_Resume.pdf";
import { PdfViewer } from "../common/PdfViewer";
import { useInView } from "react-intersection-observer";
import { scroller } from "react-scroll";

const Banner = () => {
  const [clicked, setClicked] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  const [contactSliderOpen, setContactSliderOpen] = useState(false);
  const [resumeSliderOpen, setResumeSliderOpen] = useState(false);

  const openContactSlider = () => {
    setClicked(true);
    setResumeSliderOpen(false);
    setContactSliderOpen(true);
  };

  const openResumeSlider = () => {
    setClicked(true);
    setContactSliderOpen(false);
    setResumeSliderOpen(true);
  };

  const onCloseContactSlider = () => {
    setContactSliderOpen(false);
  };

  const onCloseResumeSlider = () => {
    setResumeSliderOpen(false);
  };

  const scrollTo = () => {
    scroller.scrollTo('contact', {
      smooth: true,
      spy: true
    });
  }

  return (
    <section
      className="min-h-[85vh] lg:min-h[78vh] flex items-center"
      id="home"
      ref={ref}
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{
                once: false,
                amount: 0.7,
              }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px]"
            >
              Abhinandan <span>Mishra</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{
                once: false,
                amount: 0.7,
              }}
              className="mb-6 text-[36px] lg:text-[55px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-4">I am a</span>
              <TypeAnimation
                sequence={[
                  "Developer",
                  2000,
                  "Technical Writer",
                  2000,
                  "Freelancer",
                  2000,
                  "Blogger",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{
                once: false,
                amount: 0.7,
              }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              I am a Frontend Developer with great interest in JavaScript, React
              and CSS.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{
                once: false,
                amount: 0.7,
              }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <button
                className="btn btn-lg hidden md:block"
                onClick={openContactSlider}
              >
                Contact Me
              </button>
              <button
                className="btn btn-lg md:hidden"
                onClick={scrollTo}
              >
                Contact Me
              </button>
              <p
                className="text-gradient btn-link cursor-pointer hidden md:block"
                onClick={openResumeSlider}
              >
                My Resume
              </p>
              <a
                href="https://drive.google.com/u/0/uc?id=1KY2r4ij1kZl61QXyY6Q2wwKP2xQ3pjD7&export=download"
                className="text-gradient btn-link cursor-pointer md:hidden"
              >
                My Resume
              </a>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{
                once: false,
                amount: 0.3,
              }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a
                href="https://github.com/abhinandanmishra1"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/abhinandanmishra1/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://abhinandanmishra1.hashnode.dev/"
                target="_blank"
                rel="noreferrer"
              >
                <SiHashnode />
              </a>
            </motion.div>
          </div>

          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{
              once: false,
              amount: 0.7,
            }}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] "
          >
            <img src={image} alt="abhinandan mishra" />
          </motion.div>
        </div>
      </div>
      {inView && clicked && (
        <>
          {contactSliderOpen && (
            <Slider
              isOpen={contactSliderOpen}
              onClose={onCloseContactSlider}
              direction="right"
            >
              <Contact showTitle={false} />
            </Slider>
          )}
          {resumeSliderOpen && (
            <Slider
              isOpen={resumeSliderOpen}
              onClose={onCloseResumeSlider}
              direction="right"
            >
              <PdfViewer pdf={ResumePdf} />
            </Slider>
          )}
        </>
      )}
    </section>
  );
};

export default Banner;
