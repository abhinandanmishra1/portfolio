import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { useT } from "../i18n";
import { Button, ExternalLink, Section } from "./common";
import { useRouter } from 'next/navigation';

export const Work = ({ projects: dbProjects }) => {
  const { t } = useT();
  const router = useRouter();
  const projects = dbProjects?.length ? dbProjects.map(p => ({
    title: p.title,
    subtitle: p.description,
    link: p.link,
    image: p.image
  })) : (t('work.projects', []) || []);

  console.log(projects)
  const firstProject = projects[0];
  const restProjects = projects.slice(1, 3); // Showing limited projects in featured section

  return (
    <Section id="work">
      <div className="flex flex-col lg:flex-row gap-x-10 ">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0 gap-10"
        >
          <div>
            <h2 className="h2 leading-tight text-accent">
              {t('work.titleLine1')} <br /> {t('work.titleLine2')}
            </h2>
            <p className="max-w-sm mb-16 ">{t('work.intro')}</p>
            <Button size="sm" onClick={() => router.push('/projects')}>{t('work.cta')}</Button>
          </div>

          {firstProject && (
            <ExternalLink href={firstProject.link || '#'} className="group relative overflow-hidden border-2 border-white/50 rounded-xl cursor-pointer">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500 w-[1440px]"
                src={firstProject.image}
                alt={firstProject.title}
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">{firstProject.title}</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-white text-2xl">{firstProject.subtitle}</span>
              </div>
            </ExternalLink>
          )}
        </motion.div>

        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1 flex flex-col gap-y-10"
        >
          {restProjects.map((project, index) => {
            return (
              <ExternalLink
                key={`${project.title}-${index}`}
                href={typeof project.link === 'string' ? project.link : '#'}
                className="group relative overflow-hidden border-2 border-white/50 rounded-xl cursor-pointer"
              >
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                <img
                  className="group-hover:scale-125 transition-all duration-500 w-[1440px]"
                  src={project.image}
                  alt={project.title}
                />
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-gradient">{project.title}</span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-white text-2xl">{project.subtitle}</span>
                </div>
              </ExternalLink>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
};
