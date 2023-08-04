import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../helpers/FormatPrice";

const ProductCard = (elm) => {
  return (
    <NavLink
      to={`/singleproduct/${elm.id}`}
      className='glassmorphicg-white p-5 rounded-xl bg-opacity-70 backdrop-filter backdrop-blur-md max-w-sm bg-slate-900 text-slate-200 hover:bg-slate-500 hover:bg-opacity-50 hover:backdrop-filter hover:backdrop-blur-lg hover:scale-105 hover:rounded-2xl transition-all'
    >
      <img
        src={`${elm?.image}`}
        alt='Product Image'
        className='product-img rounded-lg mb-4'
      />

      <div className="flex items-center justify-between">
        <div>
          <h2 className='text-xl font-bold mb-2'>{elm?.name}</h2>

          <div className='flex justify-between items-center'>
            <span className='text-green-500 font-medium text-sm'>
              <FormatPrice price={elm?.price} />
            </span>
          </div>
        </div>
        <p className='py-2 px-4 bg-slate-100 w-fit cursor-pointer backdrop-filter backdrop-blur-lg rounded-lg active:bg-yellow-200 active:shadow active:shadow-black transition-all text-slate-900'>
          Show Detail
        </p>
      </div>
    </NavLink>
  );
};

export default ProductCard;
