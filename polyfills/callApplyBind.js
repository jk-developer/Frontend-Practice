import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello JavaScript!</h1>
`;

//////////-- call, bind , apply - roadside coder ---///////

const car1 = {
  color: "red",
  company: "Ferrari",
};

const purchaseCar = function (currency, price) {
  console.log(
    `I have purchased ${this.color} - ${this.company} for ${price}${currency}`
  );
};

// call method
// purchaseCar.call(car1, "$", 12412);

// call polyfill

if (!Function.prototype.myCall) {
  Function.prototype.myCall = function (context = {}, ...args) {
    // ...args is rest parameter as we don't know how many arguements user send
    if (typeof this != "function") {
      // this denotes purchaseCar
      return new Error(`${this} is not callable`);
    }

    context.fn = this; // this denotes purchaseCar, context is car1
    console.log("context -> ", context);

    context.fn(...args);
  };
}

// purchaseCar.myCall(car1, "$", 12412); // takes a context and arguements

// apply polyfill - only slight difference here args is an array

if (!Function.prototype.myApply) {
  Function.prototype.myApply = function (context = {}, argsArray = []) {
    // ...args is rest parameter as we don't know how many arguements user send
    if (typeof this != "function") {
      // this denotes purchaseCar
      return new Error(`${this} is not callable`);
    }

    if (!Array.isArray(argsArray)) {
      return new Error(`${argsArray} is not array like`);
    }

    context.fn = this; // this denotes purchaseCar function, context is car1 (object)
    // setting above method purchaseCar inside car1 object
    console.log("context -> ", context);

    context.fn(...argsArray); // -> means car1.purchaseCar(...argsArray)
  };
}

// purchaseCar.myApply(car1, ["$", 12412]); // takes context and args in array

// bind polyfill  -> takes context

if (!Function.prototype.myBind) {
  Function.prototype.myBind = function (context = {}, ...args) {
    // ...args is rest parameter as we don't know how many arguements user send
    if (typeof this != "function") {
      // this denotes purchaseCar
      return new Error(`${this} is not callable`);
    }

    context.fn = this; // this denotes purchaseCar, context is car1
    console.log("context -> ", context);

    // context.fn(...argsArray); // don't call immediately, rather return a function

    return function (...newArgs) {
      // newArgs represent price 934573
      return context.fn(...args, ...newArgs); // represent currency
    };
  };
}

const myRedFun = purchaseCar.myBind(car1, "$");

myRedFun(934573);
