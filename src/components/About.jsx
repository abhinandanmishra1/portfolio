import React, { useState } from "react";

import { Contact, Slider} from ".";
import CountUp from "react-countup";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";
import { scroller } from "react-scroll";
import { useInView } from "react-intersection-observer";

export const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  const [clicked, setClicked] = useState(false);

  const [contactSliderOpen, setContactSliderOpen] = useState(false);

  const scrollTo = () => {
    scroller.scrollTo("contact", {
      smooth: true,
      spy: true,
    });
  };

  const openContactSlider = () => {
    setClicked(true);
    setContactSliderOpen(true);
  };

  const onCloseContactSlider = () => {
    setContactSliderOpen(false);
  };

  return (
    <section ref={ref} className="section" id="about">
      <div className="mx-auto container">
        <div className="flex lg:flex-row flex-col lg:items-center gap-y-10 lg:gap-x-20 lg:gap-y-0 h-screen">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{
              once: false,
              amount: 0.3,
            }}
            className="flex-1 bg-about bg-contain bg-no-repeat bg-top h-[640px] mix-blend-lighten"
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
            <h2 className="text-accent h2">About me</h2>
            <h3 className="mb-4 h3">
              I'm a software developer proficient in React, CSS, and JavaScript.
            </h3>
            <p className="mb-6">
              Passionate about creating stunning, user-friendly web applications
              and always eager to learn and grow.
            </p>
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="font-tertiary text-[40px] text-gradient">
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
                <div className="font-tertiary text-[40px] text-gradient">
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
                <div className="font-tertiary text-[40px] text-gradient">
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
            <div className="flex items-center gap-x-8">
              <button
                className="md:block hidden btn btn-lg"
                onClick={openContactSlider}
              >
                Contact Me
              </button>
              <button className="md:hidden btn btn-lg" onClick={scrollTo}>
                Contact Me
              </button>
              <a
                href="https://drive.google.com/file/d/1Gsj-Ww_6gSDKAXeiWW3r6K09JVdwHxnu/view"
                target="_blank"
                rel="noreferrer"
                className="text-gradient cursor-pointer btn-link"
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
        </>
      )}
    </section>
  );
};
