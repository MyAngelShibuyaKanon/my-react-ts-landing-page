import { JSX } from "react";
import { useState, useRef, useEffect } from "react";
import './App.css'

export default function NavBar(): JSX.Element {

  const initialState: boolean = (window.innerWidth < 1024);
  const [isMobile, setMobile] = useState(initialState);
  const isMobileRef = useRef(initialState);


  useEffect(() => {

    const checkWidth = () => {
      if (window.innerWidth < 1024 && isMobileRef.current === false) {
        console.log("re-rendered to mobile")
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
      window.addEventListener("resize", checkWidth)
    }
  }, [])

  return (
    <div className="top-0 sticky text-xl " >
      {!isMobile ? <NavDesktop /> : <NavMobile />}
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
    <div className="flex flex-row width-full justify-between 
      -lg:flex p-3">
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

function NavMobile(): JSX.Element {
  const initialState: boolean = false;
  const [isActive, setActive] = useState(initialState);
  const prevState = useRef(isActive)
  return (
    <div className="flex flex-col width-full " >
      <div className="self-end mx-[5vw]">
        <Hamburger onClick={(): void => {
          prevState.current = isActive;
          setActive(!isActive);
        }}
          prevState={prevState}
          isActive={isActive} />
      </div>
      {isActive ?
        <div>
          <MobileNavMenu />
        </div>
        :
        null
      }

    </div>
  )
}

function Hamburger({ onClick, prevState, isActive }: { onClick: React.MouseEventHandler, prevState: React.RefObject<boolean>, isActive: boolean }): JSX.Element {
  console.log(prevState, isActive)

  if (prevState.current === isActive) {
    return (
      <button onClick={onClick} className="inline-block w-8 h-8 my-3" >
        <div className="h-1 my-1 w-full bg-black "></div>
        <div className="h-1 my-1 w-full bg-black "></div>
        <div className="h-1 my-1 w-full bg-black "></div>
      </button>
    )
  } else if (isActive === true) {
    console.log(isActive)
    return (
      <button onClick={onClick} className="inline-block w-8 h-8 my-3" >
        <div className="h-1 my-1 w-full bg-black animate-[topSpanOnClick_1s_forwards]"></div>
        <div className="h-1 my-1 w-full bg-black animate-[cenSpanOnClick_1s_forwards]"></div>
        <div className="h-1 my-1 w-full bg-black animate-[botSpanOnClick_1s_forwards]"></div>
      </button>
    )
  } else {
    return (
      <button onClick={onClick} className="inline-block w-8 h-8 my-3" >
        <div className="h-1 my-1 w-full bg-black animate-[topSpanOffClick_1s_forwards]"></div>
        <div className="h-1 my-1 w-full bg-black animate-[cenSpanOffClick_1s_forwards]"></div>
        <div className="h-1 my-1 w-full bg-black animate-[botSpanOffClick_1s_forwards]"></div>
      </button>
    )
  }
}

function MobileNavMenu() {
  return (
    <div className="w-full" >
      <ul>
        <li className="p-3 bg-white text-black w-full text-center hover:bg-gray-200" > <Link linkUrl="https://youtube.com">Youtube</Link></li>
        <li className="p-3 bg-white text-black w-full text-center hover:bg-gray-200" > <Link linkUrl="https://youtube.com">Youtube</Link></li>
        <li className="p-3 bg-white text-black w-full text-center hover:bg-gray-200" > <Link linkUrl="https://youtube.com">Youtube</Link></li>
      </ul>
    </div>
  )
}
