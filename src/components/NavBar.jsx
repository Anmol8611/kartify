import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import CartIcon from "./CartIcon";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <nav className='flex sticky z-10 top-0 left-0 w-full justify-between items-center px-20 py-3 bg-slate-900 bg-opacity-80 backdrop-filter backdrop-blur-md shadow shadow-black'>
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
        <div className='hover:shadow hover:shadow-white py-3 pr-2 rounded-full transition-all'>
          <CartIcon />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
