import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { FaOpencart } from "react-icons/fa";
import { CartContext } from '../context/cartContext';

const CartIcon = () => {
    const {total_item} = useContext(CartContext)
  return (
    <li className='font-sans block mt-4 lg:inline-block lg:mt-0 lg:ml-6 align-middle text-black hover:text-gray-700'>
          <NavLink to='/cart' role='button' className='relative flex'>
            <FaOpencart className='font-bold text-3xl text-slate-200 hover:text-blue-500 transition-all active:text-sky-200' />
            <span className='absolute right-0 top-0 rounded-full bg-red-600 bg-opacity-90 w-5 h-5 top right pt-1 m-auto text-white font-mono text-xs  leading-tight text-center'>
              {total_item}
            </span>
          </NavLink>
        </li>
  )
}

export default CartIcon