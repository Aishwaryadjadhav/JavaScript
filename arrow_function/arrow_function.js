// .............implicit return..........

let demo = () => console.log("hello");
console.log(demo());


// ...........explicit return...........


let demo1 = () => {return 'hello'}
console.log(demo1());


// .........arrow function using hof.............

let sum = (task) => {
    let a = task()
    return a
}
console.log(sum(()=>{
    return "ima call back fun"
}));
console.log(sum(()=>{
    return "ima call back fun1er"
}));