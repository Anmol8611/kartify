import React from "react";
import { SiByjus, SiTata, SiUnacademy } from "react-icons/si";
import { GiIndiaGate } from "react-icons/gi";
import { FaHandHoldingHand, FaShieldHalved, FaTruckFast } from 'react-icons/fa6'
import { FaHandHoldingUsd } from "react-icons/fa";

const Services = () => {
  return (
    <section className='flex flex-col text-slate-200 pt-20 pb-32 px-[280px] items-center justify-between min-h-screen'>
      <div className="flex items-center justify-between w-full bg-slate-900 rounded-xl px-20 py-12">
        <div className="bg-slate-400 text-slate-950 py-10 px-5 rounded-lg shadow-black shadow-md flex flex-col items-center justify-center gap-5 h-64">
          <div>
            <FaTruckFast className="text-4xl text-slate-900 hover:text-sky-500 active:bg-yellow-300 transition-all" />
          </div>
          <p className="text-lg font-bold hover:text-sky-500 active:bg-yellow-300 transition-all w-72 text-center">Super Fast Delivery</p>
        </div>
        <div className="flex flex-col items-center gap-8">
        <div className="bg-slate-400 text-slate-950 py-10 px-5 rounded-lg shadow-black shadow-md flex flex-col items-center justify-center gap-5 h-28">
          <div>
            <FaHandHoldingHand className="text-4xl text-slate-900 hover:text-sky-500 active:bg-yellow-300 transition-all" />
          </div>
          <p className="text-lg font-bold hover:text-sky-500 active:bg-yellow-300 transition-all w-72 text-center">Non-Contact Delivery</p>
        </div>
          <div className="bg-slate-400 text-slate-950 py-10 px-5 rounded-lg shadow-black shadow-md flex flex-col items-center justify-center gap-5 h-28">
          <div>
            <FaHandHoldingUsd className="text-4xl text-slate-900 hover:text-sky-500 active:bg-yellow-300 transition-all" />
          </div>
          <p className="text-lg font-bold hover:text-sky-500 active:bg-yellow-300 transition-all w-72 text-center">Money Back Gaurantee</p>
        </div>
        </div>
        <div className="bg-slate-400 text-slate-950 py-10 px-5 rounded-lg shadow-black shadow-md flex flex-col items-center justify-center gap-5 h-64">
          <div>
            <FaShieldHalved className="text-4xl text-slate-900 hover:text-sky-500 active:bg-yellow-300 transition-all" />
          </div>
          <p className="text-lg font-bold hover:text-sky-500 active:bg-yellow-300 transition-all  w-72 text-center">Super Secure Payment Gateway</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-10 w-full py-12 px-32 bg-slate-900 rounded-xl">
        <h2 className="font-bold text-2xl">Trusted by renowned Brands</h2>
        <div className="list-none text-5xl w-full flex items-center justify-between">
          <li className="text-3xl hover:shadow-md hover:shadow-slate-200 hover:rounded-full p-5 text-slate-200 hover:text-sky-500 active:bg-yellow-300 transition-all">
            <SiUnacademy />
          </li>
          <li className="text-3xl hover:shadow-md hover:shadow-slate-200 hover:rounded-full p-5 text-slate-200 hover:text-sky-500 active:bg-yellow-300 transition-all">
            <SiTata />
          </li>
          <li className="text-3xl hover:shadow-md hover:shadow-slate-200 hover:rounded-full p-5 text-slate-200 hover:text-sky-500 active:bg-yellow-300 transition-all">
            <SiByjus />
          </li>
          <li className="text-3xl hover:shadow-md hover:shadow-slate-200 hover:rounded-full p-5 text-slate-200 hover:text-sky-500 active:bg-yellow-300 transition-all">
            <GiIndiaGate />
          </li>
        </div>
      </div>
    </section>
  );
};

export default Services;
