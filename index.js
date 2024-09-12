const menu = [
{ name: "Margherita", price: 8 },
{ name: "Pepperoni", price: 10 },
{ name: "Hawaiian", price: 10 },
{ name: "Veggie", price: 9 },
];

const cashInRegister = 10;
const orderQueue = [];

function addNewPizza(objectMenu) {

    menu.push(objectMenu);

}

let objectMenu = { name: "Beef", price: 9 }
addNewPizza(objectMenu);

console.log('Menu ==>', menu);