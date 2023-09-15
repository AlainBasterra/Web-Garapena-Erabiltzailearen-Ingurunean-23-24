//index.html
function Kaixo() {
  console.log("Kaixo mundua (kontsolan)");
  return "Kaixo mundua";
}

//batazbestekonota.html
function IdatziNota() {
  var cont = 1;
  var galderaKopurua = 3;
  const notak = new Array();
  while (cont <= galderaKopurua) {
    let nota = prompt("Idatzi nota");
    notak.push(parseInt(nota));
    cont++;
  }
  cont--;
  var batazbesteko = 0;
  notak.forEach((nota) => {
    batazbesteko += nota;
  });
  emaitza = batazbesteko / cont;
  if (emaitza >= 5) {
    alert("Gainditua, nota: " + emaitza);
  } else {
    alert("Ez gainditua, nota:  " + emaitza);
  }
  return emaitza;
}

//faktoriala.html
function Faktoriala() {
  var input;
  do {
    input = prompt("Sartu zenbaki positibo bat bere faktoriala kalkulatzeko");
    if (isNaN(input) || input <= 0) {
      alert("Sartu zenbaki positibo bat.");
    }
  } while (isNaN(input) || input <= 0);

  var erantzuna = 1;
  while (input > 0) {
    erantzuna *= input;
    input--;
  }
  alert("Faktoriala: " + erantzuna + " da.");
  return erantzuna;
}

//liburuak-irakurrita.html
class Liburua {
  constructor(titulua, autorea, irakurrita) {
    this.titulua = titulua;
    this.autorea = autorea;
    this.irakurrita = irakurrita;
  }
}

function LiburuakIrakurrita() {
  var liburuak = [
    new Liburua("Liburua1", "Alain", false),
    new Liburua("Liburua2", "Erlantz", false),
    new Liburua("Liburua3", "Hodei", false),
    new Liburua("Luna de Plutón", "Dross", true),
    new Liburua("Liburua5", "Haritz", false),
    new Liburua("Liburua6", "Aitzol", false),
  ];

  for (var liburua of liburuak) {
    if (liburua.irakurrita) {
      alert("Liburu hau irakurrita daukazu, titulua: " + liburua.titulua + " autorea: " + liburua.autorea);
    } else {
      alert("Liburu hau irakurri behar duzu, titulua: " + liburua.titulua + " autorea: " + liburua.autorea);
    }
    
    console.log("Título: " + liburua.titulua);
  }
}
