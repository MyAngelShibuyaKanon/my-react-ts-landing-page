import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import {App, PostsPage, ContentPage} from './App.tsx'
import NavBar from './NavBar.tsx'
import {Footer} from './Footer.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <NavBar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="Blogs" element={<PostsPage />} />
        <Route path="Content" element={<ContentPage />} />
      </Routes>
      <Footer />
    </StrictMode>
  </BrowserRouter>
)
