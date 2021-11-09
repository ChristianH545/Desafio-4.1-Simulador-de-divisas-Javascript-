const dolarHoy = 200;
const euroHoy = 230;
const pesosD = 200;
const pesosE = 230;
function pesoDolar(pesosA, dolarHoy) {
  let resultadoA = pesosA / dolarHoy;
  alert(`la conversion Pesos a Dolar es:  ${resultadoA} Dolares`);
  return;
}

function pesoEuro(pesosB, euroHoy) {
  let resultadoB = pesosB / euroHoy;
  alert(`la conversion Pesos a Euros es:  ${resultadoB} Euros`);
  return;
}
function euroPesos(euro, pesosE) {
  let resultadoC = euro * pesosE;
  alert(`la conversion Euros a Pesos es:  ${resultadoC} Pesos`);
  return;
}
function dolarPesos(dolar, pesosD) {
  let resultadoC = dolar * pesosD;
  alert(`la conversion Dolar a Pesos es:  ${resultadoC} Pesos`);
  return;
}

while (opcionUsuario != "esc") {
  var opcionUsuario = prompt(`ingrese las Divisas que desea convertir: 
 A)- Pesos a Dolar?
 B)- Pesos a Euros?
 C)- Euros a Pesos?
 D)- Dolar a Pesos?
 S)- para salir`).toLowerCase();
  switch (opcionUsuario) {
    case "a":
      alert("Ha Elegido A)- Pesos a Dolar... Gracias!");
      let pesosA = parseFloat(
        prompt(
          'Por favor ingrese el monto en "PesosArs" que desea convertir en dolares. "Gracias" '
        )
      );
      pesoDolar(pesosA, dolarHoy);
      break;
    case "b":
      alert("Ha Elegido B)- Pesos a Euros... Gracias!");
      let pesosB = parseFloat(
        prompt(
          'Por favor ingrese el monto (en Pesos-Ars) que desea convertir en Euro. "Gracias" '
        )
      );
      pesoEuro(pesosB, euroHoy);
      break;
    case "c":
      alert("Ha Elegido C)- Euros a Pesos ... Gracias!");
      let euro = parseFloat(
        prompt(
          'Por favor ingrese el monto (en Euros) que desea convertir en "Pesos-Ars". "Gracias" '
        )
      );
      euroPesos(euro, pesosE);
      break;
    case "d":
      alert("Ha Elegido D)- Dolar a Pesos ... Gracias!");
      let dolar = parseFloat(
        prompt(
          'Por favor ingrese el monto en "Dolares" que desea convertir en "Pesos-Ars". "Gracias" '
        )
      );
      dolarPesos(dolar, pesosD);
      break;
    case "s":
      alert("usded ha no querido realizar una operacion cambiaria");
      break;
    default:
  }
}
