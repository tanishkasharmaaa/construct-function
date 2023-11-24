function BankAccount(accountNumber, name, type, balance) {
  this.accountNumber = accountNumber;
  this.name = name;
  this.type = type;
  this.balance = balance;

  this.deposit = function (amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`${this.name} Amount Deposited: ${amount}`);
    }
  };

  this.withdraw = function (amount) {
    if (this.balance > amount && amount > 0) {
      this.balance -= amount;
      console.log(`${this.name} Amount withdrawn ${amount}, New balance is ${this.balance}`);
    } else if (this.balance < amount) {
      console.log(`${this.name} Balance is insufficient`);
    }
  };

  this.checkBalance = function () {
    console.log(`${this.name} Total balance is ${this.balance}`);
  };
}

BankAccount.prototype.isActive = function () {
  return this.balance > 0;
};

const account1 = new BankAccount(123456, 'John Doe', 'Savings', 1000);
const account2 = new BankAccount(432454, 'Darven', 'Current', 2000);
const account3 = new BankAccount(23456, 'Andrew Rode', 'Current', 3000);

account1.withdraw(500);
account1.deposit(10000);
account1.checkBalance();

account2.withdraw(1000);
account2.deposit(20000);
account2.checkBalance();

account3.withdraw(500);
account3.deposit(30000);
account3.checkBalance();

console.log(`${account1.name} is ${account1.isActive()}`);
console.log(`${account2.name} is ${account2.isActive()}`);
console.log(`${account3.name} is ${account3.isActive()}`);

function getTotalBalance() {
  let total = 0;
  for (let account of arguments) {
    if (account.isActive()) {
      total += account.balance;
    }
  }
  return total;
}

const totalBalance = getTotalBalance(account1, account2, account3);
console.log(`Total balance of all active accounts: ${totalBalance}`);
