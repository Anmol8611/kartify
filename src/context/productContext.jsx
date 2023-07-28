import { createContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from './reducers/productReducer'

const AppContext = createContext();
const API = '/api/products'


const AppProvider = ({ children }) => {

  const initialState = {
    isLoading : false,
    isError : false,
    products: [],
    featureProducts: []
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchData = async (url) => {
    dispatch({type: "SET_LOADING"})
   try {
     const response = await axios.get(url)
     const product = await response.data;
     dispatch({type:"SET_API_DATA",payload: product})
   } catch (error) {
    dispatch({type:"API_ERROR"});
   }
  };

  useEffect(()=>{
    fetchData(API)
  },[])


  return (
    <AppContext.Provider value={{...state}}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
