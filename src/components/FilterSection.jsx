import React, { useContext } from "react";
import { FilterContext } from "../context/filterContext";
import { FaCheck } from "react-icons/fa";
import FormatPrice from "../helpers/FormatPrice";
import Button from "./Button";

const FilterSection = () => {
  const {
    filters: { text, category, color, price, maxPrice, minPrice },
    all_products,
    updateFilterValue,
    clearFilter
  } = useContext(FilterContext);

  // unique data fetch
  const getUniqueData = (data, property) => {
    let newVal = data.map((currElm) => {
      return currElm[property];
    });

    if (property === "colors") {
      return (newVal = ["all", ...new Set([].concat(...newVal))]);
    } else {
      return (newVal = ["all", ...new Set(newVal)]);
    }
  };

  const categoryOnlyData = getUniqueData(all_products, "category");
  const companyOnlyData = getUniqueData(all_products, "company");
  const colorsData = getUniqueData(all_products, "colors");

  return (
    <div className='py-10 px-5 border-r-2 border-r-black shadow shadow-black h-full w-full'>
      {/* SEARCH FILTER */}
      <div id='searchForm'>
        <form
          className='mt-24 ml-5'
          onSubmit={(e) => e.preventDefault()}
          action='#'
        >
          <input
            className='bg-slate-300 text-slate-900 py-2 px-3 rounded border-none outline-none focus-within:text-slate-900 transition-all focus:bg-white'
            type='text'
            name='text'
            value={text}
            placeholder='search'
            onChange={updateFilterValue}
          />
        </form>
      </div>

      {/* CATEGORY FILTER */}
      <div
        id='category'
        className='bg-black ml-5 mr-20 mt-20 pl-5 py-10 rounded-md flex flex-col items-start gap-5'
      >
        <h3 className='text-2xl font-bold text-slate-200 tracking-widest'>
          Category
        </h3>
        <div className='flex flex-col items-start gap-3 text-slate-200 font-medium'>
          {categoryOnlyData.map((currElm, index) => (
            <button
              className='hover:text-sky-500 active:text-sky-600 tracking-widest'
              key={index}
              type='button'
              name='category'
              value={currElm}
              onClick={updateFilterValue}
            >
              {currElm}
            </button>
          ))}
        </div>
      </div>

      {/* COMPANY FILTER */}
      <div
        id='company'
        className='bg-black ml-5 mr-20 mt-20 pl-5 py-10 rounded-md flex flex-col items-start gap-5'
      >
        <h3 className='text-2xl font-bold text-slate-200 tracking-widest'>
          Company
        </h3>
        <form action='#'>
          <select
            className='py-2 px-10 bg-slate-300 text-slate-900 rounded-md text-center transition-all'
            name='company'
            id='company'
            onClick={updateFilterValue}
          >
            {companyOnlyData.map((currElm, index) => (
              <option
                className='hover:text-sky-500 active:text-sky-600'
                key={index}
                value={currElm}
                name='company'
              >
                {currElm}
              </option>
            ))}
          </select>
        </form>
      </div>

      {/* COLOR FILTER */}
      <div
        className='bg-black ml-5 mr-20 mt-20 px-5 py-10 rounded-md flex flex-col items-start gap-5'
        id='color'
      >
        <h3 className='text-2xl font-bold text-slate-200 tracking-widest'>
          Colors
        </h3>
        <div className='flex items-center justify-around bg-slate-400 py-2 px-4 rounded w-full'>
          {colorsData.map((curColor, index) => {
            if (curColor === "all") {
              return (
                <button
                  type='button'
                  key={index}
                  value={curColor}
                  name='color'
                  className={`w-8 h-8 text-lg font-bold rounded-full opacity-100 hover:text-slate-700 active:opacity-80 active:text-sky-700 transition-all`}
                  onClick={updateFilterValue}
                >
                  all
                </button>
              );
            } else {
              return (
                <button
                  type='button'
                  key={index}
                  value={curColor}
                  name='color'
                  style={{
                    backgroundColor: curColor,
                  }}
                  className={
                    color === curColor
                      ? `w-8 h-8 rounded-full opacity-100 hover:opacity-100 transition-all`
                      : `w-8 h-8 rounded-full opacity-50 hover:opacity-100 transition-all`
                  }
                  onClick={updateFilterValue}
                >
                  {color === curColor ? (
                    <FaCheck className='text-yellow-400 text-center m-auto' />
                  ) : null}
                </button>
              );
            }
          })}
        </div>
      </div>

      {/* PRICE FILTER */}
      <div className='bg-black ml-5 mr-20 mt-20 px-5 py-10 rounded-md flex flex-col items-start gap-5 text-white'>
        <h3 className='text-2xl font-bold text-slate-200 tracking-widest'>
          Price
        </h3>
        <p>
          {" "}
          <FormatPrice price={price} />{" "}
        </p>
        <input
          type='range'
          name='price'
          min={minPrice}
          max={maxPrice}
          value={price}
          onChange={updateFilterValue}
        />
      </div>

      {/* CLEAR FILTER */}

      <div 
      onClick={clearFilter} 
      className='ml-5 mt-10'
      >
        <Button text='Clear Filters' />

      </div>
    </div>
  );
};

export default FilterSection;
