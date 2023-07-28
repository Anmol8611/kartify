import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  return (
    <div
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1473187983305-f615310e7daa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNob3B8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60")',
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
      }}
    >
      <div
        style={{
          background: "#0041879c",
          backdropFilter: "blur(8px)"
        }}
        className='h-full w-full'
      >
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/singleproduct' element={<SingleProduct />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
