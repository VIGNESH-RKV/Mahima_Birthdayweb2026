const USERNAME="Pattu";
const PASSWORD="2108";

const music=document.getElementById("bgMusic");

const beginBtn=document.getElementById("beginBtn");

createStars();
createHearts();

function createStars(){

const stars=document.getElementById("stars");

for(let i=0;i<120;i++){

const star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"%";

star.style.top=Math.random()*100+"%";

star.style.animationDelay=Math.random()*2+"s";

stars.appendChild(star);

}

}

beginBtn.onclick=startExperience;

function showScreen(id){

document.querySelectorAll(".screen").forEach(screen=>{

screen.classList.remove("active");

});

document.getElementById(id).classList.add("active");

}

async function startExperience(){

try{

await music.play();

}catch(e){}

showScreen("puppyScreen");

}

function login(){

const user=document.getElementById("username").value.trim();

const pass=document.getElementById("password").value.trim();

const puppy=document.getElementById("loginPuppy");

const error=document.getElementById("error");

if(user===USERNAME&&pass===PASSWORD){

puppy.src="static/images/puppy_love.png";

error.style.color="#90ee90";

error.innerHTML="Yay! Welcome Pattu ❤️";

setTimeout(()=>{

alert("Login Successful");

},1500);

}

else{

puppy.src="static/images/puppy_angry.png";

error.style.color="#ffd700";

error.innerHTML="Hmm... I don't think you're Pattu!";

document.querySelector("#loginScreen .card").animate([

{transform:"translateX(-10px)"},

{transform:"translateX(10px)"},

{transform:"translateX(-10px)"},

{transform:"translateX(10px)"},

{transform:"translateX(0px)"}

],{

duration:450

});

setTimeout(()=>{

puppy.src="static/images/puppy_happy.png";

error.innerHTML="";

},2000);

}

}
function goToLogin(){

showScreen("loginScreen");

}

function createHearts(){

for(let i=0;i<18;i++){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤";

heart.style.left=Math.random()*100+"%";

heart.style.fontSize=(16+Math.random()*22)+"px";

heart.style.animationDuration=(8+Math.random()*6)+"s";

heart.style.animationDelay=Math.random()*8+"s";

document.body.appendChild(heart);

}

}