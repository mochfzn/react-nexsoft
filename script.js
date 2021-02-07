// let names = ["admin", 2, true];
// names.push("empat");
// console.log(names);
// names.pop();
// console.log(names);
// names.shift();
// console.log(names);
// names.unshift(0);
// console.log(names);

// let user = {
//     name: "admin",
//     age: 21,
//     "add-ress": "Jakarta"
// };

// let user2 = {
//     name: "user",
//     age: 20
// };

// let user3 = {
//     name: "operator",
//     age: 23
// };

// console.log(user.name);
// console.log(user["add-ress"]);

// let users = [user, user2, user3];

// for (let index = 0; index < users.length; index++) {
//     const element = users[index];
//     console.log("element:", element);
// }

// const fn2 = function(params) {
//     console.log("total = ", params);
// }

// const fn5 = () => { }
// const fn6 = _ => { }
// const fn3 = (param1, param2, cb) => {
//     console.log("fn3");
//     const total = param1 + param2;
//     cb(total);
// }

// fn3(1, 2, fn2);

const promiseFn = new Promise((resolve, reject) => {
    //resolve(3);
    //reject("Gegal");

    fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .then(json => resolve(json))
    .catch(() => reject("Gegal"));
});

promiseFn
    .then(value => {
        console.log("value: ", value);
    })
    .catch(err => {
        console.error("Error:", err);
    })
    .finally(() => {
        console.info("finally");
    });

console.time("Promise");

promiseFn.then(value => console.log("value: ", value))
.catch(err => console.error("Error: ", err))
.finally(() => {
    console.info("finally");
    console.timeEnd("Promise");
});

let users2 = [];
users.forEach((value, index) => {
    console.info("value:", value);
    console.warn("index:", index);
    let newData = {
        name: value.name,
        age: value.age,
        gender: value.age >= 21 ? "L" : "P"
    }
    users2.push(newData);
});

console.log("users2:", users2);

const dataFind = users.find(value => value.age >= 21);
console.log("datafind:", dataFind);

const dataFind2 = users.filter(value => value.age >= 21);
console.log("dataFind2:", dataFind2);