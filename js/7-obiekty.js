//'use strict'
//
//var kaja = {
    'use strict';
//    imie: "Kaja",
//    height: 152,
//    przedstawOsobe: function () {
//        console.log("Ten obiekt ma na imie " + this.imie);
//    }
//}
//var krystian = {
//    imie: "Krystian",
//    height: 184,
//    przedstawOsobe: function () {
//        console.log("Ten obiekt ma na imie " + this.imie);
//    }
//}
//
//
//kaja.przedstawOsobe();
//krystian.przedstawOsobe();
//console.log(kaja.height);
//console.log(krystian.height);




class Osoba {
    constructor (imie, nazwisko){
        this.imie = imie;
        this.nazwisko = nazwisko;
    }
    wyswietlInfo(){
        console.log("Nazywam sie: "+ this.imie + " " + this.nazwisko);
    }
}

var agata = new Osoba ("Agata", "Biesaga");

console.log(agata);

var marcin = new Osoba("Marcin", "Kwiatkowski");
console.log(marcin);

agata.wyswietlInfo();





