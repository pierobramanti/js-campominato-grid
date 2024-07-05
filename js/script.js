// RECUPER L'ELEMENTO CHE CONTIENE LA MIA GRIGLIA//
const grid = document.getElementById(`grid`);

// APRO CICLO FOR//
for( let i = 0; i< 100 ; i++ ){
// CREO IL SINGOLO QUADRATO//
    let currentSquare = document.createElement("div");
//ASSEGNAZIONE DELLA CLASSE SQUARE ALL'ELEMENTO CREATO
    currentSquare.classList.add(`square`)

    currentSquare.innerText = i+ 1;

// APPENDO IL QUADRATO NELL'ELEMTO DIV CREATO PRECEDENTEMENTE
    grid.append(currentSquare);
}