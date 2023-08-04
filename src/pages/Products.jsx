import React from 'react'
import SortFeature from '../components/SortFeature'
import FilterSection from '../components/FilterSection'
import ProductList from '../components/ProductList'

const Products = () => {
  
  return (
    <section className='flex justify-between'>
      <div className='w-[calc(100vw-70%)]'>
        <FilterSection/>
      </div>
      <div className='flex flex-col gap-2 w-[calc(100vw-30%)]'>
        <div>
          <SortFeature/>
        </div>
        <div className='mt-10 mb-20'>
          <ProductList/>
        </div>
      </div>
    </section>
  )
}

export default Products