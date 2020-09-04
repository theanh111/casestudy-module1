function checkLogin() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let userCheck = new UserManage();
    userCheck.loadData();
    if (userCheck.checkLogin(username, password)) {
        alert("Login Sucessfully!");
        location.replace("mainboard.html");
    } else {
        alert("Wrong Info! Please Login Agian");
    }
}

function UserManage() {
    this.users = [];

    this.addUser = function (user) {
        this.users.push(user);
    }

    this.saveData = function () {
        localStorage.setItem("user", JSON.stringify(this.users));
    }

    this.loadData = function () {
        this.users = JSON.parse(localStorage.getItem("user"));
    }

    this.checkLogin = function (username, password) {
        for (let i = 0; i < this.users.length; i++) {
            if (username === this.users[i].username && password === this.users[i].password) {
                return true;
            }
        }
        return false;
    }
}