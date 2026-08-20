// Initial Values
let balance = 50000;
let totalDeposit = 0;
let totalWithdraw = 0;

// Get HTML Elements
const balanceText = document.getElementById("balance");
const balanceCard = document.getElementById("totalBalance");
const depositCard = document.getElementById("totalDeposit");
const withdrawCard = document.getElementById("totalWithdraw");
const amount = document.getElementById("amount");
const history = document.getElementById("historyList");

// Update Balance & Cards
function updateBalance() {

    balanceText.innerHTML = "₹" + balance;
    balanceCard.innerHTML = "₹" + balance;
    depositCard.innerHTML = "₹" + totalDeposit;
    withdrawCard.innerHTML = "₹" + totalWithdraw;

}

// Add Transaction History
function addHistory(message) {

    let li = document.createElement("li");

    li.innerHTML = message;

    history.prepend(li);

}

// Deposit Function
function deposit() {

    let money = Number(amount.value);

    if (money <= 0 || isNaN(money)) {

        alert("Please enter a valid amount.");

        return;

    }

    balance += money;
    totalDeposit += money;

    updateBalance();

    addHistory("🟢 Deposited ₹" + money);

    alert("₹" + money + " deposited successfully.");

    amount.value = "";

}

// Withdraw Function
function withdraw() {

    let money = Number(amount.value);

    if (money <= 0 || isNaN(money)) {

        alert("Please enter a valid amount.");

        return;

    }

    if (money > balance) {

        alert("Insufficient Balance!");

        return;

    }

    balance -= money;
    totalWithdraw += money;

    updateBalance();

    addHistory("🔴 Withdrawn ₹" + money);

    alert("₹" + money + " withdrawn successfully.");

    amount.value = "";

}

// Check Balance
function checkBalance() {

    alert("Current Balance: ₹" + balance);

    addHistory("🔵 Balance Checked (₹" + balance + ")");

}

// Reset Account
function resetAccount() {

    balance = 50000;
    totalDeposit = 0;
    totalWithdraw = 0;

    updateBalance();

    history.innerHTML = `
        <li>🏦 Welcome to ABC Digital Bank</li>
    `;

    amount.value = "";

    alert("Account has been reset.");

}

// Load Initial Values
updateBalance();