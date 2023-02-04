import { createStore } from 'redux';

const initialState = {
  products: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_PRODUCTS_SUCCESS':
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;