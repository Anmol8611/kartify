import React from 'react'

const Button = (props) => {
  return (
    <button className='py-2 px-5 rounded-full shadow-yellow-200 shadow-md bg-white hover:bg-sky-400 hover:text-white active:bg-yellow-300 transition-all active:shadow-yellow-100 active:shadow-lg text-slate-900 mt-5'>{props.text}</button>
  )
}

export default Button