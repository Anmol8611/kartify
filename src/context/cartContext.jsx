import { createContext, useEffect, useReducer } from "react";
import reducer from "./reducers/cartReducer";

const CartContext = createContext();

const getLocalCartData = () => {
  let localCartData = localStorage.getItem("KartifyCart");
  if (!localCartData || localCartData === "[]") {
    return [];
  } else {
    return JSON.parse(localCartData);
  }
};

getLocalCartData();

const initialState = {
  cart: getLocalCartData(),
  total_item: "",
  total_amount: "",
  shipping_fee: 500,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // to add an item to cart
  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };

  // to remove an item from cart
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  //   to clear the cartpage
  const clearCart = () => {
    dispatch({type: "CLEAR_CART"})
  };

  // increament/decreament function
  const setIncrease = (id) => {
    dispatch({type: "INCREASE_AMOUNT", payload : id})
  }
  const setDecrease = (id) => {
    dispatch({type:"DECREASE_AMOUNT", payload : id})
  }

  // to add the data in localStorage
  useEffect(() => {
    // dispatch({type: "CART_TOTAL_ITEM"});
    // dispatch({type:"CART_TOTAL_AMOUNT"});
    dispatch({type: "CART_TOTAL"})
    localStorage.setItem("KartifyCart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider value={{ ...state, addToCart, removeItem, clearCart, setDecrease, setIncrease }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
