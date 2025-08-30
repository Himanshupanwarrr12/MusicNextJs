"use client";
import { cn } from "@/lib/utils/util";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-8 py-6",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, idx) => (
          <li
            className="group relative w-[380px] max-w-full shrink-0 rounded-3xl border border-white/20 bg-white/10 backdrop-blur-lg px-8 py-10 md:w-[460px] shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 hover:scale-105 hover:border-purple-400/30 hover:bg-white/20 dark:border-gray-700/30 dark:bg-gray-900/40 dark:hover:border-purple-400/40 dark:hover:shadow-purple-400/20"
            key={item.name}
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"></div>
            
            <div className="absolute top-4 right-4 text-4xl text-purple-400/30 group-hover:text-purple-400/60 transition-colors duration-300">
            </div>
            
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              
              <span className="relative z-20 text-lg leading-[1.8] font-medium text-gray-800 dark:text-gray-100 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                {item.quote}
              </span>
              
              <div className="relative z-20 mt-8 flex flex-row items-center">
                <div className="mr-4 h-12 w-12 rounded-full bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">
                    {item.name.charAt(0)}
                  </span>
                </div>
                
                <span className="flex flex-col gap-1">
                  <span className="text-base leading-[1.6] font-semibold text-gray-800 dark:text-gray-200 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                    {item.name}
                  </span>
                  <span className="text-sm leading-[1.6] font-medium text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                    {item.title}
                  </span>
                </span>
              </div>
              
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-purple-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-8 w-1.5 h-1.5 bg-pink-400 rounded-full opacity-40 group-hover:opacity-80 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-11 w-1 h-1 bg-blue-400 rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};