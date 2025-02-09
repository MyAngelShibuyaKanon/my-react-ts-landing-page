import './App.css'
import Hero from './Hero.tsx'

import { PostList, Post } from './PostList.tsx'
import { ContentList, Content} from './ContentList.tsx'


export function App() {
  return (
    <div>
        
        <Hero />
      <PostList>
        <Post title="Test"/>
        <Post title="Test 1"/>
        <Post title="Test 2"/>
      </PostList>
      <ContentList />
      
    </div>
  )
}

export default App

export function PostsPage() {
  return (
    <div className='flex flex-col translate-y-13 max-lg:mx-[5vw] mx-[15vw] p-y-8'>
      <Post title="Test"/>
      <Seperator />
      <Post title="Test"/>
      <Seperator />
      <Post title="Test"/>
      <Seperator />
      <Post title="Test"/>
      <Seperator />
    </div>
  )
}
export function ContentPage() {
  return (
    <div className='flex flex-col translate-y-13 max-lg:mx-[5vw] mx-[15vw] p-y-8'>
      <Content/>
      <Seperator />
      <Content/>
      <Seperator />
      <Content/>
      <Seperator />
      <Content/>
      <Seperator />
    </div>
  )
}

export function Seperator() {
  return(
    <hr className="mb-12 mt-4 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
  )
}