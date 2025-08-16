import React from 'react';
import { motion } from 'framer-motion';
import { useT } from '../i18n';
import { ExternalLink, Button, IconLink } from '../components/common';
import { useRouter } from 'next/navigation';
import { fadeIn } from '../variants';
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
 

export const Projects = () => {
  const { t } = useT();
  const router = useRouter();
  const projects_original = t('work.projects', []) || [];

  const projects = [...projects_original, ...projects_original];

  return (
      <motion.div
        id="projects"
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col gap-8 container mx-auto"
      >
        <div className="text-center lg:text-left">
          <motion.h1
            variants={fadeIn('up', 0.4)}
            className="text-[45px] lg:text-[90px] leading-none mb-8 font-primary"
          >
            <span className="text-accent">{t('work.titleLine2')}</span>
            <br />
          </motion.h1>
          
          <motion.p
            variants={fadeIn('up', 0.5)}
            className="text-lg lg:text-xl max-w-3xl mx-auto lg:mx-0 mb-12 text-white/80"
          >
            {t('work.description')}
          </motion.p>
        </div>

        <motion.div
          variants={fadeIn('up', 0.6)}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={`${project.title}-${index}`}
              variants={fadeIn('up', 0.1 * index)}
              className="group relative overflow-hidden border-2 border-white/20 rounded-2xl bg-black/10 backdrop-blur-sm hover:border-accent/50 transition-all duration-500"
            >
              <div className="relative overflow-hidden">
                <img
                  className="w-full h-[240px] object-cover group-hover:scale-110 transition-all duration-700"
                  src={project.image}
                  alt={project.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-primary font-semibold text-white mb-3 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  {project.subtitle}
                </p>

                <div className="flex items-center justify-between">
                  <ExternalLink
                    href={project.link || '#'}
                    className="inline-flex items-center gap-2 text-accent hover:text-white text-sm font-medium transition-colors duration-300"
                  >
                    View Project <BsArrowUpRight />
                  </ExternalLink>
                  
                  {project.github && (
                    <IconLink
                      href={project.github}
                      className="text-white/60 hover:text-accent text-lg transition-colors duration-300"
                    >
                      <BsGithub />
                    </IconLink>
                  )}
                </div>
              </div>

              <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/20 rounded-2xl transition-all duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeIn('up', 0.8)}
          className="text-center pt-16 mb-16"
        >
          <h3 className="text-2xl lg:text-3xl font-primary text-white mb-6">
            Have a project in mind?
          </h3>
          <Button 
            size="lg" 
            onClick={() => router.push('/#contact')}
            className="font-medium"
          >
            {t('banner.contactCta')}
          </Button>
        </motion.div>
      </motion.div>
  );
};

export default Projects;


