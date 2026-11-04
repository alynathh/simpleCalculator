//Java --> Programming Language
*/JavaScript
1.input
2.output
3.variable
4.type data (integer, float, boolean, string)
condition (if, else)
looping (perulangan)
function
*/
//Output
//1. Using console.log()
console.log("Hello world");
console.log("My Name is Alya Nathania Azahra")
//2. Using alert()
alert("Hello World, Welcome to SMA ABBS Surakarta")
//3. Using write()
//4. Using Inner.HTML
document.getElementById("app").innerHTML="My Name is Natha";
document.getElementById("nama").innerHTML="Alya Nathania Azahra";

//variabel= store data 

//1. let (perintah untuk membuat variable)
let name = "Alya Nathania Azahra"
console.log(name);
let a = 5;
let b = 6;
let c = a+b;
let d = a*b;
console.log(c)
console.log(c+b);

//Syarat Penulisan Variable
/*
1. hanya bisa diawali dengan huruf, underscore, dan tanda dolar ($)
2. variable tidak bisa menggunakan tanda spasi
3. bersifat sensitif case
*/
let nama = "Alya Nathania Azahra";
let Nama = "Natha";
console.log(nama);
console.log(Nama);

//Operators

/*
Operator Aritmatika
1. penjumlahan(+)
2. pengurangan (-)
3. perkalian (*)
4. pembagian (/)
5. perpangkatan (**)
6. modulus (%)
*/

let number1 = 100;
let number2 = 250;
console.log (number1 + number2);
console.log (number1 - number2);
console.log (number1 * number2);
console.log (number1 / number2);
console.log (number1**2);
//rumus luas persegi panjang
let panjang = 10;
let lebar = 25;
let luas = panjang * lebar;
console.log (luas);
console.log ("Panjang = ", panjang);
console.log ("Lebar= ", lebar);
console.log ("Luas Persegi panjang adalah = ", luas);
//Rumus BMI
let berat_badan = 30;
let tinggi_badan = 1.6;
let BMI = berat_badan / tinggi_badan;
console.log (BMI);
console.log ("Berat_badan = ", berat_badan);
console.log ("Tinggi_badan = ", tinggi_badan);
console.log ("BMI adalah = ", BMI);
//Lingkaran
//rumus luas lingkaran = phi*r*r
let phi = 3.14;
let r = 20;
let luas_lingkaran = phi*r*r;
console.log ("Phi = ", phi);
console.log ("Jari - jari = ", r);
console.log ("Luas Lingkaran adalah ", luas_lingkaran);

/*comparison operators
1. equal (==) = sama dengan
2. not equal (!=) = tidak sama dengan
3. greater than (>) = lebih besar dari
4. greater than or equal (>=) = lebih besar dari atau sama dengan
5. less than (<) = lebih kecil dari 
6. less than or equal (<=) = lebih kecil dari atau sama dengan
*/

let x = 5;
console.log(x == 5); //true
console.log(x != 5); //false
console.log(x > 10); //false
console.log(x >= 10); //false
console.log(x < 10); //true
console.log(x <= 10); //true

/*logical operators
1. AND (&&) -->bernilai true apabila semua kondisi nilainya true
2. OR (||) -->bernilai true apabila paling tidak ada 1 kondisi yang yang nilainya true
3. NOT (!) -->nilai kebalikan
*/

/*Data Type
1. String --> Character --> using ""/''
2. Number (integer, float)
       -integer = bilangan bulat
       -float = bilangan pecahan/desimal
3. Boolean (true, false)
*/
let data = "SMA ABBS Surakarta"; //String
let data1 = "100"; //String
let data2 = 50; //Number (integer)
let data3 = 25.25; //Number (float)
let data4 = true; //Boolean

//Condition
/* 1 Condition --> satu kondisi
if (condition){
    action;
}
*/
let y = 10;
if (y >= 10){
    console.log("Good Morning");
}

/*2 Condition
if (condition 1){
action 1;
}
else{
    action 2;   
       }
*/
let m = 5;
if(m == 10){
    console.log("Good Morning")
}
else{
    console.log("Good Afternoon")
}

//jika hari ini hujan, maka membawa payung
//jika hari ini tidak hujan, maka tidak membawa payung
let cuaca = "hujan"
if(cuaca == "hujan"){
    console.log("hari ini ujan bawa payung");
}
else{
    console.log("hari ini ga ujan gausah bawa payung");
}

/* More than 2 conditions
if (condition 1){
    action 1;
}
if (condition 2){
    action 2;
}
else{
    action 3;
}
*/

//Rumus BMI
let weight = 50;
let height = 150;
let bmi1 = (weight / height**2)*10000;
console.log ("Weight = ", weight);
console.log ("Height = ", height);
console.log ("BMI1 =", bmi1);
//jika bmi kurang dari 18.5, maka underweight
//jika bmi 18.5 - 24.9, maka healthy/normal weight
//jika bmi 25.0 - 29.9, maka overweight
//jika >= 30.0, maka obesitas;
if (bmi1 < 18.5){
    console.log("Underweight");
}
else if(bmi1 >= 18.5 && bmi1 <= 24.9){
    console.log("Normal Weight")
}
else if (bmi1 > 24.9 && bmi1 <= 29.9){
    console.log("Overweight")
}
else{
    console.log("Obesitas")
}

//cek genap atau ganjil
//jika angka genap, maka genap
//jika angka ganjil, maka ganjil
let angka = 18;
if(angka % 2 == 0){
    console.log(angka + "adalah bilangan genap");
}
else{
    console.log(angka + "adalah bilangan ganjil")
}

//cek lulus atau tidak lulus
//jika nilai lebih dari 75, maka lulus
//jika nilai <= 75, maka tidak lulus
let nilai = 85;
if(nilai > 75){
    console.log("Nilai =", nilai)
}
else{
    console.log("Tidak_lulus =", tidak_lulus)
}

//grade
//jika nilai lebih dari (>) 90, maka gradenya A
//jika nilai 80 - 90, maka gradenya B
//jika nilai 70 - 79, maka gradenya C
//jika nilai kurang dari (<) 70, maka gradenya D
let Nilai = 100;
console.log("Nilai =", Nilai)
if (Nilai > 90 ){
    console.log("Grade A");
}
else if (Nilai >80 && Nilai <90){
    console.log("Grade B");
}
else if (Nilai >70 && Nilai <79){
    console.log("Grade C");
}
else{
    console.log("Grade D")
}

//looping (perulangan)
/* 
1. Using "for"
for(first;end;step){
   action;
}
Pengertian about first, end, and step =
first : is executed (one time) before the execution of the code block
end : defines the condition for executing the code block
step : is executed (every time) after the code block has been executed
*/

for (let i = 0; i<5; i++){ // i++ --> i = i+1
    console.log("Number", i);
}

for(let n = 0; n <7; n++){
    console.log("Alya Nathania Azahra", n);
}

/* 2. Using "while"
while(condition){
      action;
}
*/

let i = 0;
while (i <5){
    console.log("number", i);
    i++;
}

/* 3. Using "do, while"
do {
   action;
}
while (condition);
*/

let number = 0;
do{
    console.log("number =", number);
    number++;
}
while(number <5);

//Array
const x9 = ["husna", "dominiq", "bilqis", "harum", "caca"];
console.log(x9);
console.log(x9[0]);
console.log(x9[2]);

let panjangindex = x9.length
console.log(panjangindex);
for (let i = 0; i < panjangindex; i ++){
    console.log (x9[i]);
}

//mangga, jambu, alpukat, pisang, apel, durian, rambutan, naga, kiwi, leci
//simpan buah diatas kedalam variable array, lalu tampilkan dengan looping
const buah = ["mangga", "jambu", "alpukat", "pisang", "apel", "durian", "rambutan", "naga", "kiwi", "leci"];
console.log(buah);
console.log(buah[1]);

let P = buah.length
console.log(P);
for (let i = 0; i < P; i ++){
    console.log (buah[i]);
}