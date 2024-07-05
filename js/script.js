// RECUPER L'ELEMENTO CHE CONTIENE LA MIA GRIGLIA//
const grid = document.getElementById("grid");

// APRO CICLO FOR//
for( let i = 0; i< 0 ; i++ ){

    let currentSquare = document.createElement("div");

    currentSquare.innerText = i+ 1;

    grid.append(currentSquare);
}