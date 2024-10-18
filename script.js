
let score = 0
var paused=true
for (var i = 0; i < 100; i++) {
  let spot = document.createElement("div")
  spot.classList.add("spot")
  spot.addEventListener("click", function() {
    console.log("triggered")
    if (this.textContent == "click me" && !paused) {
    correct()
      this.textContent = "";
      this.style.backgroundColor="pink"
      score++
      document.querySelector(".score").textContent = score
      let random = Math.floor(Math.random() * 100)
       document.querySelectorAll(".spot")[random].style.backgroundColor="cyan"
      document.querySelectorAll(".spot")[random].textContent = "click me"
    }
    else{
    wrong()
    }
  })
  document.querySelector(".container").appendChild(spot)

}
let random = Math.floor(Math.random() * 100)
document.querySelectorAll(".spot")[random].textContent = "click me"
document.querySelectorAll(".spot")[random].style.backgroundColor="#00ffff"
var startButton=document.querySelector(".start");
async function wrong(){ new Audio('https://www.myinstants.com/media/sounds/extremely-loud-incorrect-buzzer_0cDaG20.mp3').play();}
async function correct(){new Audio("https://github.com/Logan-Garcia-inc/click-me-game/raw/refs/heads/main/success-fanfare-trumpets-6185.mp3").play()
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
var timer=document.querySelector(".timer");
async function start(){
if (!paused){
return
}
paused=false;
 score=0
      document.querySelector(".score").textContent = score
  var time=10;
  while (time>0){
  	time-=1
    timer.textContent=time;
  	await sleep(1000)
    
  }
     
  paused=true
}
var startButton =document.querySelector(".start");
startButton.addEventListener("click",start)

