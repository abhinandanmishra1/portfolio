import { FaGithub, FaLinkedin } from "react-icons/fa";
import React, { useState } from "react";

import { Contact, Slider } from ".";
import { SiHashnode } from "react-icons/si";
import { TypeAnimation } from "react-type-animation";
import { fadeIn } from "../variants";
import image from "../assets/avatar.svg";
import { motion } from "framer-motion";
import { scroller } from "react-scroll";
import { useInView } from "react-intersection-observer";
import { useT } from "../i18n";

export const Banner = () => {
  const { t } = useT();
  const [clicked, setClicked] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  const [contactSliderOpen, setContactSliderOpen] = useState(false);

  const openContactSlider = () => {
    setClicked(true);
    setContactSliderOpen(true);
  };

  const onCloseContactSlider = () => {
    setContactSliderOpen(false);
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
      <div className="mx-auto container">
        <div className="flex lg:flex-row flex-col lg:items-center gap-y-8 lg:gap-x-12">
          <div className="flex-1 font-secondary text-center lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{
                once: false,
                amount: 0.7,
              }}
              className="font-bold text-[55px] lg:text-[110px] leading-[0.8]"
            >
              {t('profile.firstName')} <span>{t('profile.lastName')}</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{
                once: false,
                amount: 0.7,
              }}
              className="mb-6 font-secondary font-semibold text-[36px] lg:text-[55px] uppercase leading-[1]"
            >
              <span className="mr-4 text-white">{t('banner.iam')}</span>
              <TypeAnimation
                sequence={t('banner.roles').flatMap((role) => [role, 2000])}
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
              className="mx-auto lg:mx-0 mb-8 max-w-lg"
            >
              {t('banner.subtitle')}
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{
                once: false,
                amount: 0.7,
              }}
              className="flex items-center gap-x-6 mx-auto lg:mx-0 mb-12 max-w-max"
            >
              <button
                className="md:block hidden btn btn-lg"
                onClick={openContactSlider}
              >
                {t('banner.contactCta')}
              </button>
              <button
                className="md:hidden btn btn-lg"
                onClick={scrollTo}
              >
                {t('banner.contactCta')}
              </button>
              <a
                href={t('links.resume')}
                target="_blank"
                rel="noreferrer"
                className="text-gradient cursor-pointer btn-link"
              >
                {t('banner.resumeText')}
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
              className="flex gap-x-6 mx-auto lg:mx-0 max-w-max text-[20px]"
            >
              <a
                href={t('links.github')}
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href={t('links.linkedin')}
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href={t('links.blog')}
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
            className="lg:flex flex-1 hidden max-w-[320px] lg:max-w-[482px]"
          >
            <img src={image} alt={t('banner.imageAlt')} />
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
        </>
      )}
    </section>
  );
};
