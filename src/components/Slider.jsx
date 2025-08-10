import classNames from "classnames";

import { motion } from "framer-motion";
import { fadeIn, fadeOut } from "../variants";

export const Slider = ({ isOpen = false, onClose, children, direction = "left"}) => {
    const oppositeDirection = direction === "left" ? "right" : "left";
    const sliderClasses = classNames(
        "fixed inset-y-0 z-50 overflow-auto shadow-lg md:w-full lg:w-[750px] slider",
        {
            [`${direction}-0`]: direction,
        }
    );

    const overlayClasses = classNames("fixed inset-0 z-40 bg-black opacity-50", {
        hidden: !isOpen,
    });

    const variants = isOpen ? fadeIn(oppositeDirection, 0.4) : fadeOut(direction, 0.2);

    return (
        <>
            <motion.div variants={variants}
            whileInView={'show'}
            initial="hidden"
            viewport={{
                once: false,
                amount: 0.3
            }} className={sliderClasses}>
                <div className="px-4 h-full flex justify-center">{children}</div>
                <button
                    className={`absolute top-0 m-6 text-gray-600 hover:text-gray-800 right-0`}
                    onClick={onClose}
                >
                    <svg
                        className="h-6 w-6 fill-current"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>Close</title>
                        <path
                            fillRule="evenodd"
                            d="M14.348 4.242a1 1 0 0 1 1.414 1.414L6.414 14.364a1 1 0 1 1-1.414-1.414l8.348-8.348z"
                            clipRule="evenodd"
                        />
                        <path
                            fillRule="evenodd"
                            d="M15.762 14.364a1 1 0 0 1-1.414 1.414L4.636 6.656a1 1 0 1 1 1.414-1.414l9.712 9.712z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </motion.div>
            <div className={overlayClasses} onClick={onClose}></div>
        </>
    );
};
