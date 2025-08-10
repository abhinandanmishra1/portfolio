import React from "react";

import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { useT } from "../i18n";
import { Button, ExternalLink, Section } from "./common";

export const Services = () => {
    const { t } = useT();
    return (
        <Section id="services">
				<div className="flex flex-col lg:flex-row">
					<motion.div
						variants={fadeIn("right", 0.3)}
						initial="hidden"
						whileInView={"show"}
						viewport={{
							once: false,
							amount: 0.7,
						}}
						className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
					>
                        <h2 className="h2 text-accent"> {t('services.title')}</h2>
                        <h3 className="h3 max-w-[455px] mb-16">
                            {t('services.intro')}
                        </h3>
                        <Button size="sm"> {t('services.cta')}</Button>
					</motion.div>
					<motion.div
						variants={fadeIn("left", 0.3)}
						initial="hidden"
						whileInView={"show"}
						viewport={{
							once: false,
							amount: 0.7,
						}}
						className="flex-1"
					>
						<div>
                            {(t('services.items') || []).map((service, index) => {
								return (
									<div className="border-b border-white/20 h-[146px] mb-[38px] flex" key={index}>
										<div className="max-w-[476px]">
											<h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
												{service.name}
											</h4>
											<p className="font-secondary leading-tight">
												{service.description}
											</p>
										</div>
										<div className="flex flex-col flex-1 items-end">
                                            <ExternalLink
                                                href={service.link}
                                                className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                                            >
												<BsArrowUpRight />
                                            </ExternalLink>
                                            <ExternalLink
                                                href={service.link}
                                                className="text-gradient text-sm"
                                            >
                                                {t('services.seeMore')}
                                            </ExternalLink>
										</div>
									</div>
								);
							})}
						</div>
					</motion.div>
				</div>
        </Section>
	);
};
