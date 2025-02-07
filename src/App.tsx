import { useRef } from 'react'

import './App.css'
import Hero from './Hero.tsx'
import NavBar from './NavBar.tsx'
import { PostList, Post } from './PostList.tsx'
import { ContentList, Content } from './ContentList.tsx'
import {Footer} from './Footer.tsx'

function App() {
  const heroRef = useRef(null)
  return (
    <div>
      <div className="flex flex-col h-[100vh]" ref={heroRef}>
        <NavBar />
        <Hero />
      </div>
      <PostList>
        <Post />
        <Post />
        <Post />
      </PostList>
      <ContentList />
      <Footer />
    </div>
  )
}

export default App
