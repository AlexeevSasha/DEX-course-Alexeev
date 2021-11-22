// Классы
class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}
// let clock = new Clock({template: 'h:m:s'});
// clock.start();

//Наследование классов
// Ошибка создания экземпляра класса
// Нужно добавить super(name)

//Улучшенные часы
class ExtendedClock extends Clock {
  constructor(options, precision = 1000) {
    super(options);
    this.precision = precision;
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), this.precision);
  }
};
let newClock = new ExtendedClock({template: 'h:m:s'}, 10000);
newClock.start();

