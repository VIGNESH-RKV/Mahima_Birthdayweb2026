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

showLoading();

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

function showLoading(){

showScreen("loadingScreen");

const messages=[
"Collecting beautiful memories...",
"Decorating your birthday...",
"Wrapping your surprise...",
"Adding lots of love...",
"Almost ready..."
];

let progress=0;
let index=0;

const fill=document.getElementById("progressFill");
const value=document.getElementById("progressValue");
const text=document.getElementById("loadingText");

const timer=setInterval(()=>{

progress++;

fill.style.width=progress+"%";
value.innerHTML=progress+"%";

if(progress%20===0 && index<messages.length-1){

index++;
text.innerHTML=messages[index];

}

if(progress>=100){

clearInterval(timer);

setTimeout(()=>{

showBirthday();

},500);

}

},40);

}

function showBirthday(){

showScreen("birthdayScreen");

startConfetti();

}

function startConfetti(){

const colors=[
"#ff1493",
"#ffd700",
"#87cefa",
"#90ee90",
"#ffffff"
];

for(let i=0;i<120;i++){

const confetti=document.createElement("div");

confetti.className="confetti";

confetti.style.left=Math.random()*100+"%";

confetti.style.background=colors[Math.floor(Math.random()*colors.length)];

confetti.style.animationDuration=(3+Math.random()*3)+"s";

confetti.style.width=(6+Math.random()*8)+"px";

confetti.style.height=confetti.style.width;

document.body.appendChild(confetti);

setTimeout(()=>{

confetti.remove();

},6000);

}

}

function goToLetter(){

showScreen("letterScreen");

}

const letter=`xxxxxx
xxxxx
xxxx`;

function openLetter(){

document.getElementById("envelope").style.display="none";

document.getElementById("letterContent").style.display="block";

typeLetter();

}

function typeLetter(){

const target=document.getElementById("typingText");

let i=0;

const timer=setInterval(()=>{

target.innerHTML+=letter.charAt(i);

i++;

if(i>=letter.length){

clearInterval(timer);

document.getElementById("letterContinue").style.display="block";

}

},35);

}

function goToGallery(){

showScreen("galleryScreen");

}
const galleryImages=[
"static/images/gallery/Photo1.jpg",
"static/images/gallery/Photo2.jpg",
"static/images/gallery/Photo3.jpg"
];

const galleryCaptions=[
"Our Beautiful Memory ❤️",
"Smiles That Last Forever 😊",
"Together Always 🤗"
];

let currentPhoto=0;

function updateGallery(){

document.getElementById("galleryImage").src=galleryImages[currentPhoto];

document.getElementById("galleryCaption").innerHTML=galleryCaptions[currentPhoto];

document.getElementById("galleryCounter").innerHTML=(currentPhoto+1)+" / "+galleryImages.length;

}

function nextPhoto(){

if(currentPhoto<galleryImages.length-1){

currentPhoto++;

updateGallery();

}

}

function previousPhoto(){

if(currentPhoto>0){

currentPhoto--;

updateGallery();

}

}

function goToTimeline(){

showScreen("timelineScreen");

}

function goToGift(){

showScreen("giftScreen");

}
function openGift(){

document.getElementById("giftBox").style.display="none";

document.getElementById("giftMessage").style.display="block";

}

function goToVideo(){

showScreen("videoScreen");

const video=document.getElementById("birthdayVideo");

video.currentTime=0;

video.play().catch(()=>{});

}

function replayVideo(){

const video=document.getElementById("birthdayVideo");

video.currentTime=0;

video.play();

}

function goToHug(){

showScreen("hugScreen");

}
function goToMoon(){

showScreen("moonScreen");

}
function goToFinale(){

showScreen("finalScreen");

startFinalCelebration();

}
function startFinalCelebration(){

startConfetti();

createFireworks();

}

function createFireworks(){

const colors=[
"#ff1493",
"#ffd700",
"#00e5ff",
"#7CFC00",
"#ffffff"
];

for(let i=0;i<40;i++){

setTimeout(()=>{

const fire=document.createElement("div");

fire.className="firework";

fire.style.left=Math.random()*100+"%";

fire.style.top=(10+Math.random()*70)+"%";

fire.style.background=colors[Math.floor(Math.random()*colors.length)];

document.body.appendChild(fire);

setTimeout(()=>{

fire.remove();

},1800);

},i*180);

}

}

function restartJourney(){

location.reload();

}