let a = document.getElementById("demo")
console.log(a);
a.textContent="hello"

// .....getElementByClassname...

let b = document.getElementsByClassName("demo1")
console.log(b);
// console.log(b[0]);
// console.log(b[1]);

for(let i=0; i<b.length; i++)
{
    console.log(b[i]);
    b[i].style.border="2px solid blue"
    b[i].style.backgroundColor="yellow"
    b[i].style.color="red"
    b[i].children[0].style.border="1px solid black"
    b[i].children[1].style.border="1px solid black"
    b[i].children[0].style.padding="10px"
    b[i].children[1].style.padding="10px"   
    
}


// .........tag-name.......

let c = document.getElementsByTagName("div")
console.log(c);
console.log(c[0]);
console.log(c[1]);

for (let i = 0; i < c.length; i++) 
{
   console.log(c[i]); 
   console.log(i);
   c[i].style.border="2px solid black"
   c[i].style.height="150px"
   c[i].style.margin="15px"
   c[i].style.padding="15px"
   c[i].style.backgroundColor="pink"
   c[i].firstElementChild.nextElementSibling.style.backgroundColor="yellow"
   

}


// for(let ele in c)
// {
//     console.log(ele);
// }

// for(let ele of c)
// {
//     console.log(ele);
// }


// .........using name.....

let d = document.getElementsByName("demo2")
console.log(d);
// console.log(d[0]);
// console.log(d[1]);

//using for of

for(let ele2 of d)
 {
    console.log(ele2);
    ele2.style.backgroundColor="blue"
}


// ........using query selector...

let e = document.querySelector("#demo")
console.log(e);
e.onclick=function()
{
    e.style.backgroundColor="green"
    e.textContent="panipuri"
    
}

// give color to li-1 and li-2

let f = document.querySelector(".demo1")
console.log(f);

f.onclick=function()
{
 
    f.firstElementChild.style.backgroundColor="green"
    f.firstElementChild.style.color="white"
    f.firstElementChild.nextElementSibling.style.backgroundColor="pink"
    f.firstElementChild.nextElementSibling.style.color="white"
    
}

//.......queryselectorAll

let k = document.querySelectorAll("#demo")
console.log(k);
console.log(k[0]);

let j = document.querySelectorAll("*")
console.log(j);







