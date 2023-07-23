import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'
import SingleProduct from './pages/SingleProduct'
import Cart from './pages/Cart'
import ErrorPage from './pages/ErrorPage'

const App = () => {
  return (
    <body className='bg-gradient-to-r from-sky-500 to-blue-800'>
      <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/products' element={<Products/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/singleproduct' element={<SingleProduct/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </body>
  )
}

export default App
