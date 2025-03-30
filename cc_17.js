// Task 1: Customer Class
class Customer {
    constructor(name, email) {
      this.name = name;
      this.email = email;
      this.purchaseHistory = [];
      console.log(`🧾 New customer created: ${this.name}`);
    }
  
    addPurchase(amount) {
      this.purchaseHistory.push(amount);
    }
  
    getTotalSpent() {
      return this.purchaseHistory.reduce((acc, val) => acc + val, 0);
    }
  }
  
  // Example usage
  const customer1 = new Customer("Alice", "alice@example.com");
  customer1.addPurchase(200);
  customer1.addPurchase(150);
  console.log(`💰 ${customer1.name}'s total spent: $${customer1.getTotalSpent()}`);
  