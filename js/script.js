// DICHIARO ARRAY SPESA
const lista_spesa= ["latte", "pane", "prosciutto", "pasta", "riso", "patate", "insalata", "zucca", "cavolviore"];
console.log(lista_spesa);

// INDIVIDUO ELEMENTO UL IN HTML
const ul = document.querySelector("ul.list-group");

// DICHIARO VARIABILE CHE VERRA' INSERITA COME CONDIZIONE NEL CICLO WHILE
let i = 0

// CICLO WHILE
while (i<lista_spesa.length){
    // CREO ELEMENTO LI IN HTML
    const li = document.createElement("li");

    // CREO CLASSE LI IN HTML
    li.className = ("list-group-item");

    // INSEISCO IL VALORE DI "lista_spesa" IN LI IN HTML
    li.innerText = lista_spesa[i];

    // GLI ELEMENTI SI AGGIUNGONO ALLA LISTA
    ul.appendChild(li);

    // CONDIZIONE DI FINE CICLO
    i++;
}