let container=document.getElementById("container")
let show_position= document.getElementById("show_position")
 function event_function(event){
    show_position.innerHTML=`${event.pageX}:${event.pageY}`
}