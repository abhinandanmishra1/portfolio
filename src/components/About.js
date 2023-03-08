import React, { useState } from "react";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Slider from "./Slider";
import Contact from "./Contact";
import ResumePdf from "../assets/resume/Abhinandan_Mishra_Resume_MMMUT.pdf";
import { PdfViewer } from "../common/PdfViewer";
import { scroller } from "react-scroll";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  const [clicked, setClicked] = useState(false);

  const [contactSliderOpen, setContactSliderOpen] = useState(false);
  const [resumeSliderOpen, setResumeSliderOpen] = useState(false);

  const scrollTo = () => {
    scroller.scrollTo('contact', {
      smooth: true,
      spy: true
    });
  }

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

  return (
    <section ref={ref} className="section" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{
              once: false,
              amount: 0.3,
            }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
          ></motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{
              once: false,
              amount: 0.3,
            }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About me</h2>
            <h3 className="h3 mb-4">
              I'm a software developer proficient in React, CSS, and JavaScript.
            </h3>
            <p className="mb-6">
              Passionate about creating stunning, user-friendly web applications
              and always eager to learn and grow.
            </p>
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient">
                  {inView && (
                    <>
                      <CountUp start={0} end={2} duration={2} />+
                    </>
                  )}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br /> Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient">
                  {inView && (
                    <>
                      <CountUp start={0} end={20} duration={3} />+
                    </>
                  )}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br /> Completed
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient">
                  {inView && (
                    <>
                      <CountUp start={0} end={15} duration={3} />+
                    </>
                  )}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Satisfied <br /> Clients
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
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
            </div>
          </motion.div>
        </div>
      </div>
      {inView && clicked && (
        <>
          {contactSliderOpen && (
            <Slider
              isOpen={contactSliderOpen}
              onClose={onCloseContactSlider}
              direction="left"
            >
              <Contact showTitle={false} />
            </Slider>
          )}
          {resumeSliderOpen && (
            <Slider
              isOpen={resumeSliderOpen}
              onClose={onCloseResumeSlider}
              direction="left"
            >
              <PdfViewer pdf={ResumePdf} />
            </Slider>
          )}
        </>
      )}
    </section>
  );
};

export default About;
