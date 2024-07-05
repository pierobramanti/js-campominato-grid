// DEFINIZIONE DELLA FUNZIONE CHE MI CREA I QUADRATI//

function createSquare(){
    let currentElement = document.createElement("div");
//ASSEGNAZIONE DELLA CLASSE SQUARE ALL'ELEMENTO CREATO
    currentElement.classList.add(`square`)

// RESTITUISCO IL QUADRATO NELLA VARIABILE CURRENT ELEMENT //
    return currentElement;
}


// RECUPER L'ELEMENTO CHE CONTIENE LA MIA GRIGLIA//
const grid = document.getElementById(`grid`);

// APRO CICLO FOR//
for( let i = 0; i< 100 ; i++ ){
// CREO IL SINGOLO QUADRATO//
    let currentSquare = createSquare();

    currentSquare.innerText = i+ 1;

    currentSquare.addEventListener(`click`, function(){
        console.log([i+1])
    });

// APPENDO IL QUADRATO NELL'ELEMTO DIV CREATO PRECEDENTEMENTE
    grid.append(currentSquare);
}