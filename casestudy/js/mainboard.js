let displayIncomeTable = document.getElementById("tableIncome");
let displayExpensesTable = document.getElementById("tableExpenses");
let income = new Income();
let expenses = new Expenses();
let balance = new Balance();

income.drawIncomeTable(income.incomeDateArr, income.incomeTitleArr, income.incomeMoneyArr);
expenses.drawExpensesTable(expenses.expensesDateArr, expenses.expensesTitleArr, expenses.expensesMoneyArr);

function addIncome() {
    income.sumIncome = 0;
    if (income.addIncomeDate.value === "" || income.addIncomeTitle.value === "" || income.addIncomeTitle.value === " " || income.addIncomeMoney.value === "") {
        alert("Please Input All Income Info!");
    } else {
        income.incomeDateArr.push(income.addIncomeDate.value);
        income.incomeTitleArr.push(income.addIncomeTitle.value);
        income.incomeMoneyArr.push(parseInt(income.addIncomeMoney.value));
        income.drawIncomeTable(income.incomeDateArr, income.incomeTitleArr, income.incomeMoneyArr);
        income.addIncomeDate.value = "";
        income.addIncomeTitle.value = "";
        income.addIncomeMoney.value = "";
    }
    for (let i = 0; i < income.incomeMoneyArr.length; i++) {
        income.sumIncome += income.incomeMoneyArr[i];
    }
    balance.calculate(+income.sumIncome, +expenses.sumExpenses);
}

function addExpenses() {
    expenses.sumExpenses = 0;
    if (expenses.addExpensesDate.value === "" || expenses.addExpensesTitle.value === "" || expenses.addExpensesTitle.value === " " || expenses.addExpensesMoney.value === "") {
        alert("Please Input All Expense Info!");
    } else {
        expenses.expensesDateArr.push(expenses.addExpensesDate.value);
        expenses.expensesTitleArr.push(expenses.addExpensesTitle.value);
        expenses.expensesMoneyArr.push(parseInt(expenses.addExpensesMoney.value));
        expenses.drawExpensesTable(expenses.expensesDateArr, expenses.expensesTitleArr, expenses.expensesMoneyArr);
        expenses.addExpensesDate.value = "";
        expenses.addExpensesTitle.value = "";
        expenses.addExpensesMoney.value = "";
    }
    for (let i = 0; i < expenses.expensesMoneyArr.length; i++) {
        expenses.sumExpenses += expenses.expensesMoneyArr[i];
    }
    balance.calculate(+income.sumIncome, +expenses.sumExpenses);
}

function editIncome(index) {
    // document.getElementById("name" + i).innerHTML = "<td><input type='text' id=\"changeName" + i + "\" value=\"" + idolArray[i].fullName + "\"/></td>";
    document.getElementById("incomeDate" + index).innerHTML = "<td><input type='date' id=\"changeName" + index + "\" value=\"" + income.incomeDateArr[index] + "\"/></td>";
    income.drawIncomeTable(income.incomeDateArr, income.incomeTitleArr, income.incomeMoneyArr);
}

function deleteIncome(index) {
    let deleteConfirm = confirm("Are you sure about that?!!");
    if (deleteConfirm) {
        income.incomeDateArr.splice(index, 1);
        income.incomeTitleArr.splice(index, 1);
        income.incomeMoneyArr.splice(index, 1);
        alert("You have deleted your income!");
    }
    income.drawIncomeTable(income.incomeDateArr, income.incomeTitleArr, income.incomeMoneyArr);
}

function editExpenses(index) {
    let editTitle = prompt("Edit Your Expense Title: ", expenses.expensesTitleArr[index]);
    let editMoney = prompt("Edit Your Expense Money: ", expenses.expensesMoneyArr[index]);
    expenses.expensesTitleArr[index] = editTitle;
    expenses.expensesMoneyArr[index] = editMoney;
    expenses.drawExpensesTable(expenses.expensesDateArr, expenses.expensesTitleArr, expenses.expensesMoneyArr);
}

function deleteExpenses(index) {
    let deleteConfirm = confirm("Are you sure about that?!!");
    if (deleteConfirm) {
        expenses.expensesDateArr.splice(index, 1);
        expenses.expensesTitleArr.splice(index, 1);
        expenses.expensesMoneyArr.splice(index, 1);
        alert("You Have Deleted Your Expense!");
    }
    expenses.drawExpensesTable(expenses.expensesTitleArr, expenses.expensesMoneyArr);
}
