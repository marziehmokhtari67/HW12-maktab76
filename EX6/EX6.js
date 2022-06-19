
let elemId=document.getElementById('elemId')
letshowPosition=document.getElementById("showPosition")
elemId.addEventListener("goodbye",()=>{
    showPosition.innerHTML=elemId.tagName
})
let customEvent= new Event("goodbye",{bubbles:true})
elemId.dispatchEvent(customEvent)

elemId.addEventListener("mousemove",(event)=>{
    showPosition.innerHTML=`${event.clientX}:${event.clientY}`
})