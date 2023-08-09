import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineGithub,
} from "react-icons/ai";
import { FaOpencart } from "react-icons/fa";
import Button from "./Button";
import CartIcon from "./CartIcon";

const Footer = () => {

  const navigate = useNavigate()

  return (
    <footer className='bg-slate-900 pb-10 pt-28 px-16 flex flex-col items-center gap-5 bg-opacity-80 backdrop-filter backdrop-blur-sm'>
      <div className='flex items-center justify-between w-full'>
        <NavLink to='/' className='h-32 w-32'>
          <img
            src='/logos/logo3.svg'
            alt='logo'
            className='rounded-lg shadow-slate-300 shadow hover:shadow-md transition-all hover:shadow-slate-100 active:shadow-yellow-300 active:shadow-md'
          />
        </NavLink>
        <div className='flex flex-col items-center gap-5 list-none'>
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
        <div className="list-none flex flex-col items-center gap-5">
          <li className="text-slate-200 font-bold text-lg">Social Media</li>
          <div className="flex items-center gap-10 text-5xl text-slate-200">
          <Link to={"https://twitter.com/Anmol_kr_twt"} target="_blank">
            <AiFillTwitterCircle className="hover:text-sky-500 active:text-yellow-300 transition-all hover:shadow hover:shadow-slate-100 hover:rounded-full p-2" />
          </Link>
          <Link to={"https://github.com/Anmol8611/kartify"} target="_blank">
            <AiOutlineGithub className="hover:text-sky-500 active:text-yellow-300 transition-all hover:shadow hover:shadow-slate-100 hover:rounded-full p-2" />
          </Link>
          <Link to={"https://www.linkedin.com/in/anmol-kumar-a7593125b/"} target="_blank">
            <AiFillLinkedin className="hover:text-sky-500 active:text-yellow-300 transition-all hover:shadow hover:shadow-slate-100 hover:rounded-full p-2" />
          </Link>
          </div>
        </div>
        <div className='flex flex-col items-center'>
          {/* <div className='font-sans block mt-4 lg:inline-block lg:mt-0 lg:ml-6 align-middle text-black hover:text-gray-700'>
            <NavLink to='/cart' role='button' className='relative flex'>
              <FaOpencart className='font-bold text-6xl text-slate-200 hover:text-blue-500 transition-all hover:shadow hover:shadow-slate-100 hover:rounded-full p-2 active:text-yellow-300' />
              <span className='absolute right-0 top-0 rounded-full bg-yellow-400 w-5 h-5 top right p-0 m-0 text-red-700 font-mono text-sm  leading-tight text-center'>
                5
              </span>
            </NavLink>
          </div> */}
          <div className="hover:shadow hover:shadow-white py-5 pr-4 rounded-full transition-all">
          <CartIcon/>
          </div>
          <div onClick={()=>navigate("/products")}>
          <Button text="Shop More"/>
          </div>
        </div>
      </div>
      <div className='text-slate-200 mt-10'>
        copyright &copy;{" "}
        <a
          href='https://github.com/Anmol8611'
          target='_blank'
          className='text-yellow-300 hover:text-sky-600 active:text-yellow-200 transition-all'
        >
          Anmol Kumar
        </a>{" "}
        @ 2023
      </div>
    </footer>
  );
};

export default Footer;
