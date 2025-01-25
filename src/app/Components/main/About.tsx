import React from 'react'
import Image from 'next/image'
import { BackgroundBeams } from '../ui/background-beams'

export const About = () => {
    return (
        <div className="h-full w-full rounded-md align-middle text-pretty bg-neutral-950 relative flex flex-row items-center justify-center antialiased">
            <Image
                src="/mainIconsdark.svg"
                alt="work icons"
                height={850}
                width={850}
            />
            <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
                <div className="max-w-2xl mx-auto">
                    <h1 className="relative z-5 text-lg md:text-7xl sm:text-4xl bg-clip-text text-transparent bg-gradient-to-b from-cyan-400 to-purple-600  text-center font-sans font-bold">
                        About Me
                    </h1>
                    <p></p>
                    <p className="text-white max-w-lg mx-auto my-2 text-lg text-center  justify-normal relative z-10">

                        I&apos;m an Administrative professional and a passionate software developer with a strong foundation in .NET, React, and Next.js. With several years of experience in building dynamic and responsive web applications,
                        I have honed my skills in creating seamless user experiences and optimizing performance.
                        My expertise lies in leveraging the power of .NET for backend development, while utilizing React and Next.js to craft modern, fast-loading front-end interfaces.
                        I thrive in collaborative environments and am always eager to learn and implement new technologies to solve complex problems.
                        Let's create something amazing together!
                    </p>
                </div>
            </div>
            <BackgroundBeams />
        </div>
    )
}

export default About;