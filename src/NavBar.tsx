import { JSX, RefObject } from "react";
import { useState, useRef, useEffect } from "react";
import './App.css'

export default function NavBar(): JSX.Element {
  const initialState: boolean = (window.innerWidth < 1024);
  const [isMobile, setMobile] = useState(initialState);
  const isMobileRef = useRef(initialState);

  useEffect(() => {

    const checkWidth = () => {
      if (window.innerWidth < 1024 && isMobileRef.current === false) {
        setMobile(true);
        isMobileRef.current = true;
      }

      if (window.innerWidth >= 1024 && isMobileRef.current) {
        setMobile(false);
        isMobileRef.current = false;
      }
    }

    window.addEventListener("resize", checkWidth)
    return () => {
      window.removeEventListener("resize", checkWidth)
    }
  }, [])

  return (
    <div className="top-0 sticky text-xl z-10" >
      {!isMobile ? <NavDesktop /> : <NavMobile />}
    </div>
  );
}

function Link({ linkUrl, children }: { linkUrl: string, children: string }): JSX.Element {
  return (
    <a href={linkUrl} className="w-full text-nowrap font-med">{children}</a>
  )
}

function NavDesktop(): JSX.Element {
  return (
    <div className="flex flex-row width-full justify-between bg-white py-3 mx-[10vw]">
      <div >
        
      </div>
      <div className="flex flex-row gap-10" >
        <Link linkUrl="https://youtube.com">Works</Link>
        <Link linkUrl="skibidi">Blog</Link>
        <Link linkUrl="skibidi">About Me</Link>
      </div>
    </div >

  )
}

function NavMobile(): JSX.Element {
  const [isActive, setActive] = useState(false);
  const isFirstRenderRef = useRef(true);

  useEffect (() => {
    isFirstRenderRef.current = false;
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setActive(false);
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [isActive])

  return (
    <div className="flex flex-col width-full bg-white " >
      <div className="self-end mx-[5vw]">
        <Hamburger 
          onClick={(): void => {
            setActive(!isActive);
            }}
          isActive={isActive}
          isFirstRenderRef={isFirstRenderRef} 
          />
      </div>

      <div className="-z-1" >
        <MobileNavMenu isActive={isActive} isFirstRenderRef={isFirstRenderRef}/>
      </div>

    </div>
  )
}

function Hamburger({ onClick, isActive, isFirstRenderRef }: { onClick: React.MouseEventHandler, isActive: boolean, isFirstRenderRef: RefObject<boolean> }): JSX.Element {

  if (isFirstRenderRef.current) {
    return (
      <button onClick={onClick} className="inline-block w-8 h-8 my-2.5" >
        <div className="h-1 my-1 w-full bg-black "></div>
        <div className="h-1 my-1 w-full bg-black "></div>
        <div className="h-1 my-1 w-full bg-black "></div>
      </button>
    )
  } else if (isActive) {
    return (
      <button onClick={onClick} className="inline-block w-8 h-8 my-3" >
        <div className="h-1 my-1 w-full bg-black animate-[topSpanOnClick_.5s_forwards]"></div>
        <div className="h-1 my-1 w-full bg-black animate-[cenSpanOnClick_.5s_forwards]"></div>
        <div className="h-1 my-1 w-full bg-black animate-[botSpanOnClick_.5s_forwards]"></div>
      </button>
    )
  } else {
    return (
      <button onClick={onClick} className="inline-block w-8 h-8 my-3" >
        <div className="h-1 my-1 w-full bg-black animate-[topSpanOffClick_.5s_forwards]"></div>
        <div className="h-1 my-1 w-full bg-black animate-[cenSpanOffClick_.5s_forwards]"></div>
        <div className="h-1 my-1 w-full bg-black animate-[botSpanOffClick_.5s_forwards]"></div>
      </button>
    )
  }
}

function MobileNavMenu({ isActive, isFirstRenderRef }: { isActive: boolean, isFirstRenderRef: RefObject<boolean>  }) {
  if (isFirstRenderRef.current) return(null)
  if (isActive) {
    return (
      <div className=" w-full absolute animate-[navMenuOnActive_.5s] ">
        <ul>
          <li className="p-3 bg-white text-black w-full text-center hover:bg-gray-200" > <Link linkUrl="https://youtube.com">Works</Link></li>
          <li className="p-3 bg-white text-black w-full text-center hover:bg-gray-200" > <Link linkUrl="https://youtube.com">Blogs</Link></li>
          <li className="p-3 bg-white text-black w-full text-center hover:bg-gray-200" > <Link linkUrl="https://youtube.com">About Me</Link></li>
        </ul>
      </div>
    )
  }

  else {
    return (
      <div className="w-full absolute animate-[navMenuOffActive_.5s_forwards] ">
        <ul>
          <li className="p-3 bg-white text-black w-full text-center hover:bg-gray-200" > <Link linkUrl="https://youtube.com">Works</Link></li>
          <li className="p-3 bg-white text-black w-full text-center hover:bg-gray-200" > <Link linkUrl="https://youtube.com">Blogs</Link></li>
          <li className="p-3 bg-white text-black w-full text-center hover:bg-gray-200" > <Link linkUrl="https://youtube.com">About Me</Link></li>
        </ul>
      </div>
    )
  }
}
