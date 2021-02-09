import {
  ADD_PRODUCT_BASKET,
  DECREASE_QUANTITY,
  GET_NUMBERS_BASKET,
  INCREASE_QUANTITY,
  CLEAR_PRODUCT,
} from '../actions/types';

const initialState = {
  basketNumber: 0,
  cartCost: 0,
  products: {
    greyHoodie: {
      name: 'Grey Tshirt',
      tagName: 'greyHoodie',
      price: 999,
      numbers: 0,
      inCart: false,
    },
    blackHoodie: {
      name: 'Black Tshirt',
      tagName: 'blackHoodie',
      price: 999,
      numbers: 0,
      inCart: false,
    },
    blueHoodie: {
      name: 'Blue Tshirt',
      tagName: 'blueHoodie',
      price: 999,
      numbers: 0,
      inCart: false,
    },
    marvelHoodie: {
      name: 'Marvel Tshirt',
      tagName: 'marvelHoodie',
      price: 999,
      numbers: 0,
      inCart: false,
    },
  },
};

export default (state = initialState, action) => {
  let productSelected = '';
  switch (action.type) {
    case ADD_PRODUCT_BASKET:
      productSelected = { ...state.products[action.payload] };

      productSelected.numbers += 1;
      productSelected.inCart = true;
      console.log(productSelected);
      return {
        ...state,
        basketNumber: state.basketNumber + 1,
        cartCost: state.cartCost + state.products[action.payload].price,
        products: {
          ...state.products,
          [action.payload]: productSelected,
        },
      };
    case GET_NUMBERS_BASKET:
      return {
        ...state,
      };

    case INCREASE_QUANTITY:
      productSelected = { ...state.products[action.payload] };
      productSelected.numbers += 1;

      return {
        ...state,
        basketNumber: state.basketNumber + 1,
        cartCost: state.cartCost + state.products[action.payload].price,
        products: {
          ...state.products,
          [action.payload]: productSelected,
        },
      };

    case DECREASE_QUANTITY:
      productSelected = { ...state.products[action.payload] };
      let newCartCost = 0;
      let newBasketNumber = 0;
      if (productSelected.numbers === 0) {
        productSelected.numbers = 0;
        newBasketNumber = state.basketNumber;
      } else {
        productSelected.numbers -= 1;
        newCartCost = state.cartCost - state.products[action.payload].price;
        newBasketNumber = state.basketNumber - 1;
      }
      return {
        ...state,
        basketNumber: newBasketNumber,
        cartCost: newCartCost,
        products: {
          ...state.products,
          [action.payload]: productSelected,
        },
      };

    case CLEAR_PRODUCT:
      productSelected = { ...state.products[action.payload] };
      let numbersBackup = productSelected.numbers;
      productSelected.numbers = 0;
      productSelected.inCart = false;

      return {
        ...state,
        basketNumber: state.basketNumber - numbersBackup,
        cartCost: state.cartCost - numbersBackup * productSelected.price,
        products: {
          ...state.products,
          [action.payload]: productSelected,
        },
      };

    default:
      return state;
  }
};
