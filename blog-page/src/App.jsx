import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainPage from "./components/MainPage";
import BlogDetail from "./components/BlogDetail";
import Blog from "./components/Blog"
import About from "./components/About"
import Contact from "./components/Contact"

function App() {
  return (
    <>
      <Navbar />
    
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        
      </Routes>
    </>
  );
}

export default App;