
// Домашка с learn.js


function checkAge(age) {
  return age > 18 ? true : confirm('Родители разрешили?');
}

function min(a, b) {
  return a < b ? b : a
}

function pow(x, n) {
  return Math.pow(x, n)
}

const ask = (question, yes, no) => confirm(question) ? yes() : no()
ask(
  "Вы согласны?",
  () => alert("Вы согласились."),
  () => alert("Вы отменили выполнение.")
);


let user = {
  name: "John",
  years: 30
};
let { name, years, isAdmin = false } = user;

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
function topSalary(salaries) {
  const sortArr = Object.entries(salaries).sort((a, b) => b[1] - a[1]);
  return sortArr[0][0];
}


// декораторы, пытался сам сделать, получилась какая-то хрень  и начал подсматривал в решение от learn
function spy(func) {
  function wrapper(...args) {
    wrapper.calls.push(args);
    return func.apply(this, arguments);
  }
  wrapper.calls = [];
  return wrapper;
}


function delay(f, ms) {
  return function () {
    setTimeout(() => f.apply(this, arguments), ms);
  };
}










