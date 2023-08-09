import React, { useContext, useState } from "react";
import { BsCheck } from "react-icons/bs";
import CartAmountToggle from "./CartAmountToggle";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import { CartContext } from "../context/cartContext";

const AddToCart = ({ product }) => {
  const { id, colors, stock } = product;
  const [color, setColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  const { addToCart } = useContext(CartContext);

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };

  return (
    <div>
      {/* Color selection */}
      <div className='flex items-center gap-2 bg-black  backdrop-filter backdrop-blur-lg w-fit py-[6px] px-3 rounded text-slate-200'>
        <p>Colors : </p>
        {colors?.map((curColor, index) => (
          <button
            onClick={() => setColor(curColor)}
            className={
              color === curColor
                ? `opacity-100 rounded-full h-4 w-4 hover:opacity-90`
                : `opacity-50 rounded-full h-4 w-4 hover:opacity-90`
            }
            key={index}
            style={{
              backgroundColor: curColor,
            }}
          >
            {color === curColor ? <BsCheck fill='white' /> : null}
          </button>
        ))}
      </div>

      {/* Add to Cart */}
      <CartAmountToggle
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />
      <div className="flex items-center gap-10">
        <div onClick={() => addToCart(id, color, amount, product)}>
          <Button text='Add to cart' />
        </div>
        <NavLink to='/cart'>
          <Button text='Go To Cart'/>
        </NavLink>
      </div>
    </div>
  );
};

export default AddToCart;
