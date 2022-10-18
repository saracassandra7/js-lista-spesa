/*Abbiamo un array di alimenti.
Dobbiamo stampare in pagina una lista contenente tutti gli alimenti.
Stampare sulla pagina gli elementi della lista individualmente con un ciclo for e con un ciclo while
Consigli:
- Ricordiamoci di inizializzare la variabile di contatore prima dell’inizio del ciclo while
- Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all’interno ciclo while*/

const spesa = ['uova', 'latte', 'cipolle', 'biscotti', 'pasta', 'maionese'];
const forList = document.querySelector('.for-list');
const whileList = document.querySelector('.while-list')


//ciclo for
for (let i = 0; i < spesa.length; i++){
  const prodottoFor = document.createElement('li');
  prodottoFor.innerHTML = spesa[i];
  forList.append(prodottoFor);
}

//ciclo while
let c = 0;

while(c<spesa.length){
  const prodottoWhile = document.createElement('li');
  prodottoWhile.innerHTML = spesa[c];
  whileList.append(prodottoWhile);
  c++;
}