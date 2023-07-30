import React from 'react'
import { NavLink } from 'react-router-dom'

const PageNavigation = ({title}) => {
  return (
    <div className='text-xl text-slate-200 font-semibold'>
        <NavLink to="/" className={`text-sky-500 hover:text-sky-600`}>/Home</NavLink>/{title}
    </div>
  )
}

export default PageNavigation