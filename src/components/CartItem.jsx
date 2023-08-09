import React, { useContext } from "react";
import FormatPrice from '../helpers/FormatPrice'
import CartAmountToggle from "./CartAmountToggle";
import { FaTrash } from "react-icons/fa";
import { CartContext } from "../context/cartContext";

const CartItem = ({ id, name, image, color, price, amount }) => {

  const {removeItem, setIncrease, setDecrease} = useContext(CartContext)


  return (
    <div className='flex items-center justify-between w-full'>
      {/* image */}
      <div className="flex items-center gap-5">
        <div>
          <figure>
            <img
              className='h-24 w-32 object-cover rounded-lg'
              src={image}
              alt={id}
            />
          </figure>
        </div>
        <div>
          <p>{name}</p>
          <div className='flex items-center'>
            <p>color: </p>
            <div
              style={{
                backgroundColor: color,
              }}
              className='h-4 w-4 rounded-full'
            ></div>
          </div>
        </div>
      </div>

      {/* price */}
      <div>
        <p>
          <FormatPrice price={price}/>
        </p>
      </div>

      {/* Quantity  */}
      <CartAmountToggle
        amount={amount}
        setDecrease={() => setDecrease(id)}
        setIncrease={() => setIncrease(id)}
      />

      {/* SubTotal */}
      <div>
        <p>
          <FormatPrice price={price * amount}/>
        </p>
      </div>

      {/* remove */}
      <div>
        <FaTrash className="hover:fill-red-400 active:fill-red-700 transition-all cursor-pointer" onClick={()=>removeItem(id)}/>
      </div>


    </div>
  );
};

export default CartItem;
