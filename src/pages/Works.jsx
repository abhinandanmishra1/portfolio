import React from 'react';
import { motion } from 'framer-motion';
import { useT } from '../i18n';
import { ExternalLink, Button } from '../components/common';
import { useRouter } from 'next/navigation';
import { fadeIn } from '../variants';
import { BsArrowUpRight } from 'react-icons/bs';

export const Works = () => {
  const { t } = useT();
  const router = useRouter();
  const categories = t('works.categories', []) || [];

  return (
    <motion.div
      id="works"
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="flex flex-col gap-10 container mx-auto"
    >
      <div className="text-center lg:text-left">
        <motion.h1
          variants={fadeIn('up', 0.3)}
          className="text-[42px] lg:text-[84px] leading-none mb-6 font-primary"
        >
          <span className="text-accent">{t('works.titleLine1')}</span>
          <br />
          {t('works.titleLine2')}
        </motion.h1>
        <motion.p
          variants={fadeIn('up', 0.4)}
          className="text-lg lg:text-xl max-w-3xl mx-auto lg:mx-0 mb-8 text-white/80"
        >
          {t('works.description')}
        </motion.p>
      </div>

      <div className="flex flex-col gap-14">
        {categories.map((category, categoryIndex) => (
          <motion.section
            key={`${category.key}-${categoryIndex}`}
            variants={fadeIn('up', 0.2 + categoryIndex * 0.1)}
            className="bg-black/10 border border-white/10 rounded-2xl p-6 lg:p-8 backdrop-blur-sm"
          >
            <div className="mb-6">
              <h2 className="text-2xl lg:text-3xl font-primary text-white">
                <span className="text-accent">{category.title}</span>
              </h2>
              {category.subtitle && (
                <p className="text-white/70 mt-2">{category.subtitle}</p>
              )}
            </div>

            <div className="flex flex-col divide-y divide-white/10">
              {(category.items || []).map((item, itemIndex) => (
                <div
                  key={`${category.key}-${item.title}-${itemIndex}`}
                  className="py-6 first:pt-0 last:pb-0"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        {item.year && (
                          <span className="inline-block text-xs font-medium tracking-wide uppercase text-white/60 bg-white/5 border border-white/10 rounded-full px-3 py-1">
                            {item.year}
                          </span>
                        )}
                        {item.date && (
                          <span className="text-xs text-white/50">{item.date}</span>
                        )}
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {item.title}
                      </h3>
                      {item.excerpt && (
                        <p className="text-white/70 leading-relaxed">
                          {item.excerpt}
                        </p>
                      )}
                    </div>
                    <div className="shrink-0">
                      <ExternalLink
                        href={item.link || '#'}
                        className="inline-flex items-center gap-2 text-accent hover:text-white transition-colors"
                      >
                        Read article <BsArrowUpRight />
                      </ExternalLink>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        ))}
      </div>

      <motion.div variants={fadeIn('up', 0.8)} className="text-center pt-8 mb-16">
        <h3 className="text-2xl lg:text-3xl font-primary text-white mb-6">
          Want to connect to understand about something?
        </h3>
        <Button size="lg" onClick={() => router.push('/#contact')} className="font-medium">
          {t('banner.contactCta')}
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default Works;


