//kamisetak.html
function Aurrera(){
    //Balioa
    var elementua = document.getElementById("balioa");
    var num = elementua.getAttribute("data-num");
    //Argazkia
    var argazkia = document.getElementById("img");
    url = argazkia.getAttribute("src");
    //Testua
    var testua = document.getElementById("camiseta");
    if (num == 6) {
        elementua.setAttribute("data-num", "9");
        argazkia.setAttribute("src", "./image/9.jpg");
        testua.innerHTML = "Camiseta 9";
    } else if (num == 9){
        elementua.setAttribute("data-num", "11");
        argazkia.setAttribute("src", "./image/11.jpg");
        testua.innerHTML = "Camiseta 11";
    } else {
        alert("Ezin da mugimendu hori egin");
    }
}

function Atzera(){
    //Balioa
    var elementua = document.getElementById("balioa");
    var num = elementua.getAttribute("data-num");
    //Argazkia
    var argazkia = document.getElementById("img");
    url = argazkia.getAttribute("src");
    //Testua
    var testua = document.getElementById("camiseta");
    if (num == 11) {
        elementua.setAttribute("data-num", "9");
        argazkia.setAttribute("src", "./image/9.jpg");
        testua.innerHTML = "Camiseta 9";
    } else if (num == 9){
        elementua.setAttribute("data-num", "6");
        argazkia.setAttribute("src", "./image/6.jpg");
        testua.innerHTML = "Camiseta 6";
    } else {
        alert("Ezin da mugimendu hori egin");
    }
}

