import React from 'react'

const Button = (props) => {
  return (
    <button className='py-2 px-5 rounded-full shadow-gray-900 transition-all shadow-md text-slate-900 bg-slate-200 active:bg-slate-400 hover:shadow-lg hover:shadow-black mt-5'>{props.text}</button>
  )
}

export default Button