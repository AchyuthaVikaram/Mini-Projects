let label=document.querySelector("p");
let btns=document.querySelectorAll(".btn");
let nums=document.querySelectorAll(".num");
let eql=document.querySelector("#eql");
let cross=document.querySelector("#cross");
let clear=document.querySelector("#clear");
function showClick(btn){
   btn.classList.add("click");
      setTimeout(()=>{
         btn.classList.remove("click");
      },250); 
}
for(let btn of nums){
   btn.addEventListener("click",()=>{
      showClick(btn);
      label.innerText+=btn.innerText;
   })
}

clear.addEventListener("click",()=>{
   showClick(clear);
   label.innerText="";
});
cross.addEventListener("click",()=>{
   showClick(cross);
   let n=label.innerText.length;
   let newStr=label.innerText.slice(0,n-1);
   label.innerText=newStr;
})

eql.addEventListener("click",()=>{
    showClick(eql);
    let text=label.innerText;
    label.innerText=eval(text);
    
})