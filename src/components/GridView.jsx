import React from 'react'
import ProductCard from './ProductCard'

const GridView = ({ products }) => {
    return (
        <div className="flex justify-center flex-wrap items-center gap-10">
            {
                products.map((elm) => (
                    <ProductCard key={elm?.id} {...elm} />
                ))
            }
        </div>
    )
}

export default GridView