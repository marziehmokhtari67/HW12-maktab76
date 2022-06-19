let parent=document.getElementById("buttons")
let message=document.getElementById("message")
parent.addEventListener("click",(event)=>{
    if(event.target.className=="buttonClass"){
        message.innerHTML=event.target.className
    }
    else{
        message.innerHTML="Click!"
    }
})