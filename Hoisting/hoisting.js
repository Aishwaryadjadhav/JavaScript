// 'use strict'

// a = 10;
// console.log(a);
// console.log(window);

//declaration

// var a;
// console.log(a);

// let b;
// console.log(b);

// const c;
// console.log(c);

//declaration and initialization

// var a = 10;
// console.log(a);

// let b = 20;
// console.log(b);

// const c = 30;
// console.log(c);

//re-initialization

// var a = 10;
// a = 'hello'
// console.log(a);

// let b = 20;
// b = 'hello world'
// console.log(b)

// const c = 30;
// c = '40'
// console.log(c);

//redeclaration and re-initialization
var a = 10;
console.log(a);

var a = 'hello'
console.log(a);

// let b = 20;
// console.log(b);

// let b = 30;
// console.log(b);


// const c = 30;
// console.log(c);

// const c = 40;
// console.log(c);

//hoisting

console.log(m);
var m = 50;

// console.log(n);
// let n = 'hello'

// console.log(c);
// const c = 30;


//type casting

console.log(5+ 5); //10
console.log(5+'5'); //55 number is converted into a string
console.log(5+'a');
console.log(5-5);
console.log(5+'5'); //0 string has been converted into a number
console.log(5-'a'); //nan
console.log(typeof NaN);

//explicit typecasting

console.log(5+'5'); //55
console.log(5+Number(5)); //10
console.log(5+5);
console.log(String(5)+5); //55
console.log(Boolean(1));  
console.log(Boolean(0));

//methods of number function

console.log(Number.parseInt(11.200));
console.log(Number.parseFloat(11.200));
console.log(Number.isFinite(5));
console.log(Number.isFinite(5n));
// console.log(Number.isNaN(5));
console.log(Number.isInteger(5.5));
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);






