import { FaGithub, FaLinkedin } from "react-icons/fa";
import React from "react";

import { SiHashnode } from "react-icons/si";
import { TypeAnimation } from "react-type-animation";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";
import { scroller } from "react-scroll";
import { useInView } from "react-intersection-observer";
import { useT } from "../i18n";
import { Button, ExternalLink, IconLink, Section } from "./common";

export const Banner = () => {
  const { t } = useT();
  const [ref] = useInView({
    threshold: 0.5,
  });

  const scrollTo = () => {
    scroller.scrollTo('contact', {
      smooth: true,
      spy: true
    });
  }

  return (
    <Section id="home" className="min-h-[85vh] lg:min-h[78vh] flex items-center" ref={ref} useBase={false}>
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
                sequence={(t('banner.roles', []) || []).reduce((acc, role) => acc.concat([role, 2000]), [])}
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
              <Button size="lg" onClick={scrollTo}>
                {t('banner.contactCta')}
              </Button>
              <ExternalLink href={t('links.resume')} className="text-gradient cursor-pointer btn-link">
                {t('banner.resumeText')}
              </ExternalLink>
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
              <IconLink href={t('links.github')}>
                <FaGithub />
              </IconLink>
              <IconLink href={t('links.linkedin')}>
                <FaLinkedin />
              </IconLink>
              <IconLink href={t('links.blog')}>
                <SiHashnode />
              </IconLink>
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
            <img src={t('banner.image')} alt={t('banner.imageAlt')} />
          </motion.div>
        </div>
    </Section>
  );
};
