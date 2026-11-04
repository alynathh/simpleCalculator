//function
//1. declaration
//2. expression

/*1. declaration 
function name(parameter){
    code blok;
}
*/

function sayHello(){
  return"Hello World";
}
console.log(sayHello());

function sapaNama(name){
  return"Hello" + name;
}
console.log(sapaNama(" Alya Nathania Azahra " ));

//menghitung luas persegi panjang dengan function
//luas = panjang * lebar;

function persegiPanjang(panjang, lebar){
  let luas = panjang*lebar;
  return "luas persegi panjang adalah " + luas;
}
console.log(persegiPanjang(5, 6));
console.log(persegiPanjang(100,27 ));

//menghitung luas segitiga dengan function.
//luas =1/2*alas*tinggi 

function segitiga(alas, tinggi){
  let luas = 1/2*alas*tinggi;
  return "luas segitiga adalah " + luas;
}
console.log(segitiga(4, 5));
console.log(segitiga(20,10 ));

//merubah suhu dari fahreheit menjadi celcius
//

function fahrenheitKeCelcius(fahrenheit) {
  let konversi = (5/9)*(fahrenheit-32);
  return fahrenheit + " F = " + konversi + " C ";
}

console.log (toCelcius(55));

//2. function expression --> a function stored in a variable 
/*
const variable_name = function(parameter){
  code block;  
};
*/
const hello = function(){
  return "Helloworld";
};
console.log(hello);
console.log(hello());

//1. sapa nama




































