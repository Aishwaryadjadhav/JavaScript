// console.log(demo(function(){
//     console.log("iam function1");
// }
// )
// );

// console.log(demo(function(){
//     console.log("iam function2");
// }
// )
// );

// console.log(demo(function(){
//     console.log("iam function3");
// }
// )
// );

// function demo(task)
// {
//     let c = task()
//     return c
// }
// console.log(demo(function(){
//     console.log("iam function1");
// }
// )
// );

// console.log(demo(function(){
//     console.log("iam function2");
// }
// )
// );

// console.log(demo(function(){
//     console.log("iam function3");
// }
// )
// );


// //example-2

// function demo(task)
// {
//    let c = task()
//    return c 
// }

// console.log(demo(function(){
//     window.alert("iam call back function1");
// }
// )
// );

// console.log(demo(function(){
//     let h1 = document.getElementsByTagName("h1")
//     console.log(h1[0]);
//     h1[0].style.backgroundColor = "red"
//     document.write("iam call back function2");
// }
// )
// );

//addition,subtraction,multiplication,division
// function demo(a,b,task)
// {
//     let c=task(a,b)
//     return c
// }
// let res=demo(10,20,function(a,b) 
// {
//     return a+b;
// });
// console.log(res);
// let res1=demo(10,20,function(a,b) 
// {
//     return a-b;
// });
// console.log(res1);
// let res2=demo(10,20,function(a,b) 
// {
//     return a*b;
// });
// console.log(res2);
// let res3=demo(10,20,function(a,b) 
// {
//     return a/b;
// });
// console.log(res3);

// ......................hof bu using function expression............


// let demo = function(task)
// {
//     let c = task()
//     return c
// }

// console.log(demo(function(){
//     window.alert("im a call back function")
// }));
// console.log(demo(function(){
//     document.title="flipkart"
// }));


let a = Number(prompt("entre a"))
let b = Number(prompt("entre a"))
let operation = function(a,b,task) 
{
    let c = task(a,b)
    return c;
}

let res = operation(
    Number(prompt("enter a")),Number(prompt("enter b")),
    function (b) {
        return a + b
    }

)

console.log(res);

// let res1 = operation(
//     Number(prompt("enter a")),Number(prompt("enter b")),
//     function (b) {
//         return a + b
//     }

// )

// console.log(res1);
