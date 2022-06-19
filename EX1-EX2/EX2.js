
// first section

let nameInput = document.getElementById("name")
let emailInput =document.getElementById("email")
let emailText=document.getElementsByClassName("email")
let submit = document.getElementsByTagName("button")
let message=document.getElementById("demo")


console.log(submit)

message.style.color="red"
nameInput.addEventListener("focusout",()=>{

    if(nameInput.value){
    //   first way:shwing message by paragraph element 
    // message.innerHTML="please enter your name"
    // second way:by alert
    alert("it is valid")   
    }
    else{
        // message.innerHTML="it is valid"
        alert("please enter your name") 
    }
})

// second section



emailInput.addEventListener("change",()=>{
emailText[0].innerHTML=emailInput.value
if(!emailText[0].innerHTML){
    emailText[0].innerHTML="Kiranworkspace7@gmail.com"
}
} 
)
// third section

document.forms[0].addEventListener("click",(event)=>{
    
    event.preventDefault()
})


document.forms[0].addEventListener("submit",(event)=>{
    
    event.preventDefault()
    
})
