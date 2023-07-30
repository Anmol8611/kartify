import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/productContext";
import PageNavigation from "../components/PageNavigation";
import MyImage from "../components/MyImage";
import FormatPrice from "../helpers/FormatPrice";
import { TbReplace, TbTruckDelivery } from 'react-icons/tb'
import { MdSecurity } from 'react-icons/md'
import StarsComponent from "../components/StarsComponent";

const SingleProduct = () => {
  const { id } = useParams();
  const { fetchSingleProduct, singleProduct, isSingleLoading } =
    useContext(AppContext);
  const URL = `https://api.pujakaitem.com/api/products`;

  useEffect(() => {
    fetchSingleProduct(`${URL}?id=${id}`);
    console.log(singleProduct);
  }, []);

  const {
    id: productId,
    name,
    company,
    price,
    description,
    category,
    stock,
    stars,
    reviews,
    image,
  } = singleProduct;

  return isSingleLoading ? (
    <div className='flex flex-col justify-center items-center m-auto min-h-[calc(100vh-100px)]'>
      <h2 className='text-2xl font-extrabold text-slate-200'>{name} Detail</h2>
      <div className='py-14 flex flex-col items-center gap-10'>
        <p className='text-white text-sm font-thin'>. . . L o a d i n g</p>
        <img
          className='h-20'
          src='https://media.tenor.com/XK37GfbV0g8AAAAj/loading-cargando.gif'
          alt='loader image'
        />
      </div>
    </div>
  ) : (
    <div className='min-h-[calc(100vh-100px)] px-20'>
      <PageNavigation title={name} />
      <div className='flex items-center justify-around  mx-auto min-h-full text-slate-100 mt-12 backdrop-filter backdrop-blur-2xl bg-opacity-70 bg-slate-950 rounded-lg py-10'>
        <MyImage imgs={image} />
        <div className='flex flex-col justify-start gap-5 max-w-[50%]'>
          <h2 className="text-lg font-bold">{name}</h2>
          <StarsComponent stars={stars} reviews={reviews} />
          <div>
            MRP :{" "}
            <del className='font-bold text-lg text-green-700'>
              <FormatPrice price={price + 250000} />
            </del>
            <br />
            <p className="animate-pulse">
            Deal of the Day :{`  `}
            <span className='font-bold text-lg text-green-500'>
            <FormatPrice price={price} />
            </span>
            </p>
          </div>
          <p className="max-w-2xl text-sm">{description}</p>
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-center text-slate-400 border-none bg-black backdrop-filter backdrop-blur-md bg-opacity-60 rounded-md p-2 gap-2">
              <TbTruckDelivery className="text-3xl"/>
              <p>Free Delivery</p>
            </div>
            <div className="flex flex-col items-center text-slate-400 border-none bg-black backdrop-filter backdrop-blur-md bg-opacity-60 rounded-md p-2 gap-2">
              <TbReplace className="text-3xl"/>
              <p>10 Days Replacement</p>
            </div>
            <div className="flex flex-col items-center text-slate-400 border-none bg-black backdrop-filter backdrop-blur-md bg-opacity-60 rounded-md p-2 gap-2">
              <TbTruckDelivery className="text-3xl"/>
              <p>Thapa Delivered</p>
            </div>
            <div className="flex flex-col items-center text-slate-400 border-none bg-black backdrop-filter backdrop-blur-md bg-opacity-60 rounded-md p-2 gap-2">
              <MdSecurity className="text-3xl" />
              <p>2 Year Warranty</p>
            </div>
          </div>
          <div>
            <p>Availablity : <span className="font-semibold">{stock > 0 ? "In Stock" : "Not Available"}</span></p>
            <p>ID : {productId}</p>
            <p>Brand : {company}</p>
            <p>Caregory : {category}</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
