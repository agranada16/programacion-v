//-------------------OPERADORES DE COMPARACION-----------------------------//

let counter= 100;
let response = 100 =="100"; //comparacion
console.log(`${counter} == '100' => ${response}` );


let responseb = 100 ==="100"; //false
console.log(`${counter} === '100' => ${responseb}` );

//diferente !=
let brand = "mazda";
let reponsec = brand != "chevrolet";
console.log(`${brand} != 'chevrolet' = ${responseb}` );
console.log(brand != "Mazda");//true

//estrictamente diferente !==

let numberA = 10;
//solo un = valida el numero 
let responseA = numberA !="10";
console.log(`${numberA} != '10' = ${responseA}`);
//con el == valida tipo de nato numero
let responsec = numberA !=="10";
console.log(`${numberA} != '10' = ${responsec}`);

//mayor >

console.log(`counter > 10 ?${counter >10}`);
console.log(`counter >= 99 ?${counter >=99}`);

//menor <
console.log(`counter < 10 ?${counter <10 }`);
console.log(`counter <= 100 ?${counter <=100}`);





