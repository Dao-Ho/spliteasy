"use client";
import { useEffect, useState } from "react";

import peopleButton  from './components/button'

function Home() {
  const [isMobile, setIsMobile] = useState(false);
  //checks if the screen is a mobile screen
  useEffect(() => {
    const resize = () => {
      setIsMobile(window.innerWidth <= window.innerHeight);
      console.log(isMobile);
    };

    resize();

    //waits for the screen to resize, change the state if needed
    window.addEventListener("resize", resize);

    //removes the resize event listener
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [isMobile]);

  return (
    <div className="w-screem h-screen">
      <div class="flex-row">
        <div
          className={
            isMobile
              ? "inline-flex w-full justify-center text-[14vw] font-bold pt-[10vh]"
              : "inline-flex w-full justify-center text-[#222222] text-[7vw] font-bold"
          }
        >
          <div class="inline-flex w-full justify-center">
            <h1>Split</h1>
            <h1 className="pl-[0.25vw] bg-gradient-to-r from-[#0057dd] via-[#0130d7] to-[#00159f] text-transparent bg-clip-text">
              Web
            </h1>
          </div>
        </div>
        <div className="inline-flex w-full justify-center font-bold font-poppins">
          <h1 class={isMobile ? "text-[4vw]" : "text-[1.75vw]"}>
            100% Web-based Solution to Bill Splitting
          </h1>
        </div>
        <div class={isMobile? "inline-flex w-full justify-center font-bold pt-[5vw]" : "inline-flex w-full justify-center font-bold"}>
          <h1 class={isMobile? "text-[7vw]" : "text-[5vw]"}>
          How Many People?
          </h1>
        </div>
      </div>
      <div class={isMobile? " pt-[5vh] flex w-full justify-center h-full text-[6.5vw] space-x-[5vw]" : " pt-[5vh] flex w-full justify-center h-full space-x-[3vw] text-[3vw]"}>
        <button class={isMobile? "w-[12vw] h-[10vh] border border-black rounded-[3vw]" : "w-[10vw] h-[10vh] border border-black rounded-3xl"}>
          1
        </button>
        <button class={isMobile? "w-[12vw] h-[10vh] border border-black rounded-[3vw]" : "w-[10vw] h-[10vh] border border-black rounded-3xl"}>
          2
        </button>
        <button class={isMobile? "w-[12vw] h-[10vh] border border-black rounded-[3vw]" : "w-[10vw] h-[10vh] border border-black rounded-3xl"}>
          3
        </button>
        <button class={isMobile? "w-[12vw] h-[10vh] border border-black rounded-[3vw]" : "w-[10vw] h-[10vh] border border-black rounded-3xl"}>
          4
        </button>
        <button class={isMobile? "w-[12vw] h-[10vh] border border-black rounded-[3vw]" : "w-[10vw] h-[10vh] border border-black rounded-3xl"}>
          5
        </button>
    
      </div>
    </div>
  );
}

export default Home;
