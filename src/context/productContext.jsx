import { createContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from './reducers/productReducer'

const AppContext = createContext();
// const API = '/api/products'
const API = `https://api.pujakaitem.com/api/products`


const AppProvider = ({ children }) => {

  const initialState = {
    isLoading : false,
    isError : false,
    products: [],
    featureProducts: [],
    isSingleLoading : false,
    singleProduct: {}
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  // all products data fetched
  const fetchData = async (url) => {
    dispatch({type: "SET_LOADING"})
   try {
     const response = await axios.get(url)
     const product = await response.data;
     dispatch({type:"SET_API_DATA", payload: product})
   } catch (error) {
    dispatch({type:"API_ERROR"});
   }
  };


  // single product data fetched
  const fetchSingleProduct = async (url) => {
    dispatch({type: "SET_SINGLE_LOADING"})
    try {
      const response = await axios.get(url)
      const singleProduct = await response.data;
      dispatch({type:`SET_SINGLE_PRODUCT`, payload: singleProduct})
    } catch (error) {
      dispatch({type:`SET_SINGLE_ERROR`})
    }
  }


  useEffect(()=>{
    fetchData(API)
  },[])


  return (
    <AppContext.Provider value={{...state, fetchSingleProduct}}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
