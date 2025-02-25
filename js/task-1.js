console.log('task-1.js');


  const customer = {
    username: "Mango",
    balance: 24000,
    discount: 0.1,
    orders: ["Burger", "Pizza", "Salad"],
    // Change code below this line
    getBalance() {
      return this.balance;
    },
    getDiscount() {
      return this.discount;
    },
    setDiscount(value) {
      this.discount = value;
    },
    getOrders() {
      return this.orders;
    },
    addOrder(cost, order) {
      this.balance -= cost - cost * this.discount;
      this.orders.push(order);
    },
    // Change code above this line
  };
  

  customer.setDiscount(0.15);
  console.log(customer.getDiscount()); // 0.15
  document.getElementById("task-1/1").innerHTML = customer.getDiscount();
  customer.addOrder(5000, "Steak");
  console.log(customer.getBalance()); // 19750
  document.getElementById("task-1/2").innerHTML = customer.getBalance();
  console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]
  document.getElementById("task-1/3").innerHTML = customer.getOrders();


