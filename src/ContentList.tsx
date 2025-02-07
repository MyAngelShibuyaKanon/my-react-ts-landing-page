export function ContentList() {
  return (
    <div className='py-[2rem]'>
      <div className='flex flex-col w-[80vw] mx-[10vw]  max-h-[85vh] flex-nowrap overflow-scroll no-scrollbar '>
        <Content />
        <Content />
        <Content />
      </div>
    </div>
  )
}

export function Content() {
  return (
    <div className='flex max-lg:flex-col w-full min-lg:min-h-[30vh]  gap-[2rem] p-[1rem] flex-nowrap'>
      <img src='kita.webp' className='max-w-[20vw] max-lg:max-w-[80vw] object-cover ' />
      <div className='flex flex-col gap-[1rem]'>
        <h1 className='text-2xl font-bold'>Skibidi Ohio</h1>
        <p>Feb 14, 2911</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate itaque omnis doloribus perferendis corrupti aspernatur, ratione sint tenetur distinctio quae, quod consectetur ducimus recusandae magni qui culpa facilis in illum.</p>
      </div>
    </div>
  )
}
