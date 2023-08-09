const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, color, amount, product } = action.payload;

    // Dont repeat the existing product
    let existingProduct = state.cart.find(
      (curElem) => curElem.id === id + color
    );

    if (existingProduct) {
      let updatedProduct = state.cart.map((curElem) => {
        if (curElem.id === id + color) {
          let newAmount = curElem.amount + amount;
          if (newAmount >= curElem.max) {
            newAmount = curElem.max;
          }

          return {
            ...curElem,
            amount: newAmount,
          };
        } else {
          return curElem;
        }
      });

      return {
        ...state,
        cart: updatedProduct,
      };
    } else {
      let cartProduct = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.image[0].url,
        price: product.price,
        max: product.stock,
      };

      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }

  if (action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart.filter(
      (curElem) => curElem.id !== action.payload
    );

    return {
      ...state,
      cart: updatedCart,
    };
  }

  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }

  if (action.type === "INCREASE_AMOUNT") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        let incAmount = curElem.amount + 1;
        if (incAmount >= curElem.max) {
          incAmount = curElem.max;
        }
        return {
          ...curElem,
          amount: incAmount,
        };
      } else {
        return curElem;
      }
    });

    return {
      ...state,
      cart: updatedProduct,
    };
  }

  if (action.type === "DECREASE_AMOUNT") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        let decAmount = curElem.amount - 1;
        if (decAmount <= 1) {
          decAmount = 1;
        }
        return {
          ...curElem,
          amount: decAmount,
        };
      } else {
        return curElem;
      }
    });

    return {
      ...state,
      cart: updatedProduct,
    };
  }

  // if(action.type === "CART_TOTAL_ITEM") {
  //   let updatedItemVal = state.cart.reduce((accum, curElem)=>{
  //     let {amount} = curElem;
  //     accum = accum + amount;
  //     return accum
  //   },0)

  //   return {
  //     ...state,
  //     total_item : updatedItemVal
  //   }
  // }

  // if(action.type === "CART_TOTAL_AMOUNT") {
  //   let updatedTotalAmount = state.cart.reduce((accum, curElem)=>{
  //     let {price, amount} = curElem;
  //     accum = accum + (price*amount);
  //     return accum
  //   },0)
  //   return {
  //     ...state,
  //     total_amount : updatedTotalAmount
  //   }
  // }

  // Combining the total_amount and total_item in one reducer
  if (action.type === "CART_TOTAL") {
    let { total_item, total_amount } = state.cart.reduce(
      (accum, curElem) => {
        let { price, amount } = curElem;
        accum.total_amount += price * amount;
        accum.total_item += amount;

        return accum;
      },
      {
        total_amount: 0,
        total_item: 0,
      }
    );
    return {
      ...state,
      total_amount,
      total_item,
    };
  }

  return state;
};

export default cartReducer;
