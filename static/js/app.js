const USERNAME="Pattu";
const PASSWORD="2108";

const music=document.getElementById("bgMusic");

const beginBtn=document.getElementById("beginBtn");

createStars();

createHearts();

function createStars(){

const stars=document.getElementById("stars");

for(let i=0;i<220;i++){

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

const next=document.getElementById(id);

next.classList.add("active");

next.animate([

{
opacity:0,
transform:"scale(.95)"
},

{
opacity:1,
transform:"scale(1)"
}

],{

duration:700,

easing:"ease"

});

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

if(user===USERNAME && pass===PASSWORD){

puppy.src="static/images/puppy_love.png";

error.style.color="#2e7d32";

error.innerHTML="🎉 Yay! Welcome back, My Favourite Akka ❤️";

setTimeout(()=>{

showLoading();

},1500);

}

else{

puppy.src="static/images/puppy_angry.png";

error.style.color="#d81b60";

error.innerHTML="🐶 Oops! That doesn't sound like my Princess. Please try again. ❤️";

document.querySelector("#loginScreen .card").animate([

{transform:"translateX(-12px)"},
{transform:"translateX(12px)"},
{transform:"translateX(-12px)"},
{transform:"translateX(12px)"},
{transform:"translateX(0px)"}

],{

duration:500

});

setTimeout(()=>{

puppy.src="static/images/puppy_happy.png";

error.innerHTML="";

},2200);

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
document.getElementById("envelope").style.display="block";
document.getElementById("letterContent").style.display="none";
document.getElementById("typingText").innerHTML="";
document.getElementById("letterContinue").classList.remove("show");
}








function openLetter(){
document.getElementById("envelope").style.display="none";
document.getElementById("letterContent").style.display="block";
typeLetter();
}

const letter=`Hi My Dearest Akka ❤️,

Happy Birthday to the most precious person my life unexpectedly gifted me.

Sometimes I sit quietly and think... Out of millions of people in this world, how did our paths cross?

You were born in Andhra Pradesh.
I was born in Tamil Nadu.

Two different states.
Two different families.
Two completely different lives.

Yet destiny had a beautiful plan.

Wipro gave us a project, but God gave me an Akka.

For project reasons I moved from Tamil Nadu to Hyderabad. I thought I was only changing my work location.

Little did I know... I was walking towards one of the greatest blessings of my life.

I still don't know how we became so close.

There wasn't a plan.
There wasn't a reason.

It just happened...
Slowly...
Naturally...
Beautifully...

Today, when I think about my life, I realize that you became much more than a colleague and much more than a friend.

You became my Akka.

Not by blood...
Not by birth...
But by heart.

People often say,
"Relationships are created by blood."

I don't completely believe that anymore.

Because you proved that some relationships are written directly by God.

They don't need blood.
They only need love, care, trust, understanding and a pure heart.

Whenever I needed someone, you were there.

Whenever I felt low, your words made me stronger.

Whenever I smiled, you smiled with me.

Whenever I achieved something, you celebrated it like your own.

Those moments may have looked small, but they became priceless memories in my heart.

Some people stay in our lives for a season.

Some stay for a few years.

But very few people quietly become a permanent part of our heart.

You are one of them.

Today, you don't just have a place in my contacts.

You have a place in my heart.

And no matter what happens in life...

No distance...
No city...
No company...
No time...

Can ever replace that place.

Life may take us to different projects, different companies or even different countries.

But one thing I pray never changes...

Our beautiful bond.

Thank you for every smile.

Thank you for every conversation.

Thank you for every piece of advice.

Thank you for treating me like your own Thambi.

I honestly don't know what good thing I did in life to deserve an Akka like you.

On your special day, I don't wish for expensive gifts or grand celebrations.

I simply pray...

May your smile never fade.

May your heart always stay peaceful.

May happiness follow you wherever you go.

May success walk beside you.

May every dream in your heart become reality.

May God always protect you, guide you and bless you with endless happiness.

And I want to make you one promise...

As long as I breathe...

You'll always have a Thambi who silently prays for your happiness.

No matter where life takes us...

No one can ever replace the place you've earned in my heart.

Happy Birthday once again, My Dearest Akka. ❤️

With endless love,
gratitude,
respect,
and countless beautiful memories...

Always Your Loving Thambi,

❤️ Vignesh R`;



function typeLetter(){

const target=document.getElementById("typingText");

target.innerHTML="";

let i=0;

const timer=setInterval(()=>{

target.innerHTML+=letter.charAt(i);

i++;

if(i>=letter.length){

clearInterval(timer);

setTimeout(()=>{

document.getElementById("letterContinue").classList.add("show");

},800);

}

},35);

}


function goToGallery(){

currentPhoto=0;

updateGallery();

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

document.getElementById("giftBox").style.display="block";

document.getElementById("giftMessage").style.display="none";

document.getElementById("giftContinue").classList.remove("show");

}

function openGift(){

document.getElementById("giftBox").style.display="none";

document.getElementById("giftMessage").style.display="block";

setTimeout(()=>{

document.getElementById("giftContinue").classList.add("show");

},1200);

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

function createPetals(){

for(let i=0;i<25;i++){

const petal=document.createElement("div");

petal.className="petal";

petal.innerHTML="🌸";

petal.style.left=Math.random()*100+"%";

petal.style.animationDuration=(8+Math.random()*6)+"s";

petal.style.animationDelay=Math.random()*6+"s";

document.body.appendChild(petal);

}

}

createPetals();