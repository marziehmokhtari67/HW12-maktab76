let div = document.getElementsByClassName('cta_container')
let button = document.getElementsByClassName("cta_button")
console.log(button)
console.log(button[0].nodeName)
let demo =document.getElementById("demo")
div[0].addEventListener ("click",()=>
    demo.innerHTML=div[0].nodeName
)
button[0].addEventListener("click",(event)=>{
    event.stopPropagation()
    if (event.target.nodeName=="BUTTON"){
        console.log(123);
    demo.innerHTML=button[0].nodeName}
})