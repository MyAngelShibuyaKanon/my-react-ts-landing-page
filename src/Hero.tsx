
export default function Hero() {
  return (
    <div className="flex flex-row shrink-0 top-0 gap-x-10 gap-y-10 px-[10vw] h-full -translate-y-13 
      items-center 
      max-lg:flex-col-reverse max-lg:justify-center" >
      <div className="max-lg:text-center">
        <div className="font-bold text-5xl max-lg:text-4xl">Hello, I am Sigma!</div>
        <div className="text-xl max-lg:text-lg" >Consectetur urna, ultrices, ac nunc porttitor justo proin dictumst ut. Est aenean, justo arcu sit praesent pellentesque, dignissim tellus morbi. Sit curabitur, libero est turpis, metus cursus morbi in eget. Duis neque suspendisse, sit nisi quam tempor consequat, velit dui.</div>
      </div>
      <img src="Ikuyo_Kita_Character_Design_2_square.webp" className="rounded-full w-[50vw]" />
    </div>
  )
}
