import React, { useContext } from "react";
import { AppContext } from "../context/productContext";

const FeaturedProduct = () => {
  const featuredData = useContext(AppContext);
  const featureProducts = featuredData.featureProducts;
  return (
    <div className="flex flex-col px-20 items-center gap-10 my-40 ">
      <h2 className="text-4xl font-extrabold text-slate-200">Featured Products</h2>
      <div className="flex justify-center items-center gap-20">
      {
        featureProducts.map((elm)=>(
            
            <div key={elm?.id} className='glassmorphicg-white p-5 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-md max-w-sm bg-slate-900 text-slate-200 hover:bg-slate-500 hover:bg-opacity-50 hover:backdrop-filter hover:backdrop-blur-lg hover:scale-105 hover:rounded-2xl transition-all'>
        <img
          src={`${elm?.image}`}
          alt='Product Image'
          className='product-img rounded-lg mb-4'
        />

        <h2 className='text-xl font-bold mb-2'>{elm?.name}</h2>

        <div className='flex justify-between items-center'>
          <span className='text-green-500 font-bold text-lg'>Rs. {elm?.price}</span>
        </div>
      </div>
        ))
      }
      </div>
    </div>
  );
};

export default FeaturedProduct;
