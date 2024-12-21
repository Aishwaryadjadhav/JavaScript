//global scope its present inside the window

var a = 10;
console.log(a);
//console.log(window)

//local scope not present inside the window

let b = 20;
console.log(b);

const c = 30;
console.log(c);

//block scope : any variable return inside the {}
//inside block other than var

{
    var d = 40;
    console.log(d);

    let e = 30;
    console.log(e);

    const f = 20;
    console.log(f)

}

y = 9;
console.log(y);

