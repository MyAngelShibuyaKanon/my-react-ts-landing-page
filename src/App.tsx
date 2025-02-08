import './App.css'
import Hero from './Hero.tsx'
import NavBar from './NavBar.tsx'
import { PostList, Post } from './PostList.tsx'
import { ContentList} from './ContentList.tsx'
import {Footer} from './Footer.tsx'

function App() {
  return (
    <div>
      <div className="flex flex-col h-[100vh]">
        <NavBar />
        <Hero />
      </div>
      <PostList>
        <Post title="Test"/>
        <Post title="Test 1"/>
        <Post title="Test 2"/>
      </PostList>
      <ContentList />
      <Footer />
    </div>
  )
}

export default App
