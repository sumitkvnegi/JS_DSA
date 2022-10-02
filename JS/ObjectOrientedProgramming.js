function BankAccount(customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;

    this.deposit = (amount) => {
        this.balance += amount;
    }
}

// const raccount = new BankAccount("rakesh", 1000);
// const saccount = new BankAccount("sivanshi");
// raccount.deposit(1000);
// console.log(raccount);
// console.log(saccount);
const accounts = [];
const accountForm = document.querySelector('#accountForm');
const customerName = document.querySelector('#cutomerName');
const balance = document.querySelector('#balance');

const depositForm = document.querySelector('#depositForm');
const accountNumber = document.querySelector('#accountNumber');
const amount = document.querySelector('#amount');

accountForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const account = new BankAccount(customerName.value, +balance.value);
    accounts.push(account);
    console.log(accounts);
})

depositForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const account = accounts.find((account) => account.accountNumber === +accountNumber.value);

    account.deposit(+amount.value);
    console.log(accounts);
})

