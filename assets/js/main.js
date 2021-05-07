/* Istruzioni:
Creare un oggetto che descriva uno studente, con le seguenti proprietà:
nome,
cognome
età.
Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
Creare un array di oggetti di studenti.
Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età. */


/*
 * Creare un oggetto che descriva uno studente, con le seguenti proprietà:
nome,
cognome
età */
var studente = {
    nome: "Shota",
    cognome: "Aizawa",
    età: 30,
} 

/* 
 * Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
*/
var insegnateEl = document.querySelector(".insegnante");
for (var key in studente) {
   // console.log(key, studente[key]) 
   insegnateEl.insertAdjacentHTML("beforeend", 
   `
   <div>
    <h3>${key} : ${studente[key]} </h3>
   </div>
   `)

}

/* 
 *Creare un array di oggetti di studenti.
*/

var registroStudenti = [
    {
        nome: "Izuku",
        cognome: "Midoriya",
        età: 16,
    },
    {
        nome: "Katsuki",
        cognome: "Bakugo",
        età: 17,
    },
    {
        nome: "Shoto",
        cognome: "Todoroki",
        età: 16,
    }

]

/* 
 * Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
 */
var alunniEl = document.querySelector(".alunni");
for (var index = 0; index < registroStudenti.length; index++) {
    var studenteObj = registroStudenti[index];
    //console.log(studenteObj);
    var nomeCompleto = studenteObj.nome + " " + studenteObj.cognome;
    //console.log(nomeCompleto)
    alunniEl.insertAdjacentHTML("beforeend",
    `
    <div>
        <h3>Nome e Cognome : ${nomeCompleto}. </h3>
    </div>
    `)

}

/*
 * Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età. 
*/
var inputNome = prompt("Inserisci il tuo nome");
var inputCognome = prompt("Inserisci il tuo cognome");
var inputEtà = parseInt(prompt("Inserisci la tua età"));

var inputStudente = {
    nome: inputNome,
    cognome: inputCognome,
    età: inputEtà,
}
//console.log(inputStudente);
registroStudenti.push(inputStudente);
console.log(registroStudenti);

var iscrittiEl = document.querySelector(".alunni_iscritti");
for (var index = 0; index < registroStudenti.length; index++) {
    var studenteObj = registroStudenti[index];
    //console.log(studenteObj);
    var nomeCompleto = studenteObj.nome + " " + studenteObj.cognome;
    //console.log(nomeCompleto)
    iscrittiEl.insertAdjacentHTML("beforeend",
    `
    <div>
        <h3>Nome e Cognome : ${nomeCompleto}. </h3>
    </div>
    `)

}