let score = 0
for (var i = 0; i < 100; i++) {

  let spot = document.createElement("div")
  spot.classList.add("spot")
  spot.addEventListener("click", function() {
    console.log("triggered")
    if (this.textContent == "click me") {
      this.textContent = "";
      this.style.backgroundColor="pink"
      console.log("succeded")
      score++
      document.querySelector(".score").textContent = score
      let random = Math.floor(Math.random() * 100)
       document.querySelectorAll(".spot")[random].style.backgroundColor="cyan"
      document.querySelectorAll(".spot")[random].textContent = "click me"
      console.log(random)
    }
  })
  document.querySelector(".container").appendChild(spot)

}
let random = Math.floor(Math.random() * 100)
document.querySelectorAll(".spot")[random].textContent = "click me"

document.querySelectorAll(".spot")[random].style.backgroundColor="cyan"
