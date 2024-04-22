let gameSeq=[];
let userSeq=[];
let buttons=["yellow","red","blue","green"];
let start=false;
let level=0;
let h4=document.querySelector("h4");
document.addEventListener("keypress",function(){
   if(start==false){
    console.log("game started");
    start='true';
    levelUp();
   }
});

function levelUp(){
  userSeq=[];
  level++;
  console.log("game started level");
  h4.innerText=`level ${level}`;
  //choosing random button
  let index=Math.floor(Math.random()*3);//from 0 to 3
  let color=buttons[index];
  let btn=document.querySelector(`.${color}`);
  gameSeq.push(color);
  console.log(`${color} has been pushed to gameSeq`);
  btnFlash(btn);
};
function btnFlash(btn){
   btn.classList.add("bgcolor");
   setTimeout(function(){
    btn.classList.remove("bgcolor");
   },250);
}

function btnPress(){
   let btn=this;//btn which was pressed..
   let userColor=this.getAttribute("id");
   userSeq.push(userColor);
   console.log(`${userColor} has been pushed to userSeq`);
   btnFlash(btn);

   checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
   btn.addEventListener("click",btnPress);
}

function checkAns(index){
  console.log(`checking ans`);
  if(userSeq[index]=== gameSeq[index]){
     if(userSeq.length==gameSeq.length){
         setTimeout(levelUp,1000);
     }
  }else{
    h4.innerHTML=`Game Over! <i><b><big>Your score is ${level-1}</big> </b></i> <br>Press Any key To start.`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
      document.querySelector("body").style.backgroundColor="white";
    },150);
    start=false;
    gameSeq=[];
    level=0;
  }
}