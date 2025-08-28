import React from "react";
import Link from "next/link";
import { Spotlight } from "./ui/spotlight-new";
import { Button } from "./ui/moving-border";

const HeroSection = () => {
  return (
    <div className="  ">
      <div className="mt-20">
         <Spotlight/>
        <h1 className="md:mt-0 text-center text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Master the art of music
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Dive into our comprehensive music courses and transform your musical
          journey today. Whether you are a beginner or looking to refine your
          skills, join us to unlock your true potential.
        </p>
        <div className="text-white text-center   mt-5 ">
           <Link href={"/courses"} />
           <Button  className="bg-black " >
            Explore Courses
           </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
