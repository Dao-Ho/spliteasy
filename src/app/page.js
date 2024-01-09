"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [people, setPeople] = useState(0);

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
        <div className="inline-flex w-full justify-center font-bold font-poppins -translate-y-[0.5vh]">
          <h1 class={isMobile ? "text-[4vw]" : "text-[1.75vw]"}>
            100% Web-based Solution to Bill Splitting
          </h1>
        </div>
        <div
          class={
            isMobile
              ? "inline-flex w-full justify-center font-bold pt-[10vw]"
              : "inline-flex w-full justify-center font-bold"
          }
        >
          <h1 class={isMobile ? "text-[7vw]" : "text-[5vw]"}>
            How Many People?
          </h1>
        </div>
      </div>
      <div
        class={
          isMobile
            ? " pt-[5vh] flex w-full justify-center h-full text-[6.5vw] space-x-[5vw] text-white"
            : " pt-[5vh] flex w-full justify-center h-full space-x-[3vw] text-[3vw] text-white"
        }
      >
        <Link
          href={{
            pathname: "/bill",
            query: {
              people: 1,
            },
          }}
        >
          <button
            class={
              isMobile
                ? "w-[12vw] h-[10vh] border border-black rounded-[3vw] bg-[#101010]"
                : "w-[10vw] h-[10vh] border border-black rounded-3xl bg-[#101010] transition hover:scale-105"
            }
          >
            1
          </button>
        </Link>
        <Link
          href={{
            pathname: "/bill",
            query: {
              people: 2,
            },
          }}
        >
          <button
            class={
              isMobile
                ? "w-[12vw] h-[10vh] border border-black rounded-[3vw] bg-[#101010]"
                : "w-[10vw] h-[10vh] border border-black rounded-3xl bg-[#101010] transition hover:scale-105"
            }
          >
            2
          </button>
        </Link>
        <Link
          href={{
            pathname: "/bill",
            query: {
              people: 3,
            },
          }}>
        <button
          class={
            isMobile
              ? "w-[12vw] h-[10vh] border border-black rounded-[3vw] bg-[#101010]"
              : "w-[10vw] h-[10vh] border border-black rounded-3xl bg-[#101010] transition hover:scale-105"
          }
        >
          3
        </button>
        </Link>
        <Link
          href={{
            pathname: "/bill",
            query: {
              people: 4,
            },
          }}>
        <button
          class={
            isMobile
              ? "w-[12vw] h-[10vh] border border-black rounded-[3vw] bg-[#101010]"
              : "w-[10vw] h-[10vh] border border-black rounded-3xl bg-[#101010] transition hover:scale-105"
          }
        >
          4
        </button>
        </Link>
        <Link
          href={{
            pathname: "/bill",
            query: {
              people: 5,
            },
          }}>
        <button
          class={
            isMobile
              ? "w-[12vw] h-[10vh] border border-black rounded-[3vw] bg-[#101010]"
              : "w-[10vw] h-[10vh] border border-black rounded-3xl bg-[#101010] transition hover:scale-105"
          }
        >
          5
        </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
