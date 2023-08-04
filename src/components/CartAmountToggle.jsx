import React from 'react'

const CartAmountToggle = ({amount , setDecrease, setIncrease}) => {
  return (
    <div>
        <div className='flex items-center gap-5 my-4'>
            <button className='text-xl font-bold hover:text-sky-400 active:text-white bg-black rounded-md h-10 w-10' onClick={()=>setDecrease()}>-</button>
            <div className='text-yellow-400 font-bold text-lg'>{amount}</div>
            <button className='text-xl font-bold hover:text-sky-400 active:text-white bg-black rounded-md h-10 w-10' onClick={()=>setIncrease()}>+</button>
        </div>
    </div>
  )
}

export default CartAmountToggle