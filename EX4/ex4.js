let list = document.querySelectorAll(".item")
function Deactive(){
  for(let i=0; i<=list.length-1;i++){
        list[i].style.textDecoration="none"
        console.log(123);
    }
}
console.log(list)
list.forEach((item)=>{
     
    item.addEventListener("click",()=>{
        Deactive()
    item.style.textDecoration = "line-through";
})
})