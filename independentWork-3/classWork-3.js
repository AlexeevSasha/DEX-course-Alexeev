
// Создать функцию обёртку
// которая будет принимать количество аргументов
// и считать сумму передаваемых чисел , после того как кол-во аргументов
// будет равнятся передаваемому значению3.

function funcСurryingCount(num) {
  return function funcСurryingArgs(...args) {
    if (args.length >= num) {
      return args.slice(0, 3).reduce((acc, item) => acc + item, 0);
    } else {
      return (...args2) => funcСurryingArgs(...args, ...args2);
    }
  };
}

const funcCurrent = funcСurryingCount(3);

console.log("funcCurrent(1,3,4) ", funcCurrent(1, 3, 4));
console.log("funcCurrent(1,3)(4) ", funcCurrent(1, 3)(4));
console.log("funcCurrent(1)(3,4) ", funcCurrent(1)(3, 4));
console.log("funcCurrent(1)(3)(4) ", funcCurrent(1)(3)(4));

// const func1 = () => {
//   console.log(func2());
// };

// const func2 = () => {
//   console.trace();
//   return "func2!!!!!!!";
// };

// func1();
