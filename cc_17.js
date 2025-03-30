// Task 1: Customer Class
class Customer {
    constructor(name, email) {
      this.name = name;
      this.email = email;
      this.purchaseHistory = [];
      console.log(` New customer created: ${this.name}`);
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
  console.log(` ${customer1.name}'s total spent: $${customer1.getTotalSpent()}`);
  
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
  console.log(` ${rep.name}'s client list:`, rep.clients.map(c => c.name));
  console.log(` ${customer1.name}'s total (via ${rep.name}): $${rep.getClientTotal("Alice")}`);
  
// Task 3: VIPCustomer Class
class VIPCustomer extends Customer {
    constructor(name, email, vipLevel) {
      super(name, email);
      this.vipLevel = vipLevel;
    }
  
    getTotalSpent() {
      const baseTotal = super.getTotalSpent();
      const bonus = baseTotal * 0.1; // 10% bonus
      return baseTotal + bonus;
    }
  }
  
  // Example usage
  const vip = new VIPCustomer("Bob", "bob@example.com", "Platinum");
  vip.addPurchase(600);
  vip.addPurchase(100);
  console.log(`VIP ${vip.name} (${vip.vipLevel}) total with bonus: $${vip.getTotalSpent()}`);
  
  // Task 4: Client Report System
const customer2 = new Customer("Charlie", "charlie@example.com");
customer2.addPurchase(300);
customer2.addPurchase(250);

rep.addClient(vip);
rep.addClient(customer2);

const allClients = rep.clients;

// Total revenue
const totalRevenue = allClients.reduce((sum, c) => sum + c.getTotalSpent(), 0);

// Customers who spent over $500
const highSpenders = allClients.filter(c => c.getTotalSpent() > 500);

// Summary: name + total spent
const customerSummary = allClients.map(c => ({
  name: c.name,
  total: c.getTotalSpent()
}));

//  Logging the report
console.log("Total Revenue: $" + totalRevenue);
console.log(" High Spending Customers:", highSpenders.map(c => c.name));
console.log("Customer Summary:", customerSummary);
