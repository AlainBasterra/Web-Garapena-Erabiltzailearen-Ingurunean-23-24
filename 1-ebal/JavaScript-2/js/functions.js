//kamisetak.html
function Aurrera() {
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
  } else if (num == 9) {
    elementua.setAttribute("data-num", "11");
    argazkia.setAttribute("src", "./image/11.jpg");
    testua.innerHTML = "Camiseta 11";
  } else {
    alert("Ezin da mugimendu hori egin");
  }
}

function Atzera() {
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
  } else if (num == 9) {
    elementua.setAttribute("data-num", "6");
    argazkia.setAttribute("src", "./image/6.jpg");
    testua.innerHTML = "Camiseta 6";
  } else {
    alert("Ezin da mugimendu hori egin");
  }
}

// formularioak.html
function bidali() {
  var form = document.getElementById("formularioa");
  var argazkia = document.getElementById("argazkia");
  var datuak = document.getElementById("datuak");
  var erantzuna = "";
  if (form.radio1.checked) {
    argazkia.src = "./image/caraHombre.jpg";
    erantzuna += "<p>Zuzentzeko era: Jauna</p>";
  } else {
    argazkia.src = "./image/caraMujer.jpg";
    erantzuna += "<p>Zuzentzeko era: Anderea</p>";
  }
  erantzuna += "<p>Zure izena: " + form.izena.value + "</p>";
  erantzuna += "<p>Zure abizena: " + form.abizena.value + "</p>";
  erantzuna += "<p>Zure helbidea: " + form.helbidea.value + "</p>";
  erantzuna += "<p>Zure hiria: " + form.hiria.value + "</p>";
  erantzuna += "<p>Gustokoena:";

  var liburuak = false;
  if (form.checkbox1.checked) {
    erantzuna += " Liburuak ";
    liburuak = true;
  }

  if (form.checkbox2.checked) {
    if (liburuak) {
      erantzuna += "eta pelikulak ";
    } else {
      erantzuna += " Pelikulak";
    }
  }
  erantzuna += "</p>";

  datuak.innerHTML = erantzuna;

  return false;
}

// Gertaerak.html
function argazkiaGehitu() {
  var elementua = document.getElementById("balioa");
  var balioa = parseInt(elementua.getAttribute("data-num")); // 
  elementua.setAttribute("data-num", balioa + 1);

  var irudia0 = "./image/bull.jpg";
  var irudia1 = "./image/buleria buleria.jpg";
  var irudia2 = "./image/carmen.jpg";
  var irudia3 = "./image/binladen.jpg";

  var irudiak = [irudia0, irudia1, irudia2, irudia3];
  
  if (balioa >= 0 && balioa < irudiak.length) {
    var irudia = document.createElement("img");
    irudia.src = irudiak[balioa];
    irudia.style.width = "360px"; 
    irudia.style.height = "360px";
    var irudiakDiv = document.getElementById("irudiak");

    irudia.addEventListener("click", function () {
      irudiakDiv.removeChild(irudia);
    });

    irudiakDiv.appendChild(irudia); 
  }
}
