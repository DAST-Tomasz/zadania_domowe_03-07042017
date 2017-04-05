'use strict';

var liczby = [1, 2, 3, 4, 5, 6];
var suma = 0;
var iloczyn = 1;

for (var i = 0; i < liczby.length; i++) {
    suma += liczby[i];
    iloczyn  *= liczby[i];
}

console.log(suma, iloczyn);