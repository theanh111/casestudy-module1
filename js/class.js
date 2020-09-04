function Income() {
    this.addIncomeDate = document.getElementById("addIncomeDate");
    this.addIncomeTitle = document.getElementById("addIncomeTitle");
    this.addIncomeMoney = document.getElementById("addIncomeMoney");
    this.sumIncome;
    this.incomeDateArr = [];
    this.incomeTitleArr = [];
    this.incomeMoneyArr = [];
    this.drawIncomeTable = function (dateArray, titleArray, moneyArray) {
        let table;
        table = "<table cellpadding='5'>";
        table += "<tr>" +
            "<th style='font-size: xx-large; color: #32CD32' colspan='6'>Income</th>" +
            "</tr>";
        table += "<tr>" +
            "<th colspan='2'>Date</th>" +
            "<th>Title</th>" +
            "<th>Money</th>" +
            "</tr>";
        for (let i = 0; i < titleArray.length; i++) {
            table += "<tr>";
            table += "<th class='order'>" + [i + 1] + ") " + "</th>";
            table += "<td class='incomeDate' id='incomeDate'>" + dateArray[i] + "</td>";
            table += "<td class='incomeTitle' id='incomeTitle'>" + titleArray[i] + "</td>";
            table += "<td class='incomeMoney' id='incomeMoney'>" + '+ ' + moneyArray[i] + "$" + "</td>";
            table += "<td>" + "<button onclick='editIncome(" + i + ");'>Edit" + "</button>" + "</td>";
            table += "<td>" + "<button onclick='deleteIncome(" + i + ");'>Delete" + "</button>" + "</td>";
            table += "</tr>";
        }
        table += "</table>";
        displayIncomeTable.innerHTML = table;
    }
}

function Expenses() {
    this.addExpensesDate = document.getElementById("addExpensesDate");
    this.addExpensesTitle = document.getElementById("addExpensesTitle");
    this.addExpensesMoney = document.getElementById("addExpensesMoney");
    this.sumExpenses;
    this.expensesDateArr = [];
    this.expensesTitleArr = [];
    this.expensesMoneyArr = [];
    this.drawExpensesTable = function (dateArray, titleArray, moneyArray) {
        let table;
        table = "<table cellpadding='5'>";
        table += "<tr>" +
            "<th style='font-size: xx-large; color: #d61b06' colspan='6'>Expenses</th>" +
            "</tr>";
        table += "<tr>" +
            "<th colspan='2'>Date</th>" +
            "<th>Title</th>" +
            "<th>Money</th>" +
            "</tr>";
        for (let i = 0; i < titleArray.length; i++) {
            table += "<tr>";
            table += "<th class='order'>" + [i + 1] + ") " + "</th>";
            table += "<td class='expensesDate' id='expensesDate'>" + dateArray[i] + "</td>";
            table += "<td class='expensesTitle' id='expensesTitle'>" + titleArray[i] + "</td>";
            table += "<td class='expensesMoney' id='expensesMoney'>" + "- " + moneyArray[i] + "$" + "</td>";
            table += "<td>" + "<button onclick='editExpenses(" + i + ");'>Edit" + "</button>" + "</td>";
            table += "<td>" + "<button onclick='deleteExpenses(" + i + ");'>Delete" + "</button>" + "</td>";
            table += "</tr>";
        }
        table += "</table>"
        displayExpensesTable.innerHTML = table;
    }
}

function Balance() {
    this.calculate = function (incomeSum, expensesSum) {
        let balanceMoney = incomeSum - expensesSum;
        if (isNaN(balanceMoney)) {
            document.getElementById("balanceMoney").innerHTML = "+" + incomeSum + "$";
        } else if (isNaN(balanceMoney)) {
            document.getElementById("balanceMoney").innerHTML = "-" + expensesSum + "$";
        } else if (balanceMoney <= 0) {
            document.getElementById("balanceMoney").innerHTML = balanceMoney + "$";
        } else {
            document.getElementById("balanceMoney").innerHTML = "+" + balanceMoney + "$";
        }
    }
}