/*global expect, test, it */

const {
  updateUser,
  addNewContact,
  addNewProduct
} = require("../actionCreators");

const {
  UPDATE_USER,
  UPDATE_CONTACT,
  UPDATE_PRODUCT
} = require("../actionTypes");

//Testing updateUser actionCreator
test("Add Contact should return an action", () => {
  expect(addNewContact("1234567890")).toEqual({
    type: UPDATE_CONTACT,
    payload: "1234567890"
  });
});

test("updateUser actionCreator should return an action", () => {
  expect(updateUser({ name: "test name" })).toEqual({
    type: UPDATE_USER,
    payload: {
      name: "test name"
    }
  });
});

test("Add Product should return an action", () => {
  expect(addNewProduct({ name: "laptop", price: "1000" })).toEqual({
    type: UPDATE_PRODUCT,
    payload: {
      name: "laptop",
      price: "1000"
    }
  });
});
