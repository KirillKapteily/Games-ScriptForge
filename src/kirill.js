//num guess
let numInp = document.querySelector(".num__inp");
let numBtn = document.querySelector(".num__btn")
let numText = document.querySelector(".num__text")

let gameLogic = () => {
    let inputed = Number(numInp.value);
    let randomNumber = (Math.floor(Math.random() * (10 - 1) + 1)) + 1;

    if (inputed === randomNumber) {
        numText.classList.remove("red")
        numText.classList.add("green")

        numText.textContent = `Вітаю, ви вгадали число! (${inputed}) `

    } else {
        numText.classList.remove("green")
        numText.classList.add("red");

        numText.textContent = `Ви програли, комп’ютер загадав (${randomNumber}) `
    }
}
numBtn.addEventListener("click", gameLogic);

//time calc
// let numCalcInp = document.querySelector(".calc__time__inp");
// let numCalcBtn = document.querySelector(".calc__time__btn")
// let numCalcText = document.querySelector(".calc__time__text")

// let calcTimeLogic = () => {
//      let inputed = Number(numCalcInp.value);
// }