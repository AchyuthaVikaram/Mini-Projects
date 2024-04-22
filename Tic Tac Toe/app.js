let btns=document.querySelectorAll(".box");
let reset=document.querySelector(".reset");
let p=document.querySelector("p");
let player=1;  // 1-> X & 2-> O
let countOfMoves=0;
let isWon=false;
const win=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
for(let btn of btns){
    btn.addEventListener("click",()=>{
        if(player==1){
            btn.innerText="X";
            btn.style.color="#1A0F6B";
            player=2;
        }
        else{
          btn.innerText="O";
          btn.style.color="#6B0F1A"
          player=1;
        } 
        countOfMoves+=1;
        btn.disabled=true;
        checkWinner();
        checkDraw();
    })
}
let newBtn=document.createElement("button");
newBtn.innerText="New Game";
newBtn.classList.add("newBtn");
const checkWinner = () =>{
    for(let pat of win){
      if(btns[pat[0]].innerText!="" && btns[pat[1]].innerText!="" && btns[pat[2]].innerText!=""){
            if(btns[pat[0]].innerText==btns[pat[1]].innerText && btns[pat[1]].innerText ==btns[pat[2]].innerText){
                isWon=true;
                if(btns[pat[0]].innerText=="X"){
                    p.innerHTML="<b>PLAYER 1 HAS WON THE GAME</b> <br>";
                }else{
                    p.innerHTML="<b>PLAYER 2 HAS WON THE GAME</b> <br>";
                }
                p.appendChild(newBtn);
                for(let btn of btns){
                    btn.disabled=true;
                }
            }
        }
    }
}

function checkDraw(){
    if(countOfMoves==9 && isWon==false){
        p.innerHTML="<b>It's A Draw</b> <br>";
        p.appendChild(newBtn);
    } 
}
reset.addEventListener("click",()=>{
    newgame();
})
newBtn.addEventListener("click",()=>{
   newgame();
})

function newgame(){
    isWon=false;
    countOfMoves=0;
    player=1;
    for(let btn of btns){
        btn.innerText="";
        btn.disabled=false;
    }
    p.innerText="";
    p.removeChild(newBtn);
}
