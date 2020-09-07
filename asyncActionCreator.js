const { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL } from './actionTypes';

const productList = () => async dispatch => {
   try {
     dispatch({type: PRODUCT_LIST_REQUEST });
     const { results } = await fetch('https://localhost:8080/api/products');
     dispatch({ type: PRODUCT_LIST_SUCCESS, payload: results})
   }catch(error) {
     dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message })
   }
}

modules.export = productList;
