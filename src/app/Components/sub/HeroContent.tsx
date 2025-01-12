"use client";
import { FaLocationArrow } from "react-icons/fa6";
import { ReactTyped } from 'react-typed';

import MagicButton from "../MagicButton";
import { Spotlight } from "../ui/Spotlight";


import React from "react";
import { motion } from "framer-motion";
import {
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop,
} from "../../utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
    return (
        
        <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
        >
            <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
                >
                    🎊 🫡 🎊
                    <span className="md:text-6xl sm:text-4xl text-5xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-rose-500">
                        Hi there!{" "} I&apos;m Nicolas a
                        <span>
                            <ReactTyped
                                className='md:text-6xl sm:text-4xl text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-bold md:pl-4 pl-2 '
                                strings={['Full Stack Software Developer.', '.NET Developer.', 'Business Analyst.', 'Gamer Enthusiast.']}
                                typeSpeed={100}
                                backSpeed={50}
                                loop
                            />
                        </span>

                    </span>
                </motion.div>

                <motion.p
                    variants={slideInFromLeft(0.8)}
                    className="text-lg text-gray-200 my-5 max-w-[600px]"
                >
                    With experience in Digital Marketing, Data Analysis, Web Development,
                    Mobile and Desktop Applications. Check out some of my projects and skills. 👀
                </motion.p>
                <motion.a
                    variants={slideInFromLeft(1)}
                    className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
                >
                    <span>
                        <MagicButton
                            title="Let's Connect 🤗"
                            icon={<FaLocationArrow />}
                            position="right"
                        />
                    </span>

                </motion.a>
            </div>

            <motion.div
                variants={slideInFromRight(0.8)}
                className="w-full h-full flex justify-center items-center"
            >
                <Image
                    src="/niko.png"
                    alt="profile picture"
                    height={200}
                    width={200}
                    className="rounded-lg shadow-lg border-4  border-black hover:border-rose-500"
                />
            </motion.div>
        </motion.div>
    );
};

export default HeroContent;


