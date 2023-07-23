import React from 'react'
import Button from './Button'
import { useNavigate } from 'react-router-dom'

const Hero = (props) => {
  const navigate = useNavigate()
  return (
    <section className='flex items-center justify-center gap-48 px-20 py-20 min-h-[calc(100vh-100px)]'>
      <div className='h-[480px] w-[650px] '>
        <img src="/logos/logo5.svg" alt="hero image" className='rounded-xl shadow-black drop-shadow-md shadow-md' />
      </div>
      <div>
        <h1 className='font-extrabold text-7xl text-slate-200'>{props.text}</h1>
        <p className='text-slate-300 max-w-lg font-thin font-serif py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, dolores. Ab neque doloribus nulla inventore.</p>
        <h5 className='text-lg font-light text-slate-300 text pb-5'> " Kartify the Cart " </h5>
        <hr />
        <div onClick={()=>navigate("/products")}>
        <Button text={"Shop More"} />
        </div>
      </div>
    </section>
  )
}

export default Hero