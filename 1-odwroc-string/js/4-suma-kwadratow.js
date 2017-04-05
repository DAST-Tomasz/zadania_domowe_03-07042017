'use strict';

var macierz = [0,1,2,3,4,5];
var suma = 0;


for (var i = 0; i < macierz.length; i++) {
    suma += Math.pow(i, 2);
}

console.log(suma);