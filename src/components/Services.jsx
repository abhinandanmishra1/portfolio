import React from "react";

import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const services = [
	{
		name: "Frontend Developmemnt",
		description:
			"Skilled in React, CSS, SCSS, and JavaScript to create visually appealing and interactive user interfaces.",
		link: "https://github.com/abhinandanmishra1",
	},
	{
		name: "Fullstack Developmemnt",
		description:
			"Experienced in MongoDB, Node.js, Express.js, MySQL, Ruby on Rails to develop full-stack web applications.",
		link: "https://github.com/abhinandanmishra1",
	},
	{
		name: "Technical Writing",
		description:
			"Proficient in React and JavaScript, producing clear and concise technical documentation, and writing blog posts and tutorials.",
		link: "https://abhinandanmishra1.hashnode.dev/",
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
						className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
					>
						<h2 className="h2 text-accent"> What I do?</h2>
						<h3 className="h3 max-w-[455px] mb-16">
							I'm a skilled full-stack developer with a passion for frontend
							development and technical writing, available for freelance
							projects.
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
						className="flex-1"
					>
						<div>
							{services.map((service, index) => {
								return (
									<div className="border-b border-white/20 h-[146px] mb-[38px] flex">
										<div className="max-w-[476px]">
											<h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
												{service.name}
											</h4>
											<p className="font-secondary leading-tight">
												{service.description}
											</p>
										</div>
										<div className="flex flex-col flex-1 items-end">
											<a
												href={service.link}
												target="_blank"
												rel="noreferrer"
												className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
											>
												<BsArrowUpRight />
											</a>
											<a
												href={service.link}
												target="_blank"
												rel="noreferrer"
												className="text-gradient text-sm"
											>
												See More
											</a>
										</div>
									</div>
								);
							})}
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Services;
