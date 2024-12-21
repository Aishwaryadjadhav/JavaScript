// function demo1(){
//     console.log("number printed");
// }


function demo(m,n) 
{
    return new Promise((resolve, reject) => {
        if(isNaN(m)||isNaN(n))
        {
            return reject()
        }
        for(let i=m;i<=n;i++)
        {
            console.log(i);
        }
        return resolve()
    })

    
}
demo(1,100)
.then(demo1())
    .catch(()=>{
        console.log("giver number");
    })
    function demo1(){
        console.log("number printed");
   }