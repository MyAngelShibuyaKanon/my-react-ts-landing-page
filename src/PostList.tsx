
export function PostList({ children }: { children: React.ReactNode }): React.ReactNode {
  return (
    <div className='flex flex-row min-h-[40vh] bg-blue-300 '>
      <div className='flex flex-col items-stretch w-[80vw] mx-[10vw] min-h-full pt-[1rem] text-xl'>
        <div className='flex justify-between'>
          <p>Bussin Posts</p>
          <a className='text-blue-700'>View all</a>
        </div>
        <div className='flex flex-row items-stretch my-[1rem] gap-[2rem] h-full  min-h-0 max-lg:flex-col max-lg:max-h-[70vh] overflow-scroll flex-nowrap no-scrollbar '>
          {children}
        </div>
      </div>

    </div>
  )
}

export function Post() {
  return (
    <div className='flex flex-col bg-white min-w-[35vw] justify-around max-lg:max-w-[100vw] h-full p-[1rem] pb-[4rem] gap-[.6rem] '>
      <h2 className='text-2xl font-bold'>Test</h2>
      <p>June 69 2023 | Skibidi,Sigma</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est sint, quos soluta unde quis quas velit, cumque consectetur nam sit earum maxime voluptate quibusdam atque magni recusandae itaque aperiam adipisci?</p>
    </div>
  )
}

