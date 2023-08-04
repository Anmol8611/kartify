import React, { useContext } from "react";
import { FilterContext } from "../context/filterContext";

const FilterSection = () => {
  const {
    filters: { text },
    all_products,
    updateFilterValue,
  } = useContext(FilterContext);

  // unique data fetch
  const getUniqueData = (data, property) => {
    let newVal = data.map((currElm) => {
      return currElm[property];
    });
    return (newVal = ["all", ...new Set(newVal)]);
  };

  const categoryOnlyData = getUniqueData(all_products, "category");
  const companyOnlyData = getUniqueData(all_products, "company");

  return (
    <div className='py-10 px-5 border-r-2 border-r-black shadow shadow-black h-full w-full'>
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
      <div id='category' className="bg-black ml-5 mr-20 mt-20 pl-5 py-10 rounded-md flex flex-col items-start gap-5">
        <h3 className="text-2xl font-bold text-slate-200 tracking-widest">Category</h3>
        <div className="flex flex-col items-start gap-3 text-slate-200 font-medium">
          {categoryOnlyData.map((currElm, index) => (
            <button
              className="hover:text-sky-500 active:text-sky-600 tracking-widest"
              key={index}
              type='button'
              name='category'
              value={currElm}
              onClick={updateFilterValue}
            >{currElm}</button>
          ))}
        </div>
      </div>

      <div className="bg-black ml-5 mr-20 mt-20 pl-5 py-10 rounded-md flex flex-col items-start gap-5">
        <h3 className="text-2xl font-bold text-slate-200 tracking-widest">Company</h3>
        <form action="#">
          <select className='py-2 px-10 bg-slate-300 text-slate-900 rounded-md text-center transition-all' name="company" id="company" onClick={updateFilterValue}>
            {
              companyOnlyData.map((currElm, index) => (
                <option
                className="hover:text-sky-500 active:text-sky-600"
                  key={index}
                  value={currElm}
                  name='company'
                >
                  {currElm}
                </option>
              ))
            }
          </select>
        </form>
      </div>
    </div>
  );
};

export default FilterSection;
