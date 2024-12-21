let grandparent=document.querySelector("#grandparent")
console.log(grandparent);

let parent=document.querySelector("#parent")
console.log(parent);

let child=document.querySelector("#child")
console.log(child);

grandparent.addEventListener("click", (e)=>{
    e.stopPropagation()
    console.log(e.target);
    e.target.style.backgroundColor="red"
    console.log("grandparent clicked");
})

parent.addEventListener("click", (e)=>{
    e.stopPropagation()
    console.log(e.target);
    e.target.style.backgroundColor="yellow"
    console.log("parent clicked");
})

child.addEventListener("click", (e)=>{
    e.stopPropagation()
    console.log(e.target);
    e.target.style.backgroundColor="pink"
    console.log("child clicked");
})