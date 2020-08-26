const store = require("./Store");
const {
  updateUser,
  addNewContact,
  addNewProduct
} = require("./actionCreators");

/* 
  
  Here am dipatching some actions 
  but usually this will come from either an API or from some sort of form

*/

store.dispatch(
  updateUser({
    firstName: "Will",
    lastName: "Smith",
    profile:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTipY8NWhT1hLuL9L6yZgXNLOz8jfPx5B3akA&usqp=CAU",
    email: "example@example.com",
    password: "pass",
    phone: "123-456-7890",
    address: "1409 Cold Canyon Rd, Calabasas, CA"
  })
);
store.dispatch(
  updateUser({
    firstName: "Dwanyne",
    lastName: "Johnson",
    profile:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTjLlMYbqfgOGHjvEWUf3VstywuipoJllvorg&usqp=CAU",
    email: "example@example.com",
    password: "pass",
    phone: "1234567890",
    addres: "Hidden Hills, CA"
  })
);
store.dispatch(
  updateUser({
    firstName: "Elloit",
    lastName: "Anderson",
    profile:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJG75UHPc3jzmCMkBD1MAUGPRfxcSbRktmJQ&usqp=CAU",
    email: "example@example.com",
    password: "pass",
    phone: "123-456-7890",
    address: "Coney Island"
  })
);
store.dispatch(
  updateUser({
    firstName: "Charles",
    lastName: "Elloit",
    profile:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRNA6jrEJHnCQdVbQEqMXAIlrK5aecODS4IwQ&usqp=CAU",
    email: "example@example.com",
    password: "pass",
    phone: "123-456-7890",
    address: "Minneapolis St"
  })
);

//Dis

// store.dispatch(addNewContact({}));
// store.dispatch(addNewContact({}));
// store.dispatch(addNewContact({}));
// store.dispatch(addNewContact({}));

store.dispatch(
  addNewProduct({
    name: "Lenovo ThinkPad 1x",
    saler: "Charles Elloit",
    color: "Black",
    memory: "8GB",
    condition: "New"
  })
);

store.dispatch(
  addNewProduct({
    name: "iPhone 11",
    saler: "Charles Elloit",
    color: "Black",
    memory: "64GB",
    condition: "New"
  })
);

module.exports = store;
