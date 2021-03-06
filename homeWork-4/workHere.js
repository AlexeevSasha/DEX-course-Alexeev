//TODO: Напишите функцию счётчик вызовов, должна принимать название и функцию, а возвращать функцию
// Выводит в консоль, в момент вызова функции из параметров, кол-во вызовов
export const counter = (name, func) => {
    let count = 0;
    return function () {
        console.log(`${name}:`, ++count);
        return func.call(this);
    };
};

//TODO: Напишите функцию логгер, должна принимать название и функцию, а возвращать функцию
// Выводит в консоль, в момент вызова функции из параметров, её параметры результат и название
export const logger = (name, func) => {
    return function (...args) {
        console.log(`Парметры ${name}:`, ...args);
        return func.call(this);
    };
};

//TODO: Напишите функцию каррирования, должна принимать функцию, а возвращать функцию
// Каррирование – это трансформация функций таким образом, чтобы они принимали аргументы не как f(a, b, c), а как f(a)(b)(c)
// Должна работать для любого кол-ва аргументов

export const curry = (func) => {
    return function funCurr(...arg) {
        if (func.length === arg.length) {
            return func.bind(this)(...arg);
        } else {
            return (...arg2) => funCurr.call(this, ...arg, ...arg2);
        }
    };
};