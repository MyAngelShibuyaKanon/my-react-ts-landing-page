import './index.css'
import { Link } from "react-router"
export function ContentList() {
  return (
    <div className='py-[2rem]'>
      <div className='flex flex-col w-[80vw] mx-[10vw]  flex-nowrap  no-scrollbar gap-12'>
        <Content />
        <Content />
        <Content />
      </div>
    </div>
  )
}
export function Content() {
  return (
    <div className='flex max-md:flex-col w-full min-md:min-h-[30vh] gap-[2rem] p-[1rem] flex-nowrap'>
      <img src='kita.webp' className='max-xl:w-[30vw] w-[20vw] h-[25vh] max-md:w-full object-cover ' />
      <div className='flex flex-col gap-[1rem]'>
        <Link to="/Works/Post1" className='text-2xl font-bold'>Skibidi Ohio</Link>
        <p>Feb 14, 2911</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate itaque omnis doloribus perferendis corrupti aspernatur, ratione sint tenetur distinctio quae, quod consectetur ducimus recusandae magni qui culpa facilis in illum.</p>
      </div>
    </div>
  )
}


