
Esercizio di oggi: *Griglia Campo Minato*
nome repo: *js-campominato-grid*
*Consegna*
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Scomponete sempre il problema in sotto problemi, senza andare troppo nel dettaglio questa volta. Andate nel dettaglio solo quando non riusciti ad implementare in codice qualcosa.
Numero di push: 15 circa
*Bonus* (farlo in una cartella bonus)
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

SCOMPOSIZIONE ESERCIZIO

1 Definisco una funzione nominata che restituisce un valore e non accetta parametri
2 Creo un elemento HTML usando il metodo createElement() e lo memorizzo in una variabile
3 Seleziono l'elemento dal DOM dove inserire gli altri elementi e lo memorizzo in una costante
4 Seleziono il pulsante dal DOM tramite id, a cui aggiungo un evento click, e lo memorizzo in una costante
6 Definisco una variabile "square" per i quadrati
7 Eseguo un ciclo di 100 iterazioni per creare una griglia 10x10
8 Chiamo la funzione che crea l'elemento HTML e memorizzo il risultato nella variabile "square"
9 Aggiungo un evento click a ciascun elemento memorizzato in "square"
10 Aggiungo una classe all'elemento su cui si è fatto click
11 Stampo su console "Hai cliccato su " + (indice + 1)
12 Aggiungo del testo a ogni elemento creato
13 Inserisco l'elemento creato all'interno del contenitore selezionato dal DOM