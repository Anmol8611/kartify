import React from 'react'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {
  const navigate = useNavigate()
  return (
    <section className='min-h-[calc(100vh-100px)] flex justify-center items-center'>
      <div className='flex flex-col justify-center items-center gap-8 bg-slate-900 px-16 py-8 rounded-lg shadow-black'>
      <h1 className='font-bold text-5xl text-red-600 font-serif'>404 : Page Not Found</h1>
      <h2 className='text-xl font-medium font-sans text-slate-300'>Ohh, seems like you are lost!</h2>
      <p className='text-sm font-light text-center text-white'>The page you are looking for does not exist <br />
         How you reached here is mystery. But you can click <br />
         the button below to reach HomePage</p>
         <div onClick={() => navigate("/products")}>
         <Button text="Go to Home Page"/>
         </div>
      </div>
    </section>
  )
}

export default ErrorPage