import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <App />
  </div>
);

let numbers = [5, 12, 56, 34, 123, 2]
//map
let newNumber1 = numbers.map(function(x){
  return x*2;
});
console.log(newNumber1);
//filter
let newNumber2 = numbers.filter(function(num){
  return num > 10;
});
console.log(newNumber2);
//reduce
let newNumber4 = numbers.reduce(function(num1, num2){
  return num1 + num2;
});
console.log(newNumber4);
//find
let newNumber5 = numbers.find(function(num){
  return num > 10;
});
console.log(newNumber5);
//findIndex
let newNumber6 = numbers.find(function(num){
  return num > 10;
});
console.log(newNumber6);
