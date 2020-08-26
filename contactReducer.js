const { UPDATE_CONTACT } = require("./actionTypes");

//Contact Reducer
const contactReducer = (prevState, action) => {
  if (action.type === UPDATE_CONTACT) return [...prevState, action.payload];
  return prevState;
};

module.exports = contactReducer;
