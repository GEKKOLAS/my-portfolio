import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full" >
      <video
        autoPlay
        muted
        loop
        className="rotate-360 absolute h-full w-full z-[1] object-cover opacity-40 "
      >
        <source src="/bg5.mp4" type="video/mp4" />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;