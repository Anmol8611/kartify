import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";
import CartItem from "../components/CartItem";
import Button from "../components/Button"
import { useNavigate } from "react-router-dom";
import FormatPrice from "../helpers/FormatPrice";

const Cart = () => {
  const { cart, clearCart, total_price, shipping_fee, total_amount } = useContext(CartContext);
  const navigate = useNavigate()

  if(cart.length === 0) {
    return (
      <section className='min-h-[90vh] flex items-center  justify-center text-white'>
        <div className='flex items-center justify-center bg-slate-900 shadow-black shadow rounded-xl min-w-[80vw] min-h-[50vh] flex-col p-10 my-20 backdrop-filter backdrop-blur-md bg-opacity-80'>
            <h1 className="tracking-widest text-5xl font-bold animate-bounce text-yellow-400">Your Cart is Empty !</h1>
            <div onClick={()=>navigate("/products")}>
            <Button text="Click to Shop"/>
            </div>
        </div>
      </section>
    )
  } else {
    return (
      <section className='min-h-[90vh] flex flex-col items-center justify-center text-white'>
        <div
          id='container'
          className='flex items-center gap-10 bg-slate-900 shadow-black shadow rounded-xl min-w-[80vw] min-h-[50vh] flex-col p-10 my-20 backdrop-filter backdrop-blur-md bg-opacity-80'
        >
          {/* top section */}
          <div className='flex h-10 w-full items-center border-b-2 pb-8 tracking-wider border-white'>
            <h2 className='text-xl font-bold'>Items In Your Cart</h2>
          </div>
  
          {/* Cart Item Section */}
          <div className='w-full flex flex-col gap-5 items-center border-b-2 pb-8'>
            {cart.map((curElm) => {
              return <CartItem key={curElm.id} {...curElm} />;
            })}
          </div>
  
          <div className="w-full flex justify-between">
            <div onClick={()=>navigate("/products")}>
              <Button text='Continue Shopping' />
            </div>
            <div onClick={clearCart}>
              <Button text='Clear cart' />
            </div>
          </div>
        </div>
        <div className="flex mr-48 ml-auto bg-slate-900 shadow-black shadow rounded-xl flex-col py-12 px-16 mb-20 backdrop-filter backdrop-blur-md bg-opacity-70">
          <div className="flex flex-col gap-4">
            <div className="flex gap-2">
              <p>Subtotal : </p>
              <p className="text-green-600 font-medium"><FormatPrice price={total_amount}/></p>
            </div>
            <div className="flex gap-2">
              <p>Shipping Charges : </p>
              <p className="text-green-600 font-medium"><FormatPrice price={shipping_fee}/></p>
            </div>
            <hr />
            <div className="flex gap-2">
              <p>Total amount :</p>
              <p className="text-green-600 font-medium"><FormatPrice price={shipping_fee + total_amount} /></p>
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default Cart;
