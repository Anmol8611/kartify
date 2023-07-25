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
          'url("https://images.unsplash.com/photo-1521106581851-da5b6457f674?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGxpZ2h0JTIwaW4lMjBkYXJrfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60")',
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
      }}
    >
      <div
        style={{
          background: "#0d131db9",
          backdropFilter: "blur(20px)"
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
