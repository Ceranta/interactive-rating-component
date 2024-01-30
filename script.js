const numbers = document.querySelectorAll(".number")
const submitButton = document.querySelector(".submitButton")
const main = document.querySelector(".window")
const thankYou = document.querySelector(".thankYou")
const value = document.querySelector(".value")

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    value.innerHTML = number.innerHTML;


  })
})

submitButton.addEventListener("click", () => {
  main.classList.add("hide")
  thankYou.classList.remove("hide")
})