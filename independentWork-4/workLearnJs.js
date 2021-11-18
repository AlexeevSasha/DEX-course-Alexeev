// Можно ли "перевыполнить" промис?
let promise = new Promise(function (resolve, reject) {
    resolve(1);

    setTimeout(() => resolve(2), 1000);
});
promise.then(alert);
// нет, он учитывает только первый вызов, т.е resolve(1)

// Задержка на промисах
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
delay(3000).then(() => alert('выполнилось через 3 секунды'));

//Перепишите, используя async/await
async function loadJson(url) {
    let response = await fetch(url);
    if (response.status == 200) {
        let json = await response.json();
        return json;
    }
    throw new Error(response.status);
}
loadJson('no-such-user.json')
    .catch(alert);

//Вызовите async–функцию из "обычной"
async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return 10;
}

function f() {
    wait().then(result => alert(result));
}
f();