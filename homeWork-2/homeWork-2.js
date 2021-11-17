export const sum = (firstValue, secondValue) => {
    //TODO: Должны складываться только строки и числа
    // Постарайтесь сложить как можно больше пар и обойти NaN случаи

    // получаем переменные строки или числа
    const validFirstValue = typeof firstValue == 'number' || typeof firstValue == 'string';
    const validSecondValue = typeof secondValue == 'number' || typeof secondValue == 'string';
    // получием в переменные результат Number.isNaN
    const isNaNFirstValue = Number.isNaN(parseInt(firstValue));
    const isNaNSecondValue = Number.isNaN(parseInt(secondValue));

    // если оба аргумента не являются числом или строкой
    if (!validFirstValue && !validSecondValue) return 0;

    // Если один из аргументов не является строкой или числом, то мы проверяем другой аргумент является ли он isNaN и если нет, то выводим его, иначе 0
    if (!validFirstValue) return !isNaNSecondValue ? parseInt(secondValue) : 0
    if (!validSecondValue) return !isNaNFirstValue ? parseInt(firstValue) : 0


    // если аргументы являются числами или стркоми, то выводим результат. Так же если нам придёт строка "21,2" то меняем запятую на точку
    if (!isNaNFirstValue && !isNaNSecondValue) {

        if (typeof firstValue == 'string') {
            // если к нам придёт строка типа "21,3" , меняем запятую на точку
            return parseFloat(firstValue.replace(',', '.')) + parseInt(secondValue)
        }

        if (typeof secondValue == 'string') {
            return parseInt(firstValue) + parseFloat(secondValue.replace(',', '.'))
        }

        return parseInt(firstValue) + parseInt(secondValue)
    }

    // если оба аргумента являются NaN
    if (isNaNFirstValue && isNaNSecondValue) return 0

    // если один из аргументов будет NaN, то выводим другой
    if (isNaNFirstValue) return parseInt(secondValue)
    if (isNaNSecondValue) return parseInt(firstValue)
};

export const showPrice = (price, discount) => {
    //TODO: Привести цену к виду: 10.00 р.
    // округлять до копеек в сторону магазина
    const sumDiscounted = price - (price * discount) / 100;
    // округляем в большую сторону
    const discountedPrice = Math.ceil(sumDiscounted * 10) / 10;

    if (discountedPrice.toFixed(2) > 1) {
        return `${discountedPrice.toFixed(2)} р.`
    } else return `${discountedPrice.toFixed(2)} к.`

};


export const findSuccess = (bankResponse) => {
    //TODO: Проверьте что в строке есть 'Success' без учёта регистра
    return bankResponse.toLowerCase().includes("Success".toLowerCase()) ? "Yes" : "No";
};

export const dateToString = (date) => {
    // получаем даты
    const newDate = new Date(date)
    const currentDate = new Date();

    // поулчаем сумму Года / месяца / дня
    const sumcurrentDate = currentDate.getFullYear() + currentDate.getMonth() + currentDate.getDate();
    const sumNewDate = newDate.getFullYear() + newDate.getMonth() + newDate.getDate();

    // сравниваем
    if (sumcurrentDate == sumNewDate) return 'Сегодня'
    if (sumcurrentDate == sumNewDate - 1) return 'Завтра'
    if (sumcurrentDate == sumNewDate + 1) return 'Вчера'

    // иначе выводим дату в формате год:месяц:день
    return `${newDate.getFullYear()}:${newDate.getMonth() + 1}:${newDate.getDate()}`
};

export const sort = (arr) => {
    // первый вариант, но тут ёж получается последним элементом
    //  return arr.sort((a,b) => {
    //     a = a.toLowerCase();
    //     b = b.toLowerCase();
    //     return  a > b ? 1 : -1
    //  })

    // Прочитал про интернационализация в JavaScript и воспользовался объектом Intl.Collator
    let collator = new Intl.Collator()
    return arr.sort((a, b) => collator.compare(a, b));
};

