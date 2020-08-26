/* 
 Am using ES5 cuz am going to run this code using Node
 but you can use ES6 import snytax in your application
*/

const userReducer = require("./userReducer");
const contactReducer = require("./contactReducer");
const productReducer = require("./productReducer");

// import {combineReducer} from 'redux'

//Redux combineReducer
// const reduxCombineReducer = combineReducer({
//   users: userReducer,
//   contacts: contactReducer,
//   products: productReducer,
// })

//Custom CombineReducer
const combineReducer = (prevState, action) => ({
  users: userReducer(prevState.users, action),
  contacts: contactReducer(prevState.contacts, action),
  products: productReducer(prevState.products, action)
});

// exports default reduxCombinReducer as combineReducer;
module.exports = combineReducer;
