import React from "react";

import image from "../assets/avatar.svg";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Banner = () => {
	return (
		<section
			className="min-h-[85vh] lg:min-h[78vh] flex items-center"
			id="home"
		>
			<div className="container mx-auto">
				<div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
					<div className="flex-1 text-center font-secondary lg:text-left">
						<motion.h1
							variants={fadeIn("up", 0.3)}
							initial="hidden"
							whileInView={"show"}
							viewport={{
								once: false,
								amount: 0.7,
							}}
							className="text-[55px] font-bold leading-[0.8] lg:text-[110px]"
						>
							Abhinandan <span>Mishra</span>
						</motion.h1>
						<motion.div
							variants={fadeIn("up", 0.4)}
							initial="hidden"
							whileInView={"show"}
							viewport={{
								once: false,
								amount: 0.7,
							}}
							className="mb-6 text-[36px] lg:text-[55px] font-secondary font-semibold uppercase leading-[1]"
						>
							<span className="text-white mr-4">I am a</span>
							<TypeAnimation
								sequence={[
									"Developer",
									2000,
									"Technical Writer",
									2000,
									"Freelancer",
									2000,
									"Blogger",
									2000,
								]}
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
							className="mb-8 max-w-lg mx-auto lg:mx-0"
						>
							I am a Frontend Developer with great interest in JavaScript, React
							and CSS.
						</motion.p>
						<motion.div
							variants={fadeIn("up", 0.6)}
							initial="hidden"
							whileInView={"show"}
							viewport={{
								once: false,
								amount: 0.7,
							}}
							className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
						>
							<button className="btn btn-lg">Contact Me</button>
							<a href="/" className="text-gradient btn-link">
								My portfolio
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
							className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
						>
							<a
								href="https://github.com/abhinandanmishra1"
								target="_blank"
								rel="noreferrer"
							>
								<FaGithub />
							</a>
							<a
								href="https://www.linkedin.com/in/abhinandanmishra1/"
								target="_blank"
								rel="noreferrer"
							>
								<FaLinkedin />
							</a>
							<a
								href="https://abhinandanmishra1.hashnode.dev/"
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
						className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] "
					>
						<img src={image} alt="abhinandan mishra" />
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Banner;
