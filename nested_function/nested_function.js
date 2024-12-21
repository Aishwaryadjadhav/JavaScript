// .......example 1.....

// function parent()
// {
//     let a = 10;
//     function child()
//     {
//         console.log(a);
//     }

//     return child()
// }

// parent();

// ............example 2.........

// var b = 20;
// function demo()
// {
//     console.log(b);
// }
// demo();

// // ..........example 3...........

// let age = 20;
// function demo1()
// {
//     console.log(++age);
// }
// demo1()
//demo1()


// ........example 4.......

// function outer()
// {
//     let a = 10;
//     function inner()
//     {
//         console.log(a);
//     }
//     return inner
// }
// outer()()

// .........example 5.........

function parent()
{
    function child1();
}


// ...........example 6......

// function parent1()
// {
//     function demo1()
//     {
//         console.log('iam demo1');
//     }

//     function demo2()
//     {
//         console.log('iam demo2');
//     }

//     return demo1,demo2  //demo2 is updated function........
// }

// parent1()()()

// ..........example 7..........

//if we want to print both child function then we go with arrays

function parent1()
{
    function demo1()
    {
        console.log('iam demo1');
    }

    function demo2()
    {
        console.log('iam demo2');
    }

    return [demo1,demo2]  
}
// parent1()[0]()[1]()

let result = parent1()
let c = result[0]()
console.log(c);
result[1]()
