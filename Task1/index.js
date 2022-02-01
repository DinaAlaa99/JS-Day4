function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "") {
        showText("user name field cannot be empty");
    } else if (password == "") {
        showText("password field cannot be empty");
    } else if (username == "admin" && password == "123") {
        showText("welcome");
    } else {
        showText("not registered");
    }
}

function showText(text) {
    document.getElementById("validator-text").innerText = text;
    document.getElementById("validator-text").style.display = 'block';
}