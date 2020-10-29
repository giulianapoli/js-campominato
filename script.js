// CREO I MIEI DUE ARREY CHE CONTEGONO: I NUMERI DELL'UTENTE & I NUMERI VIETATI
var numeriVietati = [];
console.log(numeriVietati);
var numeriDellUtente = [];



// CREO LA FUNZIONE NECESSARIA A GENERARE 16 NUMERI COMPRESI TRA 1 E 100
function randomNumeriVietati(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



// PRIMO STEP: aggiungo un evento al click del bottone id start
document.getElementById("start").addEventListener("click", function() {

  // STEP ZERO: chiedo all'utente di selezionare una difficoltà
  var choice = document.getElementById("difficulties").value;

  var difficulty = 100;
  switch (choice) {
    case '0':
      difficolty = 100;
    break;
    case '1':
      difficolty = 80;
    break;
    case '2':
      difficolty = 50;
    break;
  }



// CREO UN CICLO PER CUI I NUMERI GENERATI DA MATH RANDOM VENGONO PUSHATI DENTRO numeriVIETATI, PURCHé SIANO TUTTI DIVERSI

  while (numeriVietati.length < 16) {
    var vietato = randomNumeriVietati(1, difficolty);

    if (!numeriVietati.includes(vietato)) {
      numeriVietati.push(vietato);
    }
  }

  // SECONDO STEP: CREO UN CICLO PER FAR Sì CHE: L'UTENTE INSERISCA UN NUMERO.
  while (numeriDellUtente.length < 84) {
    var input = parseInt(prompt("Inserisci un numero compreso tra 1 e 100")); //chiedo il numero all'utente

    if (numeriVietati.includes(input)) { // se input utnte è incluso in arrey vietati, allora
      break;
    } else if (numeriDellUtente.includes(input)) { // se input utente è incluso nell'arrey suoi numeri, allora
        alert("Il numero è già stato inserito.");
    } else if ((input < 1) || (input > 100)) { // se input utente non è valido, allor
      alert("Il numero inserito non è valido.");
    } else {
      numeriDellUtente.push(input);
    }
  }


console.log(randomNumeriVietati());



console.log(numeriDellUtente);

// TERZO STEP: mando in output il risultato dell'utente
var messageEl = document.getElementById("message");
var roundsEl = document.getElementById("rounds");

// condizioni output
if (numeriDellUtente.length >= 5) {
  messageEl.innerHTML = "Hai Vinto!"
  roundsEl.innerHTML = "Hai inserito " + numeriDellUtente.length + " numeri";
} else {
  messageEl.innerHTML = "Hai Perso!"
  roundsEl.innerHTML = "Hai inserito " + numeriDellUtente.length + " numeri";
}
});
