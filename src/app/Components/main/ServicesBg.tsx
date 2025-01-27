import React from 'react'
import Skills from '../sub/SkillsContent'
import Services from './Services'

const SkillsBg = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="about-me">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute h-full w-full left-0 z-[1] object-cover opacity-80"
      >
        <source src="/bg6.mp4" type="video/webm" />
      </video>
      <Services />
    </div>
  )
}

export default SkillsBg
