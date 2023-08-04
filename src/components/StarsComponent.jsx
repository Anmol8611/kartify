import React from 'react'
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'

const StarsComponent = ({stars, reviews}) => {
   const ratingStar = Array.from({length : 5},(_,index )=>{
        let number = index + 0.5;
        return (
            <span key={index}>
                {
                    stars >= index + 1 ? (<BsStarFill size={14} fill={`yellow`}/>) : stars >= number ? (<BsStarHalf size={14} fill={`yellow`}/>) : (<BsStar size={14} fill={`yellow`}/>)
                }
            </span>
        )
    })
  return (
    <div className='flex items-center gap-5'>
        <div className='flex items-center gap-1'>
            {ratingStar}
        </div>
        <p>({reviews} Customer Reviews)</p>
    </div>
  )
}

export default StarsComponent