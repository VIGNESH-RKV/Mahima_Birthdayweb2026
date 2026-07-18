const USERNAME = "Pattu";
const PASSWORD = "2108";

const music = document.getElementById("bgMusic");

music.volume = 0.4;

function showScreen(id){

document.querySelectorAll(".screen").forEach(screen=>{

screen.classList.remove("active");

});

document.getElementById(id).classList.add("active");

}

function login(){

const user=document.getElementById("username").value.trim();

const pass=document.getElementById("password").value.trim();

if(user===USERNAME && pass===PASSWORD){

music.play().catch(()=>{});

showScreen("loadingScreen");

setTimeout(()=>{

startCountdown();

},3000);

}

else{

document.getElementById("error").innerHTML="Wrong Name or Password";

}

}

function startCountdown(){

showScreen("countdownScreen");

let count = 3;

const counter = document.getElementById("countNumber");

const timer = setInterval(()=>{

count--;

if(count>0){

counter.innerHTML = count;

}
else{

clearInterval(timer);

counter.innerHTML = "🎉";

setTimeout(()=>{

showScreen("puppyScreen");

},1000);

}

},1000);

}
function noClicked(){

document.getElementById("puppyImage").src="/static/images/puppy_angry.png";

document.getElementById("puppyTitle").innerHTML="How Dare You! 😤";

document.getElementById("puppyText").innerHTML="You clicked NO... Try again ❤️";

}

function yesClicked(){

document.getElementById("puppyImage").src="/static/images/puppy_love.png";

document.getElementById("puppyTitle").innerHTML="That's My Good Girl ❤️";

document.getElementById("puppyText").innerHTML="I knew you would say YES.";

document.getElementById("choiceButtons").style.display="none";

document.getElementById("continueBtn").style.display="inline-block";

}

function startBirthday(){

alert("Module 5 (Birthday Celebration) starts here.");

}