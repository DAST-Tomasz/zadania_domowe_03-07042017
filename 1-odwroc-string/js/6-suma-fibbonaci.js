'use strict';

var a=1;
var b=1;
var s=2;
var c=2;
var n=3;

function fibonacci() {
    while(c<n) {
        s+=c++%2?a+=b:b+=a
    } return n<2?null:[s];
  }
console.log(fibonacci());