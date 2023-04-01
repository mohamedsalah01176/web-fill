let down=document.getElementById("down");
let features=document.getElementById("features")
let mnue=document.getElementById("mnue");
let li=document.querySelector(".group-item ul");
let container=document.querySelector(".container")

down.onclick=function(){
    this.scrollIntoView(features);
    
}
mnue.onclick=function(){
    li.classList.toggle("active");
    container.classList.toggle("active");
    
}