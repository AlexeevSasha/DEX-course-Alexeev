import { compareText } from "./data";

// Написать 2 функции,
// первая обработает ответ от compareText (положительный и отрицательный)
// TODO: первая функция использует then и catch
const getData = (str) => {
  return new Promise((resolve, reject) => {
    compareText(str)
      .then((res) => resolve(res))
      .catch((error) => reject(error));
  });
};

// TODO: вторая использует try и catch
// TODO: Если ответ положительный вывести в консоль: "Success: ..."
// TODO: Если ответ отрицательный вывести в консоль: "Error: ..." (тескт ошибки)
const processingData = async (str) => {
  try {
    const response = await getData(str);
    console.log("Success:", response);
  } catch (error) {
    console.log("Error:", error.message);
  }
};
processingData("короткий текст");
processingData("длинный тексттттттттттт");

// Используя конструкции then catch
// к положительному ответу добавьте " :)"
// к ответу с ошибкой добавьте " :("
// Если длина ответа меньше 20 символов, то нужно добавить "(" или ")" в зависимости от ответа,
// скобочки нужно добавлять пока длинна не станет равна 20
// TODO: на каждое действи должна быть отдельная конструкция then или catch
// Например первый then для добавления " :)", второй для подсчёта количества символов и добавления недостающих
function addStrBrackets(str, brackets) {
  // return str.padEnd(20, brackets)
  for (let i = str.length; i < 20; i++) {
    str += brackets;
  }
  return str;
}
const getResponse = async (str) => {
  return compareText(str)
    .then((res) => `${res} :)`)
    .then((response) => {
      const newRes = response.length < 20 ? addStrBrackets(response, ")") : response;
      console.log(newRes);
    })
    .catch((err) => {
      const error = `${err.message} :(`;
      throw error;
    })
    .catch((error) => {
      const newErr = error.length < 20 ? addStrBrackets(error, "(") : error;
      console.log(newErr);
    });
};

getResponse("короткий текст");
getResponse("Длинный текстттт");

// Написать функцию, которая принимает url и выводит в консоль ответ
// TODO: обработать ошибки и вывести в консоль "Ошибка"
// TODO: ошибка если тстатус меньше 200 и больше 299
const getDataFromAPI = async (url) => {
  try {
    const response = await fetch(url);
    if (response.status < 200 || response.status > 299) {
      throw new Error(`status is ${response.status}`);
    }
    console.log(response);
  } catch (error) {
    console.log("Ошибка:", error.message);
  }
};
getDataFromAPI("https://randomuser.me/api");
getDataFromAPI("https://randomuser123.me/api");
getDataFromAPI("https://randomuser.me/api123");











