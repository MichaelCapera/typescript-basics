const menu = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 9 },
];
    
    let cashInRegister = 10;
    let nextOrderId = 1;
    let orderQueue:any = [];
    
    function addNewPizza(objectMenu: any) {
    
        menu.push(objectMenu);
    
    }
    
    let objectMenu = { name: "Beef", price: 9 }
    addNewPizza(objectMenu);
    
    console.log('Menu ==>', menu);
    
    function placeOrder(pizzaName: any) {
       const selectedPizza: any = menu.find(pizzaObject => pizzaObject.name === pizzaName);
       cashInRegister += selectedPizza.price;
       const newOrder:any = { id: nextOrderId ++, pizza: selectedPizza, status: "ordered" };
       orderQueue.push(newOrder);
       return newOrder;
    }
    
    function updateOrder(id: any) {
        const order: any = orderQueue.find( (order: any) => order.id === id);
        order.status = "Completed";
        return order;
    
    }
    
    addNewPizza({ name: "Chile", cost: 12 });
    addNewPizza({ name: "Chicken", cost: 11 });
    addNewPizza({ name: "Ranch", cost: 13 });
    
    placeOrder("Ranch");
    updateOrder("1");
    
    console.log("Menu ==>", menu );
    console.log("Cash register ==>", cashInRegister );
    console.log("Order queue ==>", orderQueue );