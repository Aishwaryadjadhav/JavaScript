/////.........example1:print hello in console

let demo = document.querySelector("#demo")
console.log(demo);

function demo1(){
    console.log("hello");
} 

//...print random numbers 

 function random()
 {
    let result = Math.random()*10000
    
     console.log(result);
    //document.write(result)
    
 }



/////////example2 


function random()
{
    window.setTimeout(() => {
        let result = Math.floor(Math.random() * 10000)
        console.log(result);
    })
}


////.......to generate otp and whenever we click on the button we got diff color


// function bg_color(){
//     let result=Math.floor(Math.random()*10000).toString(16)
//     console.log(result);
//     document.body.style.backgroundColor=`#${result}`
    
// }

//..........using prompt............

let a = window.prompt("enter any color namer")
console.log(a);

let color = document.getElementById("color")
console.log(color);

color.innerHTML=a;

function color1() 
{

    document.body.style.backgroundColor=`${a}`
    document.body.style.transition="ease all 3s"
    color.style.backgroundColor=`${a}`
    color.style.transition="ease all 3s"

}









