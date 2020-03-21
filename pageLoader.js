var products = document.getElementsByClassName("product");

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

products[0].addEventListener("click", function(){
    chocolateProtein();
});

products[1].addEventListener("click", function(){
    stimulator();
});

products[2].addEventListener("click", function(){
    iceCreamProtein();
});

products[3].addEventListener("click", function(){
    originalProtein();
});


products[4].addEventListener("click", function(){
    stimulator();
});

products[5].addEventListener("click", function(){
    chocolateProtein();
});

products[6].addEventListener("click", function(){
    iceCreamProtein();
});

products[7].addEventListener("click", function(){
    originalProtein();
});

products[8].addEventListener("click", function(){
    chocolateProtein();
});
products[9].addEventListener("click", function(){
    stimulator();
});
products[10].addEventListener("click", function(){
    originalProtein();
});
products[11].addEventListener("click", function(){
    iceCreamProtein();
});
products[12].addEventListener("click", function(){
    chocolateProtein();
});
products[13].addEventListener("click", function(){
    originalProtein();
});
products[14].addEventListener("click", function(){
    iceCreamProtein();
});
products[15].addEventListener("click", function(){
    stimulator();
});
