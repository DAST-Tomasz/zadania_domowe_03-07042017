'use strict';

var biblioteka = [wiedzmin, berserk, echa];
var przeczytana = Boolean(1);
var nieprzeczytana = Boolean(0);


function ksiazka (tytul) {
    this.tytul = tytul;
    this.autor;
    this.przeczytana;
    this.opiszKsiazke = function() {        
    console.log("Książka ma tytuł: " + this.tytul + ", " + "autorem jest: " + this.autor + " i jest przeczytana: " + this.przeczytana);
        }
    }

var wiedzmin = new ksiazka('Wiedzmin');
wiedzmin.autor = "Andrzej Sabkowski";
wiedzmin.przeczytana = nieprzeczytana;
wiedzmin.opiszKsiazke();

var berserk = new ksiazka('Berserk');
berserk.autor = "Paweł Majka";
berserk.przeczytana = przeczytana;
berserk.opiszKsiazke();

var echa = new ksiazka('Echa');
echa.autor = "Michał Cholewa";
echa.przeczytana = przeczytana;
echa.opiszKsiazke();

//console.log(biblioteka.length);

/*var iloscPrzeczytanych = function(biblioteka) {
    for (i = 0; i < biblioteka.length; i++) {
        
    }
    
}*/


for (var i = 0; i < ksiazka.length; i++) {
        console.log(biblioteka.length);
    }


