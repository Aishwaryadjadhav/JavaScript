var a = 10;
console.log(a);
console.log(typeof a);
console.log(typeof 10);
console.log(typeof -10);

console.log(Number());
console.log(typeof Number);
console.log(typeof String);

//String

var c = 'hello'
console.log(c);
console.log(typeof c)


var d = "hello world"
console.log(d);
console.log(typeof d);

var e = "i'm a developer"
console.log(e)

var f = 'im a developer'
console.log(f);

var g = `hobbies : 
                   swimming
                   playing`
console.log(g);


var m = 10;
var n = 20;
var o = m+n;
console.log(o);

console.log(`the sum of ${10} and ${20}=${o}`);

//undefied

var p;
console.log(p);
console.log(typeof p);

//null

var a = null;
console.log(a);
console.log(typeof a);

//boolean

console.log(true);
console.log(typeof true);

console.log(false);
console.log(typeof false);

//big int

console.log(10n)
console.log(typeof 10n);

//derefering

var a = 10;
console.log(a);

var b = a;
console.log(b);

var a = 'hello'
console.log(a);
console.log(b);

var b = a;
console.log(b);

//non-primitive datatype

let obj = {
    id : 1,
    name : 'aishu'
}

console.log(obj);

let obj1 = obj;
console.log(obj1);
obj1.id = 100
console.log(obj1);
console.log(obj);

