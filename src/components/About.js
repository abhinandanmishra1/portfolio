import React from "react";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
	const [ref, inView] = useInView({
		threshold: 0.5,
	});

	return (
		<section ref={ref} className="section" id="about">
			<div className="container mx-auto">
				<div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
					<motion.div 
          variants={fadeIn('right', 0.3)}
          initial="hidden"
          whileInView={'show'}
          viewport={{
            once: false,
            amount: 0.3
          }}
          className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top">
					</motion.div>
					<motion.div 
                     variants={fadeIn('left', 0.5)}
                     initial="hidden"
                     whileInView={'show'}
                     viewport={{
                       once: false,
                       amount: 0.3
                     }}
           className="flex-1">
						<h2 className="h2 text-accent">About me</h2>
						<h3 className="h3 mb-4">
							I'm a freelance frontend developer with over 2+ years of project
							experience and 1 year of working experience
						</h3>
						<p className="mb-6">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
							dolor earum exercitationem nemo quisquam. Rerum consequuntur illum
							est eveniet asperiores natus
						</p>
						<div className="flex gap-x-6 lg:gap-x-10 mb-12">
							<div>
								<div className="text-[40px] font-tertiary text-gradient">
									{inView && <><CountUp start={0} end={2} duration={2} />+</>}
								</div>
								<div className="font-primary text-sm tracking-[2px]">
									Years of <br /> Experience
								</div>
							</div>
							<div>
								<div className="text-[40px] font-tertiary text-gradient">
									{inView && <><CountUp start={0} end={20} duration={3} />+</>}
								</div>
								<div className="font-primary text-sm tracking-[2px]">
									Projects <br /> Completed
								</div>
							</div>
							<div>
								<div className="text-[40px] font-tertiary text-gradient">
									{inView && <><CountUp start={0} end={15} duration={3} />+</>}
								</div>
								<div className="font-primary text-sm tracking-[2px]">
									Satisfied <br /> Clients
								</div>
							</div>
						</div>
            <div className="flex gap-x-8 items-center">
              <button class="btn btn-lg">
                Contact Me
              </button>
              <a href="http://wdsdh" className="text-gradient btn-link">
                My portfolio
              </a>
            </div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default About;
