const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      let priceArr = action.payload.map((currElm) => currElm.price);

      // 1st way
      // console.log(Math.max.apply(null, priceArr));

      // 2nd way
      // let maxPrice = priceArr.reduce((initialVal, curVal)=>Math.max(initialVal, curVal),0)
      // console.log(maxPrice);

      // 3rd way
      let maxPrice = Math.max(...priceArr);

      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
        filters: { ...state.filters, maxPrice , price: maxPrice },
      };

    case "SET_GRIDVIEW":
      return {
        ...state,
        grid_view: true,
      };

    case "SET_LISTVIEW":
      return {
        ...state,
        grid_view: false,
      };

    case "GET_SORT_VALUE":
      return {
        ...state,
        sorting_value: action.payload,
      };

    case "SORTING_PRODUCTS":
      let newSortData;
      // let tempSortProducts = [...action.payload];

      const { filter_products, sorting_value } = state;
      let tempSortProducts = [...filter_products];

      const sortingProducts = (a, b) => {
        if (sorting_value === "lowest") {
          return a.price - b.price;
        }

        if (sorting_value === "highest") {
          return b.price - a.price;
        }

        if (sorting_value === "a-z") {
          return a.name.localeCompare(b.name);
        }

        if (sorting_value === "z-a") {
          return b.name.localeCompare(a.name);
        }
      };

      newSortData = tempSortProducts.sort(sortingProducts);

      return {
        ...state,
        filter_products: newSortData,
      };

    case "UPDATE_FILTER_VALUE":
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    case "FILTER_PRODUCTS":
      let { all_products } = state;
      let tempFilterProducts = [...all_products];
      const { text, category, company, color, price } = state.filters;

      if (text) {
        tempFilterProducts = tempFilterProducts.filter((currElm) => {
          return currElm.name.toLowerCase().includes(text);
        });
      }

      if (category !== "all") {
        tempFilterProducts = tempFilterProducts.filter(
          (currElm) => currElm.category.toLowerCase() === category.toLowerCase()
        );
      }

      if (company !== "all") {
        tempFilterProducts = tempFilterProducts.filter(
          (currElm) => currElm.company.toLowerCase() === company.toLowerCase()
        );
      }

      if (color !== "all") {
        tempFilterProducts = tempFilterProducts.filter((currElm) =>
          currElm.colors.includes(color)
        );
      }

      if (price === 0) {
        tempFilterProducts = tempFilterProducts.filter((currElm)=> (
          currElm.price == price
        ))
      } else {
        tempFilterProducts = tempFilterProducts.filter((currElm)=> (
          currElm.price <= price
        ))
      }

      return {
        ...state,
        filter_products: tempFilterProducts,
      };

      case "CLEAR_FILTERS" :
        return {
          ...state,
          filters : {
            ...state.filters,
            text: "",
            category: "all",
            company: "all",
            color: "all",
            maxPrice: 0,
            price: state.filters.maxPrice,
            minPrice: state.filters.minPrice,
          }
        }

    default:
      return state;
  }
};

export default filterReducer;
