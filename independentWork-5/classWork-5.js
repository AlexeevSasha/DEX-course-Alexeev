//#1
// Раскоментировать код и починить ошибку чтобы отработала консоль

// class ClassFirst {
//   constructor(prop1) {
//     this.prop1 = prop1;
//   }
// }

// class ClassSecond extends ClassFirst {
//   constructor(prop1, prop2) {
//     super(prop1);
//     this.prop2 = prop2;
//   }
// }

// class ClassThird extends ClassSecond {
//   constructor(prop1, prop2, prop3) {
//     super(prop1, prop2);
//     this.prop3 = prop3;
//   }
// }

// const instance = new ClassThird("prop1", "prop2", "prop3");
// console.log("PROPS =>", instance.prop1, instance.prop2, instance.prop3);

//#2
// Создать класс со свойствами title и date
// и статическим свойством , которое при вызове
// всегда возвращает новый экземпляр газеты с текущей датой

export class NewsPaper {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }
  static createNewPaper(title) {
    return new NewsPaper(title, new Date().toString());
  }
}

// #3 Создать иерархию классов
// ThirdCalculate -> SecondCalculate -> CalculateBase
// чтобы при вызове метода calculate у Класса ThirdCalculate
// выводилась строка
// ThirdCalculate: 1 SecondCalculate: 2 CalculateBase: 3

class CalculateBase {
  constructor(name) {
    this.count = 0;
    this.name = name;
  }
  calculate() {
    return `${this.name}: ${++this.count}`;
  }
}

class SecondCalculate extends CalculateBase {
  constructor(name, name1) {
    super(name);
    this.name1 = name1;
  }
  calculate() {
    return super.calculate() + ` ${this.name1}: ${++this.count}`;
  }
}

class ThirdCalculate extends SecondCalculate {
  constructor(name, name1, name2) {
    super(name, name1);
    this.name2 = name2;
  }
  calculate() {
    return super.calculate() + ` ${this.name2}: ${++this.count}`;
  }
}

const thirdCalculate = new ThirdCalculate(
  "ThirdCalculate",
  "SecondCalculate",
  "CalculateBase"
);
console.log(thirdCalculate.calculate());

//#4
//написать функцию которая будет вызывать нужный модуль
//по передаваемом типу first или second
// import { moduleFirst } from "./module1";
// import { moduleSecond } from "./module2";

export const callCurrentModule = async (type) => {
  if (type === "first") {
    const { moduleFirst } = await import("./module1.js");
    moduleFirst();
  } else if (type === "second") {
    const { moduleSecond } = await import("./module2.js");
    moduleSecond();
  }
};

//#5 написать функцию
// которая выведет в консоль 'PING'
// передаваемое кол-во раз , раз в секунду

function pinger(num) {
  let pingTimer = setInterval(() => console.log("PING"), 1000);
  setTimeout(() => clearInterval(pingTimer), 1000 * num);
}

pinger(10);
