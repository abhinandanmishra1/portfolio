import React from "react";

import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const services = [
	{
		name: "Frontend Developmemnt",
		description:
			`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Error doloribus aliquid harum iste ea debitis ducimus, labore maxime! Asperiores,
       `,
    link: 'Learn more',
	},
	{
		name: "Backend Developmemnt",
		description:
			`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Error doloribus aliquid harum iste ea debitis ducimus, labore maxime! Asperiores,
       `,
    link: 'Learn more',
	},
	{
		name: "Technical Writing",
		description:
			`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Error doloribus aliquid harum iste ea debitis ducimus, labore maxime! Asperiores,
       `,
    link: 'Learn more',
	},
];

const Services = () => {
	return (
		<section className="section" id="services">
			<div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
          							variants={fadeIn("right", 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{
                          once: false,
                          amount: 0.7,
                        }} 
          className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0">
            <h2 className="h2 text-accent"> What I do?</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I'm a frontend developer wuth a good working experience in software industry along with some personal project experiences
            </h3>
            <button className="btn btn-sm"> Look at my work</button>
          </motion.div>
          <motion.div 
                    							variants={fadeIn("left", 0.3)}
                                  initial="hidden"
                                  whileInView={"show"}
                                  viewport={{
                                    once: false,
                                    amount: 0.7,
                                  }} 
          className="flex-1">
            <div>
            {
              services.map((service, index) => {
                return (
                  <div className="border-b border-white/20 h-[146px] mb-[38px] flex">
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">{service.name}</h4>
                      <p className="font-secondary leading-tight">{service.description}</p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a href="/" className="btn w-9 h-9 mb-[42px] flex justify-center items-center">
                        <BsArrowUpRight />
                      </a>
                      <a href="/" className="text-gradient text-sm">
                        {service.link}
                      </a>
                    </div>
                  </div>
                )
              })
            }
            </div>
          </motion.div>
        </div>
      </div>
		</section>
	);
};

export default Services;
