let userScore=document.querySelector("#userScore");
let compScore=document.querySelector("#compScore");
let usrScr=0,cmpScr=0;
let items=document.querySelectorAll(".item");
let msg=document.querySelector("button");
let userVal="",compVal="";
const clickFunc= (item)=>{
     item.classList.add("click");
     setTimeout(()=>{
        item.classList.remove("click");
     },250);
     let val=item.id;
     console.log(val);
    return val;
     
}
items.forEach((item)=>{
    item.addEventListener("click",()=>{
       userVal= clickFunc(item);
       let index=Math.floor(Math.random()*3);
       setTimeout(()=>{
        compVal=clickFunc(items[index]);
        checkWin();
       },500);    
    });
});
function showWinner(userWin,userVal,compVal){
   if(userWin){
        msg.innerText=`You win...Your ${userVal} beats ${compVal}`; 
        msg.style.backgroundColor="green";
        userScore.innerText=++usrScr;
   }
   else{
        msg.innerText=`You lost...${compVal} beats Your ${userVal}`;
        msg.style.backgroundColor="red";
        compScore.innerText=++cmpScr;
   }
  
}
function checkWin(){
    if(userVal && userVal== compVal){
        msg.innerText="Its a draw! Play Again";
        msg.style.backgroundColor="black";
    }else{
        let userWin=true;
        if(userVal=="scissor"){
            userWin= compVal==="paper"?true:false;
        }else if(userVal=="paper"){
            userWin= compVal==="rock"?true:false;
        }else{
            userWin= compVal==="scissor"?true:false;
        }
        showWinner(userWin,userVal,compVal);
        
    }
}

