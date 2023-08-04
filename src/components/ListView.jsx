import React from 'react'
import ListCard from './ListCard'

const ListView = ({products}) => {
  return (
    <div className='flex flex-col justify-center items-center gap-10 pr-20'>
      {
        products.map((elm)=>(
          <ListCard key={elm.id} items={elm}/>
        ))
      }
    </div>
  )
}

export default ListView