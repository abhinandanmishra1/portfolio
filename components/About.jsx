import React from "react";

import CountUp from "react-countup";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";
import { scroller } from "react-scroll";
import { useInView } from "react-intersection-observer";
import { useT } from "../i18n";
import { Section } from "./common";

export const About = ({ profile }) => {
  const { t } = useT();
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  const scrollTo = () => {
    scroller.scrollTo("contact", {
      smooth: true,
      spy: true,
    });
  };

  const bio = profile?.bio || t('about.description');
  const headline = profile?.headline || t('about.subtitle');

  return (
    <Section ref={ref} id="about">
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
          <h2 className="text-accent h2">{t('about.title')}</h2>
          <h3 className="mb-4 h3">{headline}</h3>
          <p className="mb-6">{bio}</p>
          <div className="flex gap-x-6 lg:gap-x-10 mb-12">
            {t('about.counters', []).map((counter, idx) => (
              <div key={idx}>
                <div className="font-tertiary text-[40px] text-gradient">
                  {inView && (
                    <>
                      <CountUp start={0} end={counter.count} duration={3} />{counter.suffix}
                    </>
                  )}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  {counter.labelLine1} <br /> {counter.labelLine2}
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-x-8">
            <button className="btn btn-lg" onClick={scrollTo}>
              {t('about.contactCta')}
            </button>
            <a
              href={profile?.resume || t('links.resume')}
              target="_blank"
              rel="noreferrer"
              className="text-gradient cursor-pointer btn-link"
            >
              {t('about.resumeText')}
            </a>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
