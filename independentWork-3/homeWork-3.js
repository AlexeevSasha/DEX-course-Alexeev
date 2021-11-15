export const processCartData = (cartData) => {
  //TODO: Нужно добавить поле discount(oldPrice - price)
  // убрать поле oldPrice
  cartData.forEach(el => {
    if (el.oldPrice) {
      const discountAmount = el.oldPrice - el.price;
      if (discountAmount > 0) el.discount = discountAmount;
      delete el.oldPrice;
    }
  })
  return cartData;
};

export const makeCartItemCopy = (cartItem) => {
  //TODO: сделать копию элемента "Пицца с анчоусами"
  // После увеличить кол-во добавленного ингредиента
  const filterObjPizza = cartItem.find(el => el.name.includes('Пицца с анчоусами'))
  // const copyObjPizza = JSON.parse(JSON.stringify(cartItem));

  function createCopyObj(obj) {
    if (!obj) return obj;

    let typeObj;
    const copyObj = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
      typeObj = obj[key];
      copyObj[key] = (typeof typeObj === "object") ? createCopyObj(typeObj) : typeObj;
    }
    return copyObj;
  }

  const copyObjPizza = createCopyObj(filterObjPizza)
  copyObjPizza.addedIngredients[0].count += 1;
  return copyObjPizza
};

export const calcSum = (cartData) => {
  //TODO: посчитать суммы по типам товаров и их цены
  const result = {}

  cartData.forEach(el => {
    const { type, price, count } = el;

    if (!result[type]) {

      result[type] = {
        'count': count,
        'sum': price * count,
      }

    } else {

      result[type].count += count;
      result[type].sum += price * count;
    }
  });

  let sumTotal = 0;
  let countTotal = 0;
  Object.values(result).forEach((item) => {
    const { count, sum } = item;
    countTotal += count;
    sumTotal += sum
  })

  return Object.assign({ total: { count: countTotal, sum: sumTotal } }, result)

};

export const getCartItemsByDate = (cartData, date) => {
  //TODO: выбрать покупки сделанные за выбранную дату
  if (!date) return cartData;
  const inputDate = new Date(date)
  inputDate.setHours(0, 0, 0, 0);

  return cartData.filter(el => {
    const elementDate = new Date(el.date)
    elementDate.setHours(0, 0, 0, 0);
    return Date.parse(inputDate) === Date.parse(elementDate)
  })
};

export const repeatOrder = (cartData, date) => {
  //TODO: нужно повторить заказ за выбранную дату
  // дублиовать соответствующие элементы
  // поставить в начало спиcка
  // дату текущую
  // поменять id на уникальный
  if (!date) return;
  const doubleElements = getCartItemsByDate(cartData, date);
  if (doubleElements.length === 0) return;
  doubleElements.forEach(el => {
    // если нужно глубокое копирование, можно вынести функцию globalCopyObj и её использовать
    let newObj = { ...el }
    newObj.date = new Date().toISOString();
    newObj.id = Math.floor(Math.random() * Date.now().toString().slice(-4))
    cartData.unshift(newObj)
  })
  return cartData;
};

export const addItem = (cartData, item) => {
  //TODO: увеличить кол-во товара в полученном элементе
  item.count += 1
  return cartData;
};

export const checkPromo = (cartData) => {
  //TODO: нужно проверить корзина подходит под правила промоакции
  // проверить что суммарно в корзине больше 1000р
  // что есть пункт больше чем на 500р
  // что нет скидочных товаров
  const result = calcSum(cartData);
  const { total: { sum } } = result;

  const notDiscounted = cartData.filter((el) => el.discount);

  return {
    total: sum > 1000 ? true : false,
    oneBigPosition: cartData.find(({ price, count }) => price * count > 500),
    notDiscounted: notDiscounted.length !== 0 ? false : true
  };
};


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










