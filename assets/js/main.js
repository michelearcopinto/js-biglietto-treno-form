// Aggiunto colorazione di sfondo al body
const bodyBackground = document.body;
bodyBackground.style.backgroundColor = "#B91450";

// Selezione degli elementi HTML tramite id del form
const nameSurname = document.getElementById("nameSurname");
const kmToDo = document.getElementById("kmToDo");
const fasciaEtaSelect = document.getElementById("fasciaEta");
let valoreInizialeFasciaEta = document.getElementById('fasciaEta').value;
const calcButton = document.getElementById("calcButton");
const resetButton = document.getElementById("resetButton");

let prezzoBiglietto;
let numeroFormattato;

// Selezione degli elementi HTML tramite id del biglietto
const showTicket = document.getElementById("showTicket");
const nomePasseggero = document.getElementById("nomePasseggero");
const carrozza = document.getElementById("carrozza");
const codiceCP = document.getElementById("codiceCP");
const costoBiglietto = document.getElementById("costoBiglietto");


// Richiamo della funzione per generare un numero casuale
function numeroCasuale(min, max) {
    const numeroCasuale = Math.floor(Math.random() * (max - min + 1)) + min;
    return numeroCasuale;
}

calcButton.addEventListener('click', function () {
    console.log(`Il nome inserito è: ${nameSurname.value}`)
    console.log(`I kilometri inseriti sono: ${kmToDo.valueAsNumber}`)
    console.log(`È stato selezionato il valore ${fasciaEtaSelect.value} dalla lista`)

    // Verifica di dati incorretti
    if (kmToDo.valueAsNumber > 1000 || kmToDo.valueAsNumber <= 0 || isNaN(kmToDo.valueAsNumber)) {
        alert('Distanza non corretta, inserisci un valore superiore a 0 e non maggiore di 1000.')
    } else if (fasciaEtaSelect.value !== '1' && fasciaEtaSelect.value !== '2' && fasciaEtaSelect.value !== '3') {
        alert("Per favore, scegli una fascia d'età.")
    } else if (nameSurname.value === "") {
        alert("Per favore, inserisci un nome.")
    } else {

        // Calcolo del biglietto
        prezzoBiglietto = (kmToDo.value * 0.21);

        if (fasciaEtaSelect.value === '1') {
            prezzoBiglietto = prezzoBiglietto - (prezzoBiglietto * 0.20);
            numeroFormattato = prezzoBiglietto.toFixed(2);
            console.log(`Il prezzo del biglietto è: ${numeroFormattato} scontato del 20%`)

        } else if (fasciaEtaSelect.value === '2') {
            numeroFormattato = prezzoBiglietto.toFixed(2);
            console.log(`Il prezzo del biglietto è: ${numeroFormattato}`)

        } else if (fasciaEtaSelect.value === '3') {
            prezzoBiglietto = prezzoBiglietto - (prezzoBiglietto * 0.40);
            numeroFormattato = prezzoBiglietto.toFixed(2);
            console.log(`Il prezzo del biglietto è: ${numeroFormattato} scontato del 40%`)
        };

        // Aggiungere le informazioni al biglietto
        showTicket.classList = "d-block"
        nomePasseggero.innerHTML = nameSurname.value;
        carrozza.innerHTML = numeroCasuale(1, 12);
        codiceCP.innerHTML = numeroCasuale(1, 1000000000);
        costoBiglietto.innerHTML = `${numeroFormattato}€`;
    }

});

// Al click del bottone reset i campi vengono svuotati
resetButton.addEventListener('click', function () {
    nameSurname.value = '';
    kmToDo.value = '';
    fasciaEtaSelect.value = valoreInizialeFasciaEta;
    showTicket.classList = "d-none"
});

