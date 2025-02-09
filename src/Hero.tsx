
export default function Hero() {
  return (
    <div className="flex flex-row shrink-0 top-0 gap-x-10 gap-y-10 px-[10vw] h-svh items-center 
      max-lg:flex-col-reverse max-lg:justify-center" >
      <div className="flex flex-col gap-5 max-lg:text-center">
        <div className="font-bold text-5xl">Hello, I am Sigma!</div>
        <div className="text-xl" >Consectetur urna, ultrices, ac nunc porttitor justo proin dictumst ut. Est aenean, justo arcu sit praesent pellentesque, dignissim tellus morbi. Sit curabitur, libero est turpis, metus cursus morbi in eget. Duis neque suspendisse, sit nisi quam tempor consequat, velit dui.</div>
        <button className='bg-orange-600 hover:border-orange-600 border-solid border-2 hover:bg-white hover:text-orange-600 text-white text-xl self-start max-lg:self-center py-[.7rem] px-[1.5rem]'>Be a Skibidi</button>
      </div>
      <img src="Ikuyo_Kita_Character_Design_2_square.webp" className="rounded-full w-[50vw]" />
    </div>
  )
}
