import { JSX, RefObject, AnimationEventHandler } from "react";
import { useState, useRef, useEffect } from "react";
import './App.css'

export default function NavBar(): JSX.Element {

  const initialState: boolean = (window.innerWidth < 1024);
  const [isMobile, setMobile] = useState(initialState);
  const isMobileRef = useRef(initialState);
  const [isActive, setActive] = useState(false);
  const prevState = useRef(isActive);

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

    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setActive(false);
        prevState.current = !prevState.current;
      }
    }


    window.addEventListener("resize", checkWidth)
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("resize", checkWidth)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="top-0 sticky text-xl z-10" >
      {!isMobile ? <NavDesktop /> : <NavMobile isActive={isActive} prevState={prevState} setActive={(bool: boolean) => { setActive(bool) }} />}
    </div>
  );
}

function Link({ linkUrl, children }: { linkUrl: string, children: string }): JSX.Element {
  return (
    <a href={linkUrl} className="w-full">{children}</a>
  )
}

function NavDesktop(): JSX.Element {
  return (
    <div className="flex flex-row width-full justify-between bg-white 
      -lg:flex py-3 mx-[10vw]">
      <div >
        Sigma
      </div>
      <div className="flex flex-row gap-10" >
        <Link linkUrl="https://youtube.com">Youtube</Link>
        <Link linkUrl="skibidi">a</Link>
        <Link linkUrl="skibidi">a</Link>
      </div>
    </div >

  )
}

function NavMobile({ isActive, prevState, setActive }: { isActive: boolean, prevState: RefObject<boolean>, setActive: CallableFunction }): JSX.Element {
  const [navMenu, setNavMenu] = useState(false);

  return (
    <div className="flex flex-col width-full bg-white " >
      <div className="self-end mx-[5vw]">
        <Hamburger onClick={(): void => {
          prevState.current = isActive;
          setActive(!isActive);
          setNavMenu(true);
        }}
          prevState={prevState}
          isActive={isActive} />
      </div>
      {isActive || navMenu ?
        <div className="-z-1" >
          <MobileNavMenu isActive={isActive} onAnimationEnd={() => {
            setNavMenu(false)
          }
          } />
        </div>
        :
        null
      }

    </div>
  )
}

function Hamburger({ onClick, prevState, isActive }: { onClick: React.MouseEventHandler, prevState: React.RefObject<boolean>, isActive: boolean }): JSX.Element {

  if (prevState.current === isActive) {
    return (
      <button onClick={onClick} className="inline-block w-8 h-8 my-2.5" >
        <div className="h-1 my-1 w-full bg-black "></div>
        <div className="h-1 my-1 w-full bg-black "></div>
        <div className="h-1 my-1 w-full bg-black "></div>
      </button>
    )
  } else if (isActive === true) {
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

function MobileNavMenu({ isActive, onAnimationEnd }: { isActive: boolean, onAnimationEnd: AnimationEventHandler }) {
  if (isActive) {
    return (
      <div className="w-full absolute animate-[navMenuOnActive_.5s] ">
        <ul>
          <li className="p-3 bg-white text-black w-full text-center hover:bg-gray-200" > <Link linkUrl="https://youtube.com">Youtube</Link></li>
          <li className="p-3 bg-white text-black w-full text-center hover:bg-gray-200" > <Link linkUrl="https://youtube.com">Youtube</Link></li>
          <li className="p-3 bg-white text-black w-full text-center hover:bg-gray-200" > <Link linkUrl="https://youtube.com">Youtube</Link></li>
        </ul>
      </div>
    )
  }

  else {
    return (
      <div className="w-full absolute animate-[navMenuOffActive_.5s_forwards] " onAnimationEnd={onAnimationEnd}  >
        <ul>
          <li className="p-3 bg-white text-black w-full text-center hover:bg-gray-200" > <Link linkUrl="https://youtube.com">Youtube</Link></li>
          <li className="p-3 bg-white text-black w-full text-center hover:bg-gray-200" > <Link linkUrl="https://youtube.com">Youtube</Link></li>
          <li className="p-3 bg-white text-black w-full text-center hover:bg-gray-200" > <Link linkUrl="https://youtube.com">Youtube</Link></li>
        </ul>
      </div>
    )
  }
}
