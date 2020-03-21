var products = document.getElementsByClassName("product");
var button1 = document.getElementById("p1");
var button2 = document.getElementById("p2");
var button3 = document.getElementById("p3");
var button4 = document.getElementById("p4");
var button5 = document.getElementById("p5");
var button6 = document.getElementById("p6");
var button7 = document.getElementById("p7");
var button8 = document.getElementById("p8");
var button9 = document.getElementById("p9");
var button10 = document.getElementById("p10");
var button11 = document.getElementById("p11");
var button12 = document.getElementById("p12");
var button13 = document.getElementById("p13");
var button14 = document.getElementById("p14");
var button15 = document.getElementById("p15");
var button16 = document.getElementById("p16");

function loadPage(element){
    var name = element.getElementsByName("name")[0]["innerText"];
    alert(name);
}

function chocolateProtein(){
    var name = products[0].getElementsByTagName("p")[0].innerText;
    var price = products[0].getElementsByTagName("p")[1].innerText;
    var imageSrc = products[0].getElementsByTagName("img")[0]["src"];
    var description = "Proteins are large biomolecules, or macromolecules, consisting of one or more long chains of amino acid residues. Proteins perform a vast array of functions within organisms, including catalysing metabolic reactions, DNA replication, responding to stimuli, providing structure to cells, and organisms, and transporting molecules from one location to another. Proteins differ from one another primarily in their sequence of amino acids, which is dictated by the nucleotide sequence of their genes, and which usually results in protein folding into a specific three-dimensional structure that determines its activity. ";
    localStorage.setItem('name', name);
    localStorage.setItem('price', price);
    localStorage.setItem('imageSrc', imageSrc);
    localStorage.setItem('description', description);
    document.location.href = "product.html";
}

function stimulator(){
    var name = products[1].getElementsByTagName("p")[0].innerText;
    var price = products[1].getElementsByTagName("p")[1].innerText;
    var imageSrc = products[1].getElementsByTagName("img")[0]["src"];
    var description = "Stimulator plays an important role in innate immunity. STING induces type I interferon production when cells are infected with intracellular pathogens, such as viruses, mycobacteria and intracellular parasites.[6] Type I interferon, mediated by STING, protects infected cells and nearby cells from local infection by binding to the same cell that secretes it (autocrine signaling) and nearby cells (paracrine signaling.)";
    localStorage.setItem('name', name);
    localStorage.setItem('price', price);
    localStorage.setItem('imageSrc', imageSrc);
    localStorage.setItem('description', description);
    document.location.href = "product.html";
}

function iceCreamProtein(){
    var name = products[2].getElementsByTagName("p")[0].innerText;
    var price = products[2].getElementsByTagName("p")[1].innerText;
    var imageSrc = products[2].getElementsByTagName("img")[0]["src"];
    var description = "High-protein ice creams have seen a significant increase in popularity in the last few years. These ice creams are supposed to be healthier than your average pint, while still tasting just as good. And since many people are always on the lookout for delicious ice cream that is also diet-friendly, it's not surprising that high-protein options are quickly becoming top sellers.";
    localStorage.setItem('name', name);
    localStorage.setItem('price', price);
    localStorage.setItem('imageSrc', imageSrc);
    localStorage.setItem('description', description);
    document.location.href = "product.html";
}

function originalProtein(){
    var name = products[3].getElementsByTagName("p")[0].innerText;
    var price = products[3].getElementsByTagName("p")[1].innerText;
    var imageSrc = products[3].getElementsByTagName("img")[0]["src"];
    var description = "Proteins are large biomolecules, or macromolecules, consisting of one or more long chains of amino acid residues. Proteins perform a vast array of functions within organisms, including catalysing metabolic reactions, DNA replication, responding to stimuli, providing structure to cells, and organisms, and transporting molecules from one location to another. Proteins differ from one another primarily in their sequence of amino acids, which is dictated by the nucleotide sequence of their genes, and which usually results in protein folding into a specific three-dimensional structure that determines its activity. ";
    localStorage.setItem('name', name);
    localStorage.setItem('price', price);
    localStorage.setItem('imageSrc', imageSrc);
    localStorage.setItem('description', description);
    document.location.href = "product.html";
}

function chocolateProteinAdd(){
    product = products[0].children;

    var item = {
        imageSrc: product[0].children[0]["src"],
        name: product[1].innerText,
        price: product[2].innerText
    }

    var cart = [];

    if(JSON.parse(localStorage.getItem("cart")) != null){
        cart = JSON.parse(localStorage.getItem("cart"));
    }

    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
}

function stimulatorAdd(){
    product = products[1].children;

    var item = {
        imageSrc: product[0].children[1]["src"],
        name: product[2].innerText,
        price: product[3].innerText
    }

    var cart = [];

    if(JSON.parse(localStorage.getItem("cart")) != null){
        cart = JSON.parse(localStorage.getItem("cart"));
    }

    cart.push(item);
    console.log(product);
    localStorage.setItem("cart", JSON.stringify(cart));
}

function iceCreamProteinAdd(){
    product = products[2].children;

    var item = {
        imageSrc: product[0].children[1]["src"],
        name: product[2].innerText,
        price: product[3].innerText
    }

    var cart = [];

    if(JSON.parse(localStorage.getItem("cart")) != null){
        cart = JSON.parse(localStorage.getItem("cart"));
    }

    cart.push(item);
    console.log(product);
    console.log(item);
    localStorage.setItem("cart", JSON.stringify(cart));
}

function originalProteinAdd(){
    product = products[3].children;

    var item = {
        imageSrc: product[0].children[1]["src"],
        name: product[2].innerText,
        price: product[3].innerText
    }

    var cart = [];

    if(JSON.parse(localStorage.getItem("cart")) != null){
        cart = JSON.parse(localStorage.getItem("cart"));
    }

    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
}

button1.addEventListener("click", function(){
    chocolateProteinAdd();
});

products[0].addEventListener("click", function(){
    chocolateProtein();
});

products[1].addEventListener("click", function(){
    stimulator();
});

button2.addEventListener("click", function(){
    stimulatorAdd();
});

products[2].addEventListener("click", function(){
    iceCreamProtein();
});

button3.addEventListener("click", function(){
    iceCreamProteinAdd();
});

products[3].addEventListener("click", function(){
    originalProtein();
});

button4.addEventListener("click", function(){
    originalProteinAdd();
});

products[4].addEventListener("click", function(){
    stimulator();
});

button5.addEventListener("click", function(){
    stimulatorAdd();
});

products[5].addEventListener("click", function(){
    chocolateProtein();
});

button6.addEventListener("click", function(){
    chocolateProteinAdd();
});

products[6].addEventListener("click", function(){
    iceCreamProtein();
});

button7.addEventListener("click", function(){
    iceCreamProteinAdd();
});

products[7].addEventListener("click", function(){
    originalProtein();
});

button8.addEventListener("click", function(){
    originalProteinAdd();
});

products[8].addEventListener("click", function(){
    chocolateProtein();
});

button9.addEventListener("click", function(){
    chocolateProteinAdd();
});

products[9].addEventListener("click", function(){
    stimulator();
});

button10.addEventListener("click", function(){
    stimulatorAdd();
});

products[10].addEventListener("click", function(){
    originalProtein();
});

button11.addEventListener("click", function(){
    originalProteinAdd();
});

products[11].addEventListener("click", function(){
    iceCreamProtein();
});

button12.addEventListener("click", function(){
    iceCreamProteinAdd();
});

products[12].addEventListener("click", function(){
    chocolateProtein();
});

button13.addEventListener("click", function(){
    chocolateProteinAdd();
});

products[13].addEventListener("click", function(){
    originalProtein();
});

button14.addEventListener("click", function(){
    originalProteinAdd();
});

products[14].addEventListener("click", function(){
    iceCreamProtein();
});

button15.addEventListener("click", function(){
    iceCreamProteinAdd();
});

products[15].addEventListener("click", function(){
    stimulator();
});

button16.addEventListener("click", function(){
    stimulatorAdd();
});