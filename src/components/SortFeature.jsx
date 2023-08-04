import React, { useContext } from 'react'
import { BsFillGridFill, BsList } from 'react-icons/bs'
import { FilterContext } from '../context/filterContext'

const SortFeature = () => {
  const {filter_products, grid_view, setGridView, setListView, sorting} = useContext(FilterContext)
  return (
    <div className='flex justify-evenly items-center pb-8 shadow shadow-black pt-10 pr-20 text-slate-200 border-b-2 border-b-black'>
      <div className='flex items-center gap-5 text-3xl text-slate-200 font-bold'>
        <button onClick={setGridView} className={grid_view ? `p-2 bg-black rounded` : `p-2 rounded`}>
          <BsFillGridFill/>
        </button>
        <button onClick={setListView} className={!grid_view ? `p-2 bg-black rounded` : `p-2 rounded`}>
          <BsList />
        </button>
      </div>

      <div>
        <p>{`( Total ${filter_products.length} ) Products Available`}</p>
      </div>

      <div>
        <form action="#">
          <label htmlFor="sort"></label>
          <select onClick={sorting} name="sort" id="sort" className='py-[10px] px-2 bg-black text-slate-200 rounded-lg text-center'>
            <option value="disabled">- - - filter - - -</option>
            <option value="lowest">Price(lowest - highest)</option>
            <option value="highest">Price(highest - lowest)</option>
            <option value="a-z">Name(a-z)</option>
            <option value="z-a">Name(z-a)</option>
          </select>
        </form>
      </div>
    </div>
  )
}

export default SortFeature