let boxs=document.querySelectorAll(".gime .square");
let turn="x";
let title=document.querySelector(".title");
let container=document.querySelector(".container");
let backend=document.querySelector(".backend");
boxs.forEach((el) =>{
    el.addEventListener("click",function(id){
        let element=document.getElementById(this.id);
        if(turn==="x" && element.innerHTML ==""){
            element.innerHTML="X";
            turn="o";
            title.innerHTML="O";
            title.style.fontSize="50px"
            
        }else if(turn ==="o" && element.innerHTML==""){
            element.innerHTML="O";
            turn="x";
            title.innerHTML="X";
            title.style.fontSize="50px"
        }
        win();
    });
});

let square=[];
function win(){
    for(let i=1;i<10;i++){
        square[i]=document.getElementById(`item${i}`).innerHTML;
        
    }
    if(square[1] == square[2] && square[2] == square[3] &&square[1] !==""){
        end(1 ,2,3);
        
    }
    else if(square[4] == square[5] && square[5] == square[6] &&square[4] !==""){
        
        end(4,5,6)
    }
    else if(square[7] == square[8] && square[8] == square[9] &&square[7] !==""){
        end(7,8,9)
        
    }
    else if(square[1] == square[4] && square[4] == square[7] &&square[1] !==""){
        end(1,4,7)
        
    }
    else if(square[2] == square[5] && square[5] == square[8] &&square[2] !==""){
        end(2,5,8)
        
    }
    else if(square[3] == square[6] && square[6] == square[9] &&square[3] !==""){
        end(3,6,9)
        
    }
    else if(square[1] == square[5] && square[5] == square[9] &&square[1] !==""){
        end(1,5,9)
        
    }
    else if(square[3] == square[5] && square[5] == square[7] &&square[3] !==""){
        end(3,5,7)
        
    }
    
}

function end(num1 ,num2,num3){
    title.innerHTML=`${square[num1]} Winner`;
    document.getElementById("item"+num1).style.color="#000";
    document.getElementById("item"+num2).style.color="#000";
    document.getElementById("item"+num3).style.color="#000";

    
    container.classList.add("hide");
    backend.style.display="block";
    p= document.createElement("p")
    p.textContent="congraduation "+square[num1];
    backend.appendChild(p);

    setInterval(function(){
        title.innerHTML +="."
    },1000);
    setTimeout(function(){
        location.reload();
    },4000)
}