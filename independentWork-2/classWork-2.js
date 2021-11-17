

export const getUsersAddress = (data) => {
    const newArrFilterStreet = data.filter(el => parseInt(el.address.street))
    const allStreets = newArrFilterStreet.map(el => el.address.street)
    const allUsers = newArrFilterStreet.map(el => el.name)
    return `По адресу ${allStreets.join(', ')} живут  пользователи ${allUsers.join(', ')}`
};


export const getDoubleUserBonuses = (data) => {
    const allUsers = data.map((el) => el.name);
    const arrBonuses = data.map((el) => Object.values(el.userBonuses));
    // через цикл
    // let sumBonuses = 0;
    // for (arr of arrBonuses) {
    //     for(item of arr) {
    //         sumBonuses += item
    //     }
    // }

    // через forEach
    let count = 0;
    arrBonuses.forEach(el => {
        count += el.reduce((acc, item) => acc + item, 0)
    });
    return `Пользователи ${allUsers.join(", ")} получат соответственно ${count * 2} бонусов`;
};

