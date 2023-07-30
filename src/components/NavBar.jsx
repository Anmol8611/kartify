import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaOpencart } from "react-icons/fa";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <nav className='flex sticky z-10 top-0 left-0 w-full justify-between items-center px-20 py-3 bg-slate-900 bg-opacity-60 backdrop-filter backdrop-blur-md shadow shadow-black'>
      <div onClick={() => navigate("/")}>
        <img
          src='/logos/logo6.svg'
          alt='Logo Image'
          className='w-24 hover:cursor-pointer'
        />
      </div>
      <div className='flex gap-32 items-center'>
        <div className='flex items-center gap-20 list-none'>
          <li>
            <NavLink
              to='/'
              className='font-bold text-slate-200 hover:text-blue-500 transition-all active:text-yellow-300 hover:underline-offset-8 hover:underline'
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/products'
              className='font-bold text-slate-200 hover:text-blue-500 transition-all active:text-yellow-300 hover:underline-offset-8 hover:underline'
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/about'
              className='font-bold text-slate-200 hover:text-blue-500 transition-all active:text-yellow-300 hover:underline-offset-8 hover:underline'
            >
              About us
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/contact'
              className='font-bold text-slate-200 hover:text-blue-500 transition-all active:text-yellow-300 hover:underline-offset-8 hover:underline'
            >
              Contact us
            </NavLink>
          </li>
        </div>

        <li className='font-sans block mt-4 lg:inline-block lg:mt-0 lg:ml-6 align-middle text-black hover:text-gray-700'>
          <NavLink to='/cart' role='button' className='relative flex'>
            <FaOpencart className='font-bold text-3xl text-slate-200 hover:text-blue-500 transition-all active:text-sky-200' />
            <span className='absolute right-0 top-0 rounded-full bg-yellow-400 w-4 h-4 top right p-0 m-0 text-red-700 font-mono text-xs  leading-tight text-center'>
              5
            </span>
          </NavLink>
        </li>
      </div>
    </nav>
  );
};

export default NavBar;
