let data=document.getElementsByTagName("p");


function dbfun(){
     let div=document.getElementsByTagName("cont");
     let bg=document.body;
     bg.style.backgroundColor="blue";};
   

function clfun(){
    console.log("clicked");
    let cont=document.body;
    cont.style.backgroundColor="violet";
};
let di=document.getElementById("cont");
di.addEventListener("mouseenter",enterfun);
di.addEventListener("mouseleave",leavefun);
function enterfun(){
    di.style.backgroundColor="red";
}
function leavefun(){
    di.style.backgroundColor="pink";
}
function handleInput(e) {
  // Get the value from the input field the user just typed in
  console.log(e.target.value);
  // Change the color of the element that was clicked
  e.target.style.backgroundColor = "yellow";
}
di.addEventListener("click",handleInput);