import React from 'react'
import Button from './Button'
import FormatPrice from '../helpers/FormatPrice'
import { useNavigate } from 'react-router-dom'

const ListCard = ({items}) => {
    const navigate = useNavigate()
  return (
    <div className='flex items-center gap-10 w-fit bg-slate-900 backdrop-filter backdrop-blur-xl bg-opacity-70 rounded-xl shadow-black shadow'>
        <div>
            <img className='w-96 h-80 object-cover rounded-s-xl' src={`${items.image}`} alt={items.name} />
        </div>
        <div className='max-w-2xl flex flex-col gap-5 items-start text-slate-200 w-fit'>
            <h2 className='font-bold text-xl text-slate-100'>{items.name}</h2>
            <del className='-mt-2 -mb-4'><FormatPrice price={items.price + 2000} /></del>
            <p className='animate-pulse font-semibold text-green-600'><FormatPrice price={items.price}/></p>
            <p className='text-sm font-thin'>{items.description.slice(0,120)} <span onClick={()=>navigate(`/singleproduct/${items.id}`)} className='hover:text-sky-600 active:text-sky-700 text-sky-500 cursor-pointer transition-all'>. . . View Detail</span></p>
            <div onClick={()=>navigate(`/singleproduct/${items.id}`)}>
            <Button text="Product Detail"/>
            </div>
        </div>
    </div>
  )
}

export default ListCard