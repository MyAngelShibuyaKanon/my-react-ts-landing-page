import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import { App, PostsPage, ContentPage } from './App.tsx'
import NavBar from './NavBar.tsx'
import { Footer } from './Footer.tsx'
import { DetailedPost, DetailedBlog } from './DetailedPost.tsx'
createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <NavBar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="Blogs">
          <Route index element={<PostsPage />} />
          <Route path="Post1" element={<DetailedBlog />} />
        </ Route>

        <Route path="Works">
          <Route index element={<ContentPage />} />
          <Route path="Post1" element={<DetailedPost />} />
        </ Route>

      </Routes>
      <Footer />
    </StrictMode>
  </BrowserRouter>
)
