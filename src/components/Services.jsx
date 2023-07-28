import React from "react";
import { SiByjus, SiTata, SiUnacademy } from "react-icons/si";
import { GiIndiaGate } from "react-icons/gi";
import { FaHandHoldingHand, FaShieldHalved, FaTruckFast } from 'react-icons/fa6'
import { FaHandHoldingUsd } from "react-icons/fa";

const Services = () => {
  return (
    <section className='flex flex-col text-slate-200 pt-20 pb-32 my-10 px-[280px] items-center justify-between min-h-screen'>
      <h2 className="text-4xl font-extrabold text-slate-200">Services</h2>
      <div className="flex items-center justify-between w-full bg-slate-900 rounded-xl px-20 py-12 bg-opacity-60 backdrop-filter backdrop-blur-md">
        <div className="bg-black text-slate-200 py-10 px-5 rounded-lg shadow-black shadow-md flex flex-col items-center justify-center gap-5 h-64">
          <div>
            <FaTruckFast className="text-4xl text-slate-200 hover:text-sky-500 active:text-yellow-300 transition-all cursor-pointer" />
          </div>
          <p className="text-lg font-bold hover:text-sky-500 active:text-yellow-300 transition-all w-72 text-center cursor-pointer">Super Fast Delivery</p>
        </div>
        <div className="flex flex-col items-center gap-8">
        <div className="bg-black text-slate-200 py-10 px-5 rounded-lg shadow-black shadow-md flex flex-col items-center justify-center gap-5 h-28">
          <div>
            <FaHandHoldingHand className="text-4xl text-slate-200 hover:text-sky-500 active:text-yellow-300 transition-all cursor-pointer" />
          </div>
          <p className="text-lg font-bold hover:text-sky-500 active:text-yellow-300 transition-all w-72 text-center cursor-pointer">Non-Contact Delivery</p>
        </div>
          <div className="bg-black text-slate-200 py-10 px-5 rounded-lg shadow-black shadow-md flex flex-col items-center justify-center gap-5 h-28">
          <div>
            <FaHandHoldingUsd className="text-4xl text-slate-200 hover:text-sky-500 active:text-yellow-300 transition-all cursor-pointer" />
          </div>
          <p className="text-lg font-bold hover:text-sky-500 active:text-yellow-300 transition-all w-72 text-center cursor-pointer">Money Back Gaurantee</p>
        </div>
        </div>
        <div className="bg-black text-slate-200 py-10 px-5 rounded-lg shadow-black shadow-md flex flex-col items-center justify-center gap-5 h-64">
          <div>
            <FaShieldHalved className="text-4xl text-slate-200 hover:text-sky-500 active:text-yellow-300 transition-all cursor-pointer" />
          </div>
          <p className="text-lg font-bold hover:text-sky-500 active:text-yellow-300 transition-all  w-72 text-center cursor-pointer">Super Secure Payment Gateway</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-10 w-full py-12 px-32 bg-slate-900 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-md">
        <h2 className="font-bold text-2xl">Trusted by renowned Brands</h2>
        <div className="list-none text-5xl w-full flex items-center justify-between">
          <li className="text-3xl hover:shadow-md hover:shadow-slate-200 hover:rounded-full p-5 text-slate-200 hover:text-sky-500 hover:bg-black border border-white rounded-3xl active:bg-yellow-300 transition-all cursor-pointer">
            <SiUnacademy />
          </li>
          <li className="text-3xl hover:shadow-md hover:shadow-slate-200 hover:rounded-full p-5 text-slate-200 hover:text-sky-500 hover:bg-black border border-white rounded-3xl active:bg-yellow-300 transition-all cursor-pointer">
            <SiTata />
          </li>
          <li className="text-3xl hover:shadow-md hover:shadow-slate-200 hover:rounded-full p-5 text-slate-200 hover:text-sky-500 hover:bg-black border border-white rounded-3xl active:bg-yellow-300 transition-all cursor-pointer">
            <SiByjus />
          </li>
          <li className="text-3xl hover:shadow-md hover:shadow-slate-200 hover:rounded-full p-5 text-slate-200 hover:text-sky-500 hover:bg-black border border-white rounded-3xl active:bg-yellow-300 transition-all cursor-pointer">
            <GiIndiaGate />
          </li>
        </div>
      </div>
    </section>
  );
};

export default Services;
