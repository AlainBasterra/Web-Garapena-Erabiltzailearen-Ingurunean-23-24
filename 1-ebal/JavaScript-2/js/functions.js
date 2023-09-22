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