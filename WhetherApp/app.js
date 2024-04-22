const apiKey="68101cc9212b5f3eef113dc3abdf2635";

let input=document.querySelector("input");
let btn=document.querySelector("button");
let img=document.querySelector(".whether-icon");
let temp=document.querySelector(".temp");
let humidity=document.querySelector(".humidity");
let wind=document.querySelector(".wind");
let h1=document.querySelector(".city-name");
let visible=document.querySelector(".whether");
let error=document.querySelector(".text");

btn.addEventListener("click",async()=>{
    let city=input.value;
    try{
        await getInfo(city)
    }catch(e){
       console.log(e);
       error.innerText="Unable to Fetch the data..";
       error.style.display="block";
       visible.style.display="none";
    }
   
})
async function getInfo(city){
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    let val=await fetch(url);
    let res=await val.json();
    if(val.status== '404'){
       error.innerText="Please Enter A Valid City Name & Try agin";
       error.style.display="block";
       visible.style.display="none";
    }else{
        visible.style.display="block";
        error.style.display="none";
        h1.innerText=city.toUpperCase();
        temp.innerHTML=res.main.temp +"&deg;C";
        humidity.innerHTML=res.main.humidity+"%";
        wind.innerHTML=res.wind.speed+"km/h";
        let weather=res.weather[0].main;
        if(weather=="Clouds"){
            img.src="http://127.0.0.1:5500/FRONTEND/MINI_PROJECT/JS/WhetherApp/images/clouds.png";
            img.alt="Clouds Image";
        }else if(weather=="Clear"){
            img.src="http://127.0.0.1:5500/FRONTEND/MINI_PROJECT/JS/WhetherApp/images/clear.png";
            img.alt="Clear Image";
        }else if(weather=="Drizzle"){
            img.src="http://127.0.0.1:5500/FRONTEND/MINI_PROJECT/JS/WhetherApp/images/drizzle.png";
            img.alt="Drizzle Image";
        }else if(weather=="Mist"){
            img.src="http://127.0.0.1:5500/FRONTEND/MINI_PROJECT/JS/WhetherApp/images/mist.png";
            img.alt="Mist Image";
        }else if(weather=="Rain"){
            img.src="http://127.0.0.1:5500/FRONTEND/MINI_PROJECT/JS/WhetherApp/images/rain.png";
            img.alt="Rain Image";
        }else if(weather=="Snow"){
            img.src="http://127.0.0.1:5500/FRONTEND/MINI_PROJECT/JS/WhetherApp/images/snow.png";
            img.alt="Snow Image";
        }
    }
}