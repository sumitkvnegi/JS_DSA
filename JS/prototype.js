function BankAccount(customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;

    this.deposit = (amount) => {
        this.balance += amount;
    }
}

const jethalal = new BankAccount('Jetha');
const babitaji = new BankAccount('Babita', 6000);

// console.log(jethalal, babitaji)
BankAccount.prototype.deposit = function (amount) {
    this.balance += amount;
}

jethalal.deposit(3000);
babitaji.deposit(3000);
console.log(jethalal, babitaji);
