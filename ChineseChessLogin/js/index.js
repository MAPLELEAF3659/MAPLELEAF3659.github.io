if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyBhfKUBYsYOg8fsXLu3ySkIxpF2A68WGss",
        authDomain: "chinese-chess-3dc41.firebaseapp.com",
        projectId: "chinese-chess-3dc41"
    });
} else {
    firebase.app(); // if already initialized, use that one
}

var db = firebase.firestore();

$("#btn-login").click(function() {
    if ($("#login-name").val() != "") {
        db.collection("users").add({
            name: $("#login-name").val(),
            time: new Date().getTime()
        });
        db.collection("loginUser").doc("current").set({
            name: $("#login-name").val(),
        });
        sendAlertAppend("登入成功", "success");
    } else {
        sendAlertAppend("請輸入使用者名稱", "danger");
    }
});

var alertPlaceholder = $('#sendAlert')
var alertTrigger = $('#btn-send')

function sendAlertAppend(message, type) {
    var wrapper = document.createElement('div')
    wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

    alertPlaceholder.append(wrapper)
}