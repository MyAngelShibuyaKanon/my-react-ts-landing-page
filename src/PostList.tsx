import { Children, useRef, useEffect} from "react"
import './index.css'

export function PostList({ children }: { children: React.ReactNode }): React.ReactNode {
  const size = Children.count(children);
  const itemsRef = useRef<HTMLDivElement[]>([]);
  const indexRef = useRef<number>(0);
  const prevIndexRef = useRef<number>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const goToNext = () => { 
    prevIndexRef.current = indexRef.current
    indexRef.current === size - 1 ? indexRef.current = 0 : indexRef.current += 1
    itemsRef.current[prevIndexRef.current].classList.remove("on-focus")
    itemsRef.current[indexRef.current].classList.add("on-focus");
    itemsRef.current[indexRef.current].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
      })
  };

  const goToPrev = () => { 
    prevIndexRef.current = indexRef.current
    indexRef.current === 0 ? indexRef.current = size -1 : indexRef.current -= 1
    itemsRef.current[prevIndexRef.current].classList.remove("on-focus")
    itemsRef.current[indexRef.current].classList.add("on-focus")
    itemsRef.current[indexRef.current].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
      })
  };

  useEffect (() => {
    const interval = setInterval(() => {
      console.log(containerRef.current?.matches(':hover'))
      if (containerRef.current?.matches(':hover')) goToNext();
    }, 3000);

    return (() => {
      clearInterval(interval)
    })
  }, [])

  return (
    <div className='flex flex-row min-h-[32vh] max-2xl:min-h-[40vh] bg-blue-300 dark:bg-sky-950 '>
      <div className='flex flex-col items-stretch w-[80vw] max-lg:w-[90vw] max-lg:mx-[5vw] mx-[10vw] min-h-full pt-[1rem] text-xl'>
        <div className='flex justify-between'>
          <p>Bussin Posts</p>
          <a className='text-blue-700'>View all</a> 
        </div>
        <div className='flex relative flex-row items-stretch my-[1rem] h-full  min-h-0 max-lg:max-h-[40vh] '>
          
          <div className="absolute top-0 h-full w-full justify-between items-center flex">
            <button className="z-2 self-start h-full w-12 transition-all font-bold text-2xl cursor-pointer
             hover:bg-black/40 bg-black/30 " onClick={goToPrev}>&lt;</button>
            <button className="z-2 self-end h-full w-12 transition-all font-bold  text-2xl cursor-pointer
             hover:bg-black/40 bg-black/30" onClick={goToNext}>&gt;</button>
          </div>

          <div className="flex flex-row w-full  px-12 overflow-x-scroll items-center animate-all gap-8  relative no-scrollbar " ref={containerRef}>
            {Children.map(children, child => 
              <div className="w-[60%] max-lg:w-full max-lg:mx-[5%] h-full shrink-0 bg-white dark:bg-slate-700" ref={(node) => {
                if (node !== null) itemsRef.current.push(node);
              }}>
                {child}
              </div>
            )}
          </div>

          
        </div>
      </div>

    </div>
  )
}

export function Post({title}: {title:string} ) {
  return (
    <div className='flex flex-col  min-w-[25vw] justify-around h-full  p-[1rem] text-lg max-lg:text-base'>
      <h2 className='text-lg font-bold'>{title}</h2>
      <p>June 69 2023 | Skibidi,Sigma</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est sint, quos soluta unde quis quas velit, cumque consectetur nam sit earum maxime voluptate quibusdam atque magni recusandae itaque aperiam adipisci?</p>
    </div>
  )
}


