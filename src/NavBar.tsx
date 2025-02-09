import { JSX, MouseEventHandler, RefObject } from "react";
import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router";
import './App.css'

export default function NavBar(): JSX.Element {
  const initialState: boolean = (window.innerWidth < 1024);
  const [isMobile, setMobile] = useState(initialState);
  const isMobileRef = useRef(initialState);
  const navBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleNavBarOnScroll = () => {
        let isNotVisible = navBarRef.current?.classList.toggle("navBarNotVisible", (window.scrollY > window.innerHeight ));
        console.log(isNotVisible)
    }

    window.addEventListener("scroll", handleNavBarOnScroll)

    return () => {
      window.removeEventListener("scroll", handleNavBarOnScroll)
    }
  }, [])

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
    <div className="flex w-[100vw]">
      <div className="top-0 fixed w-full text-xl z-10 [&.navBarNotVisible]:-translate-y-full transition-all" ref={navBarRef} >
        {!isMobile ? <NavDesktop /> : <NavMobile />}
      </div>
    </div>
  );
}

function Link({ linkUrl, children, onClick }: { linkUrl: string, children: string, onClick?: MouseEventHandler }): JSX.Element {
  return (
    <NavLink to={linkUrl} className={({ isActive }) =>
      isActive ? "flex text-orange-600 w-full h-full text-nowrap align-middle justify-center items-center" : "flex text-black dark:text-white w-full h-full text-nowrap text-center justify-center items-center" 
    }
    onClick={onClick}
    end>
        {children}
      </NavLink>
  )
}

function NavDesktop(): JSX.Element {
  return (
    <div className="flex flex-row width-full justify-between bg-white dark:bg-gray-950 py-3 px-[10vw]">
      <div >
        
      </div>
      <div className="flex flex-row gap-10" >
        <Link linkUrl="Content">Works</Link>
        <Link linkUrl="Blogs">Blogs</Link>
        <Link linkUrl="/">About Me</Link>
      </div>
    </div >

  )
}

function NavMobile(): JSX.Element {
  const [isActive, setActive] = useState(false); //This was reimplemented on the main NavBar class for decoupling, this can be removed for next refactor
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
    <div className="flex flex-col width-full bg-white dark:bg-gray-950 " >
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
        <MobileNavMenu onClick={(): void => {
            setActive(!isActive);
            }}
            isActive={isActive} isFirstRenderRef={isFirstRenderRef}/>
      </div>

    </div>
  )
}

function Hamburger({ onClick, isActive, isFirstRenderRef }: { onClick: React.MouseEventHandler, isActive: boolean, isFirstRenderRef: RefObject<boolean> }): JSX.Element {

  if (isFirstRenderRef.current) {
    return (
      <button onClick={onClick} className="inline-block w-8 h-8 my-2.5" >
        <div className="h-1 my-1 w-full bg-black dark:bg-white"></div>
        <div className="h-1 my-1 w-full bg-black dark:bg-white"></div>
        <div className="h-1 my-1 w-full bg-black dark:bg-white"></div>
      </button>
    )
  } else if (isActive) {
    return (
      <button onClick={onClick} className="inline-block w-8 h-8 my-3" >
        <div className="h-1 my-1 w-full bg-black dark:bg-white animate-[topSpanOnClick_.5s_forwards]"></div>
        <div className="h-1 my-1 w-full bg-black dark:bg-white animate-[cenSpanOnClick_.5s_forwards]"></div>
        <div className="h-1 my-1 w-full bg-black dark:bg-white animate-[botSpanOnClick_.5s_forwards]"></div>
      </button>
    )
  } else {
    return (
      <button onClick={onClick} className="inline-block w-8 h-8 my-3" >
        <div className="h-1 my-1 w-full bg-black dark:bg-white animate-[topSpanOffClick_.5s_forwards]"></div>
        <div className="h-1 my-1 w-full bg-black dark:bg-white animate-[cenSpanOffClick_.5s_forwards]"></div>
        <div className="h-1 my-1 w-full bg-black dark:bg-white animate-[botSpanOffClick_.5s_forwards]"></div>
      </button>
    )
  }
}

function MobileNavMenu({ isActive, isFirstRenderRef, onClick }: { isActive: boolean, isFirstRenderRef: RefObject<boolean>, onClick: React.MouseEventHandler  }) {
  if (isFirstRenderRef.current) return(null)
  if (isActive) {
    return (
      <div className=" w-full absolute animate-[navMenuOnActive_.5s] ">
        <ul className="">
          <li className="flex h-13 bg-white dark:bg-gray-950 text-black w-full text-center hover:bg-gray-200 dark:hover:bg-gray-900" > <Link linkUrl="Content" onClick={onClick}>Works</Link></li>
          <li className="flex h-13 bg-white dark:bg-gray-950 text-black w-full text-center hover:bg-gray-200 dark:hover:bg-gray-900" > <Link linkUrl="Blogs" onClick={onClick}>Blogs</Link></li>
          <li className="flex h-13 bg-white dark:bg-gray-950 text-black w-full text-center hover:bg-gray-200 dark:hover:bg-gray-900" > <Link linkUrl="/" onClick={onClick}>About Me</Link></li>
        </ul>
      </div>
    )
  }

  else {
    return (
      <div className="w-full absolute animate-[navMenuOffActive_.5s_forwards] ">
        <ul>
          <li className="p-3 bg-white dark:bg-gray-950 text-black w-full text-center hover:bg-gray-200 dark:hover:bg-gray-900" > <Link linkUrl="Content" onClick={onClick}>Works</Link></li>
          <li className="p-3 bg-white dark:bg-gray-950 text-black w-full text-center hover:bg-gray-200 dark:hover:bg-gray-900" > <Link linkUrl="Blogs" onClick={onClick}>Blogs</Link></li>
          <li className="p-3 bg-white dark:bg-gray-950 text-black w-full text-center hover:bg-gray-200 dark:hover:bg-gray-900" > <Link linkUrl="/" onClick={onClick}>About Me</Link></li>
        </ul>
      </div>
    )
  }
}
