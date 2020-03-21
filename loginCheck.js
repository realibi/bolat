$(document).ready(function(){   
    PopUpHide();
});

var submitButton = document.getElementById("loginBtn");

submitButton.addEventListener("click", function(){
    var login = document.getElementById("loginInput").value;
    var password = document.getElementById("passwordInput").value;

    if(login.length < 6 || password.length < 6){
        PopUpShow();
    }
});

function PopUpShow(){
    $("#popup1").show();
}

function PopUpHide(){
    $("#popup1").hide();
}