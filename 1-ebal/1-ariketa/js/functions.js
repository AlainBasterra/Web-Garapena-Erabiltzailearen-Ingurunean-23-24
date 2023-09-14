function Kaixo() {
    console.log("Kaixo mundua (kontsolan)");
    return "Kaixo mundua";
  }
  
  function IdatziNota() {
    var cont = 1
    var galderaKopurua = 3;
    const notak = new Array();
    while (cont <= galderaKopurua) {
    let nota = prompt("Idatzi nota");
    notak.push(parseInt(nota));
    cont ++;
    }
    cont --;
    var batazbesteko = 0
    notak.forEach(nota => {
      batazbesteko += nota;
    });
    emaitza = batazbesteko/cont;
    if (emaitza >= 5) {
      alert("Gainditua, nota: " + emaitza);
    } else {
      alert("Ez gainditua, nota:  " + emaitza);
    }
    return emaitza;
  }
  