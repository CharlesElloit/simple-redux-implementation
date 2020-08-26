const { UPDATE_CONTACT, UPDATE_USER } = require("./actionTypes");

//User Reducer
const userReducer = (prevState, action) => {
  switch (action.type) {
    case UPDATE_USER:
      return [...prevState, action.payload];

    default:
      return prevState;
  }
};

module.exports = userReducer;
