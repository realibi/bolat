var imageSrc = localStorage.getItem('imageSrc');
var productName = localStorage.getItem('name');
var productPrice = localStorage.getItem('price');
var productDescription = localStorage.getItem('description');

var container = document.getElementsByClassName("container")[0];

container.innerHTML = "<div class='row'>"+
                            "<div class='col-6'>" + 
                                "<img src='" + imageSrc +"' width='70%'>" + 
                             "</div>" + 
                             "<div class='col-6'>" + 
                                "<p id='name'>" + productName +"</p>" + 
                                "<p id='description'>" + productDescription + "</p>" +
                                "<h3 id='price'> Price: " + productPrice + "<h6>"+
                                "<button class='buyButtonIndex w-50'>Order</button>" + 
                             "</div>" +
                        "</div>";

localStorage.removeItem('imageSrc');
localStorage.removeItem('name');
localStorage.removeItem('price');