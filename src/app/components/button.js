"use client"
import { useEffect, useState} from 'react'


const peopleButton = ({children}) => 
{
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
        <div class={isMobile? "w-[15vw] h-[10vh] border border-black" : "w-[10vw] h-[10vh] border border-black"}>
        <button class="w-full h-full">
          {children}
        </button>
        </div>
    )
}

export default peopleButton;