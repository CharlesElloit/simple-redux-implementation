//Custom Store import
const CustomStore = require("./customStore");

const combineReducer = require("./reducer");

// Redux library Store import
// import {createStore } from 'redux' //ES6
const createStore = require("redux").createStore; //ES5

// initialState state of our app
const initialState = { users: [], contacts: [], products: [] };

//custom Store instance
const store = new CustomStore(combineReducer, initialState);

//Redux store instance
const Store = createStore(combineReducer, initialState);

module.exports = store;
