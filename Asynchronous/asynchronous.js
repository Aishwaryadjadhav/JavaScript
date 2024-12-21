// window.setTimeout(()=>{
//     console.log("hello");
// },3000)

// window.setInterval(()=>{
//     console.log("hello");
// },3000)

// setTimeout(()=>{
//     window.alert("im a alert")
// },3000)
// document.write("im a document")


function demo(m,n)
{
    setTimeout(()=>{
        for(let i=m;i<=n;i++)
    {
        console.log(i);
    }

    },5000)
}
demo(1,100)


function demo1()
{
    console.log("hello world");
}
demo1()