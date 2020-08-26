//Importing ActionTypes
const {
  UPDATE_CONTACT,
  UPDATE_USER,
  UPDATE_PRODUCT
} = require("./actionTypes");

// Action Creators
exports.updateUser = update => ({
  type: UPDATE_USER,
  payload: update
});

exports.addNewContact = update => ({
  type: UPDATE_CONTACT,
  payload: update
});

exports.addNewProduct = update => ({
  type: UPDATE_PRODUCT,
  payload: update
});
