import React, { createContext, useContext, useEffect, useReducer } from "react";
import { AppContext } from "./productContext";
import reducer from "./reducers/filterReducer";

export const FilterContext = createContext();
const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  sorting_value: "disabled",
  filters: {
    text: "",
    category: "all",
    company: "all",
    color: "all",
    maxPrice: 0,
    price: 0,
    minPrice: 0,
  },
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useContext(AppContext);
  const [state, dispatch] = useReducer(reducer, initialState);

  // Grid view setup
  const setGridView = () => {
    return dispatch({ type: "SET_GRIDVIEW" });
  };

  // List view setup
  const setListView = () => {
    return dispatch({ type: "SET_LISTVIEW" });
  };

  // sorting function
  const sorting = (event) => {
    let userValue = event.target.value;
    dispatch({ type: "GET_SORT_VALUE", payload: userValue });
  };

  // update the filter values
  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    return dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, value } });
  };

  // to clear the filters
  const clearFilter = () => {
    dispatch({type: "CLEAR_FILTERS"})
  }

  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "SORTING_PRODUCTS" });
  }, [products, state.sorting_value, state.filters]);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        sorting,
        updateFilterValue,
        clearFilter
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
