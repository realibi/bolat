$(document).ready(function(){   
    PopUpHide();
});

var submitButton = document.getElementById("registerBtn");

submitButton.addEventListener("click", function(){
    var login = document.getElementById("loginInput").value;
    var password = document.getElementById("passwordInput").value;
    var secondPassword = document.getElementById("secondPasswordInput").value;
    var email = document.getElementById("emailInput").value;

    if(login.length < 6 || password.length < 6 || (password != secondPassword) || !email.includes("@")){
        PopUpShow();
    }
});

function PopUpShow(){
    $("#popup1").show();
}

function PopUpHide(){
    $("#popup1").hide();
}