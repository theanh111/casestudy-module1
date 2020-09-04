function User(username, password) {
    this.username = username;
    this.password = password;
}

function checkCharacter(username) {
    let specialChar = "^&*()%$#@!~ ";
    for (let i = 0; i < username.length; i++) {
        if (specialChar.indexOf(username[i]) >= 0)
            return false;
    }
    return true;
}

function register() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let user = new User(username, password);
    let userManage = new UserManage();

    if (!checkCharacter(username)) {
        alert("Please Type Your Info!");
    } else if (username === "" || password === "") {
        alert("Please Type Your Info!");
    } else if (username === "&nbsp;") {
        alert("Please Type Your Info!");
    } else {
        alert("Sign Up Sucessfully!");
        location.replace("login.html");
    }

    userManage.addUser(user);
    userManage.saveData();
}

