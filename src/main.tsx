import { StrictMode, useLayoutEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import './index.css'
import { App, PostsPage, ContentPage } from './App.tsx'
import NavBar from './NavBar.tsx'
import { Footer } from './Footer.tsx'
import { DetailedPost, DetailedBlog } from './DetailedPost.tsx'

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  useLayoutEffect(() => {
    // Scroll to the top of the page when the route changes
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  return children;
};

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <NavBar />
      <Wrapper>
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
      </Wrapper>
      <Footer />
    </StrictMode>
  </BrowserRouter>
)
