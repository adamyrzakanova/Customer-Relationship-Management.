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
  
  // Task 2: SalesRep Class
class SalesRep {
    constructor(name) {
      this.name = name;
      this.clients = [];
    }
  
    addClient(customer) {
      this.clients.push(customer);
    }
  
    getClientTotal(name) {
      const client = this.clients.find((c) => c.name === name);
      return client ? client.getTotalSpent() : 0;
    }
  }
  
  // Example usage
  const rep = new SalesRep("John");
  rep.addClient(customer1);
  console.log(`📋 ${rep.name}'s client list:`, rep.clients.map(c => c.name));
  console.log(`🔍 ${customer1.name}'s total (via ${rep.name}): $${rep.getClientTotal("Alice")}`);
  