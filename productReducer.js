const { UPDATE_PRODUCT } = require("./actionTypes");

const productReducer = (prevState, action) => {
  switch (action.type) {
    case UPDATE_PRODUCT:
      return [...prevState, action.payload];

    default:
      return prevState;
  }
};

module.exports = productReducer;
