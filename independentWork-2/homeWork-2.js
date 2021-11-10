export const sum = (firstValue, secondValue) => {
    //TODO: Должны складываться только строки и числа
    // Постарайтесь сложить как можно больше пар и обойти NaN случаи

    const valid = (typeof firstValue == 'number' || typeof firstValue == 'string') && (typeof secondValue == 'number' || typeof secondValue == 'string')
    // проверяем, чтобы аргументы были только number или string
    if (!valid) return;

    // проверка на isNaN, но сначала делаем число из аргументов
    if (!isNaN(parseInt(firstValue)) && !isNaN(parseInt(secondValue))) {

        if (typeof firstValue == 'string') {
            // если к нам придёт строка типа "21,3" , меняем запятую на точку
            return parseFloat(firstValue.replace(',', '.')) + parseInt(secondValue)
        }

        if (typeof secondValue == 'string') {
            return parseInt(firstValue) + parseFloat(secondValue.replace(',', '.'))
        }

        return parseInt(firstValue) + parseInt(secondValue)
    }
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

