// 
let script =document.createElement("script")
script.setAttribute("src","https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js")
let p = document.getElementsByTagName("p")
document.body.prepend(script)
let array = script.src.split('/')
const regex = /\d/
array.forEach((item)=>{
    
    if(regex.test(item)){
    
    p[0].innerHTML=`the version is:${item}` 
  }
})
