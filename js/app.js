//console.log("test connessione")


//richiedo numero di km
const nkm = parseInt(prompt("inserisci il numero di km")) 
console.log("il numero di km che vuoi effettuare è: " + nkm)

//richiedere l'età del passeggero
const eta = parseInt(prompt("inserisci la tua età"))
console.log("la tua età è di: " + eta + " anni")

//costo al km
const costkm = 0.21 

//calcolo costo al km
const basePrice = nkm * costkm
//console.log(basePrice)


let discount = 0

//calcolo sconti
if(eta > 18){
    discount = 0.2
}
else if(eta < 65){
    discount = 0.4
}

//stampo prezzo finale
console.log("il prezzo finale sarà: €" + (basePrice-basePrice*discount).toFixed(2))