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
    income.sumIncome = 0;
    let editDate = prompt("Edit Your Income Date: ", income.incomeDateArr[index]);
    let editTitle = prompt("Edit Your Income Title: ", income.incomeTitleArr[index]);
    let editMoney = prompt("Edit Your Income Money: ", income.incomeMoneyArr[index]);
    income.incomeDateArr[index] = editDate;
    income.incomeTitleArr[index] = editTitle;
    income.incomeMoneyArr[index] = editMoney;
    income.drawIncomeTable(income.incomeDateArr, income.incomeTitleArr, income.incomeMoneyArr);
    for (let i = 0; i < income.incomeMoneyArr.length; i++) {
        income.sumIncome += income.incomeMoneyArr[i];
    }
    balance.calculate(+income.sumIncome, +expenses.sumExpenses);
}

function deleteIncome(index) {
    income.sumIncome = 0;
    let deleteConfirm = confirm("Are you sure about that?!!");
    if (deleteConfirm) {
        income.incomeDateArr.splice(index, 1);
        income.incomeTitleArr.splice(index, 1);
        income.incomeMoneyArr.splice(index, 1);
        alert("You have deleted your income!");
    }
    for (let i = 0; i < income.incomeMoneyArr.length; i++) {
        income.sumIncome += income.incomeMoneyArr[i];
    }
    balance.calculate(+income.sumIncome, +expenses.sumExpenses);
    income.drawIncomeTable(income.incomeDateArr, income.incomeTitleArr, income.incomeMoneyArr);
}

function editExpenses(index) {
    expenses.sumExpenses = 0;
    let editDate = prompt("Edit Your Expense Date: ", expenses.expensesDateArr[index]);
    let editTitle = prompt("Edit Your Expense Title: ", expenses.expensesTitleArr[index]);
    let editMoney = prompt("Edit Your Expense Money: ", expenses.expensesMoneyArr[index]);
    expenses.expensesDateArr[index] = editDate;
    expenses.expensesTitleArr[index] = editTitle;
    expenses.expensesMoneyArr[index] = editMoney;
    for (let i = 0; i < expenses.expensesMoneyArr.length; i++) {
        expenses.sumExpenses += expenses.expensesMoneyArr[i];
    }
    balance.calculate(+income.sumIncome, +expenses.sumExpenses);
    expenses.drawExpensesTable(expenses.expensesDateArr, expenses.expensesTitleArr, expenses.expensesMoneyArr);
}

function deleteExpenses(index) {
    expenses.sumExpenses = 0;
    let deleteConfirm = confirm("Are you sure about that?!!");
    if (deleteConfirm) {
        expenses.expensesDateArr.splice(index, 1);
        expenses.expensesTitleArr.splice(index, 1);
        expenses.expensesMoneyArr.splice(index, 1);
        alert("You Have Deleted Your Expense!");
    }
    for (let i = 0; i < expenses.expensesMoneyArr.length; i++) {
        expenses.sumExpenses += expenses.expensesMoneyArr[i];
    }
    balance.calculate(+income.sumIncome, +expenses.sumExpenses);
    expenses.drawExpensesTable(expenses.expensesDateArr, expenses.expensesTitleArr, expenses.expensesMoneyArr);
}
