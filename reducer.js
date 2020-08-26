const userReducer = require("./userReducer");
const contactReducer = require("./contactReducer");
const productReducer = require("./productReducer");

//CombineReducer
const combineReducer = (prevState, action) => ({
  users: userReducer(prevState.users, action),
  contacts: contactReducer(prevState.contacts, action),
  products: productReducer(prevState.products, action)
});

module.exports = combineReducer;
