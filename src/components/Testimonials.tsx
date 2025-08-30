"use client";
import { cn } from "@/lib/utils/util";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const Testimonials = () => {
  const musicSchoolTestimonials = [
    {
      quote:
        "Joining the music school transformed my understanding of music and helped me to truly discover my own sound. The instructors are world-class!",
      name: "Alex Johnson",
      title: "Guitar Student",
    },
    {
      quote:
        "The community and support at this school are unmatched. I've grown not just as a pianist, but also as a performer, thanks to their comprehensive approach.",
      name: "Samantha Lee",
      title: "Piano Student",
    },
    {
      quote:
        "This school offered me the tools and confidence to take my singing to the next level. I'm endlessly grateful for the personalized coaching.",
      name: "Michael Chen",
      title: "Vocal Student",
    },
    {
      quote:
        "As a violinist, finding the right mentor can be challenging, but this school matched me with a teacher who truly understands my goals and challenges.",
      name: "Emily Taylor",
      title: "Violin Student",
    },
    {
      quote:
        "The production courses here opened my eyes to the intricacies of music production. Highly recommend for any aspiring producers!",
      name: "Chris Morales",
      title: "Music Production Student",
    },
  ];

 return ( 
  <div className="relative h-[50rem] w-full bg-white dark:bg-black flex flex-col items-center justify-center"> 
    <div className={cn( 
        "absolute inset-0", 
        "[background-size:40px_40px]", 
        "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]", 
        "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]", 
      )}> 
    </div>
   
<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 z-20 relative group whitespace-nowrap">
  <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
    Hear Our Harmony : Voices of Success
  </span>
  {/* Glowing background effect */}
  <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 via-purple-600/20 to-blue-600/20 blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-300 -z-10 rounded-2xl"></div>
  {/* Decorative elements */}
  <div className="absolute -top-2 -left-2 w-6 h-6 bg-pink-500 rounded-full opacity-60 animate-bounce"></div>
  <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-blue-500 rounded-full opacity-60 animate-bounce delay-150"></div>
  <div className="absolute top-1/2 -right-4 w-3 h-3 bg-purple-500 rounded-full opacity-60 animate-ping delay-300"></div>
</h1>
    <div className="w-full max-w-6xl z-10 relative"> 
      <InfiniteMovingCards 
        items={musicSchoolTestimonials} 
        direction="right" 
        speed="slow" 
      /> 
    </div> 
  </div> 
);
};

export default Testimonials;
