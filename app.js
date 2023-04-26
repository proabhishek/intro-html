

let heading = document.querySelector('h1');

let btn = document.querySelector('button');




/// adddEventListener

btn.addEventListener("click", changeColor )



function changeColor(){
    // heading.style.backgroundColor= "blue";
    // heading.style.color= "black";
     

    heading.style.cssText = "background-color: blue; color: green;"


}