var content = "<div class='row'>";

var cart = JSON.parse(localStorage.getItem("cart"));

for(var i = 0; i < cart.length; i++){
    content += 
        "<div class='col-md-3 mt-50'>" + 
            "<div class='product' id='product1'>" + 
                "<div class='picture tac'>" + 
                    "<img src=" + cart[i]["imageSrc"] + " width='100%'>" + 
                "</div>" + 
                "<p name='name' class='name w-100 tac'>" + cart[i]["name"] +"</p>" + 
                "<p class='price w-100 tac'>" + cart[i]["price"] + "</p>" + 
            "</div>" +  
        "</div>"
}

content += "</div>";

var container = document.getElementsByClassName("container")[0];

container.innerHTML += content;

var clearButton = document.getElementById("clearBtn");

clearButton.addEventListener("click", function(){
    localStorage.clear();
    document.location.href = "cart.html";
});