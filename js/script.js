// creao l'oggetto studente con delle proprietà e stampo attraverso il ciclo for le sue proprietà
var studente = {
  'nome': 'baden',
  'cognome':'powell',
  'età':'41'
}

for ( var key in studente){
  console.log(studente[key]);
}


// creo un array di oggetti( studenti). e stampo per ognuno le sue proprietà
var studenti = [
  studenteUno = {
    'nome':'Dante',
    'cognome':'Alighieri'
  },
  studenteDue = {
    'nome':'Giacomo',
    'cognome':'Leopardi'
  },
  studenteTre = {
    'nome':'Alessandro',
    'cognome':'Manzoni'
  }
]

for(var i = 0; i < studenti.length; i++){
  console.log('questo è lo studente n:' + (i+1));
  for (var key in studenti){
  console.log(studenti[key]);
  }
}

// l'utente attraverso i prompt può inserire nuovi studenti all'arrey creato da noi
var nuovoStudente = {}

  nuovoStudente.nome = prompt('nome nuovo studente?')
  nuovoStudente.cognome = prompt('cognome nuovo studente?')
  nuovoStudente.anni = prompt('anni del nuovo studente?')

for(var key in studenti){
  studenti.push(nuovoStudente);
}
 console.log(studenti);
