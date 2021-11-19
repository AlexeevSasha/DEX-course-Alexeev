// const url = "https://jsonplaceholder.typicode.com/todos";
// const requestURl = "https://jsonplaceholder.typicode.com/users";

// console.log("Proparting data...");

// setTimeout(() => {
//   console.log("Request....");
//   const responseData = {
//     server: "aws",
//     port: 8081,
//     status: "working",
//     modifeid: false
//   };
//   setTimeout(() => {
//     responseData.modifeid = true;
//     console.log("Data reveived...", responseData);
//   }, 2000);
// }, 2000);

// const promice = new Promise((resolve, reject) => {
//   console.log("Request....");
//   const responseData = {
//     server: "aws",
//     port: 8081,
//     status: "working",
//     modifeid: false
//   };
//   resolve(responseData);
// });
// promice
//   .then((data) => {
//     setTimeout(() => {
//       data.modifeid = true;
//       console.log("Data reveived...", data);
//     }, 2000);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// function delay(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// delay(3000).then(() => console.log("3сек"));

// const url = "https://jsonplaceholder.typicode.com/todos";

// const fetchData = () => {
//   return delay(3000)
//     .then(() => fetch(url))
//     .then((data) => data.json());
// };

// fetchData().then((data) => console.log(data));

// async function fetchData() {
//   try {
//     await delay(3000);
//     const responce = await fetch(url);
//     const data = await responce.json();

//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// }

// fetchData().then((data) => console.log(data));

const requestURl = "https://jsonplaceholder.typicode.com/users";
let user = {
  name: "Oleg",
  age: 25
};

const getUsers = (method, url) => {
  return fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  }).then((r) => r.json());
};
getUsers("POST", requestURl).then((data) => console.log(data));
