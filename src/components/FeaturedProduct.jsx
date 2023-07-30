import React, { useContext } from "react";
import { AppContext } from "../context/productContext";
import ProductCard from "./ProductCard";

const FeaturedProduct = () => {
  const featuredData = useContext(AppContext);
  const isLoading = featuredData.isLoading;
  const featureProducts = featuredData.featureProducts;
  
  if(isLoading) { return (
    <div className="flex flex-col items-center">
      <h2 className="text-4xl font-extrabold text-slate-200">Featured Products</h2>
      <div className="py-14 flex flex-col items-center gap-10">
        <p className="text-white text-sm font-thin">. . . L o a d i n g</p>
        <img className="h-20" src="https://media.tenor.com/XK37GfbV0g8AAAAj/loading-cargando.gif" alt="loader image" />
      </div>
    </div>
  )
  }
  else {
    return (
      <div className="flex flex-col px-20 items-center gap-10 my-40 ">
        <h2 className="text-4xl font-extrabold text-slate-200">Featured Products</h2>
        <div className="flex justify-center items-center gap-20">
        {
         featureProducts.map((elm)=>(
              <ProductCard key={elm?.id} {...elm}/>
          ))
        }
        </div>
      </div>
    );
  }
};

export default FeaturedProduct;
