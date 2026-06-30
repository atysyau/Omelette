const buttonElement = document.querySelector("#calculate-ingredients-button")
const portionElement = document.querySelector("#portion-input")
const eggsElement = document.querySelector("#eggs-amount")
const butteroilElement = document.querySelector("#butter-or-oil-amount")

buttonElement.addEventListener("click", function () { 
    let portionInput = portionElement.value
    let portions = Number(portionInput)
    let eggsnumberONE = 2 * portions
    let eggsnumberTWO = 3 * portions

    eggsElement.textContent = `${eggsnumberONE}-${eggsnumberTWO}`
    butteroilElement.textContent = portions
})