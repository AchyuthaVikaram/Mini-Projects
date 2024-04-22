let btn=document.querySelector("#request");
let p=document.querySelector(".result");
let img=document.querySelector("#img");
let title=document.querySelector(".title")
btn.addEventListener("click",async ()=>{
    await getData();
})


const url="https://api.imgflip.com/get_memes";
async function getData(){
    try {
        const response = await fetch(url);
        const result = await response.json();
        let indx=Math.floor(Math.random()*100);
        let val=result.data.memes[indx];
        img.src=val.url;
        title.innerText=val.name;
    } catch (error) {
        console.error(error);
    }
}