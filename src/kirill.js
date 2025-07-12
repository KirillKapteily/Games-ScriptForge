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

//sps
let spsItem1 = document.querySelector(".sps__item__1");
let spsItem2 = document.querySelector(".sps__item__2");
let spsItem3 = document.querySelector(".sps__item__3");
let spsBtn = document.querySelector(".sps__btn");
let spsStoneBtn = document.querySelector(".sps__stone");
let spsScissosBtn = document.querySelector(".sps__scissors");
let spsPaperBtn = document.querySelector(".sps__paper");
let spsResult = document.querySelector(".sps__result");
// let numCalcText = document.querySelector(".calc__time__text")

let sps = [
    {
        name: "stone"
    },
    {
        name: "paper"
    },
    {
        name: "scissors"
    }
];

let spsStoneLogic = () => {
    let responseNum = Math.floor(Math.random() * 3);
    let response = sps[responseNum].name;
    console.log(response);
    spsBtn.textContent = `${response}`
    let yourMove = "stone";
    if (response === "paper") {
        console.log("you lose!");
        spsResult.classList.remove("green")
        spsResult.classList.add("red")
        spsResult.textContent = `Комп’ютер виграв раунд!`
    } else if (response === "stone") {
        console.log("draw!");
        spsResult.classList.remove("red")
        spsResult.classList.remove("green")
        spsResult.textContent = `Нічья`
    } else if (response === "scissors") {
        console.log("you win!");
        spsResult.classList.remove("red")
        spsResult.classList.add("green")
        spsResult.textContent = `Ви виграли раунд!`
    }
};

let spsScissosLogic = () => {
    let responseNum = Math.floor(Math.random() * 3);
    let response = sps[responseNum].name;
    console.log(response);
    spsBtn.textContent = `${response}`
    let yourMove = "sis";
    if (response === "paper") {
        console.log("you won!");
        spsResult.classList.remove("red")
        spsResult.classList.add("green")
        spsResult.textContent = `Ви виграли раунд!`
    } else if (response === "Scissos") {
        console.log("draw!");
        spsResult.classList.remove("red")
        spsResult.classList.remove("green")
        spsResult.textContent = `Нічья`
    } else if (response === "stone") {
        console.log("you lose!");
        spsResult.classList.remove("green")
        spsResult.classList.add("red")
        spsResult.textContent = `Комп’ютер виграв раунд!`
    }
};

let spsPaperLogic = () => {
    let responseNum = Math.floor(Math.random() * 3);
    let response = sps[responseNum].name;
    console.log(response);
    spsBtn.textContent = `${response}`
    let yourMove = "paper";
    if (response === "paper") {
        console.log("draw!");
        spsResult.classList.remove("red")
        spsResult.classList.remove("green")
        spsResult.textContent = `Нічья`
    } else if (response === "Scissos") {
        console.log("you lose!");
        spsResult.classList.remove("green")
        spsResult.classList.add("red")
        spsResult.textContent = `Комп’ютер виграв раунд!`
    } else if (response === "stone") {
        console.log("you won!");
        spsResult.classList.remove("red")
        spsResult.classList.add("green")
        spsResult.textContent = `Ви виграли раунд!`
    }
};

spsStoneBtn.addEventListener("click", spsStoneLogic);
spsScissosBtn.addEventListener("click", spsScissosLogic);
spsPaperBtn.addEventListener("click", spsPaperLogic);

//footer
let modalWindow = document.querySelector(".modalwindow");
let closeWindow = document.querySelector(".closewuindow");
let footerBtn = document.querySelector(".footer__btn");
let backdropF = document.querySelector(".backdrop");

let openWindow = () => {
    modalWindow.style.display = "block";
    backdropF.style.display = "block";
}


let closeWindows = () => {
    modalWindow.style.display = "none";
    backdropF.style.display = "none";
}


footerBtn.addEventListener("click", openWindow);
closeWindow.addEventListener("click", closeWindows);

//year check
let checkInp = document.querySelector(".check__inp");
let checkBtn = document.querySelector(".check__btn")
let checkedText = document.querySelector(".checked__text")

let checkLogic = () => {
    let inputed = Number(checkInp.value);
    if ((inputed % 4 === 0 && inputed % 100 !== 0)) {
        console.log("youve born in intercalary year");
        checkedText.textContent = "Ви народилися у високосний рік!"
        spsResult.classList.remove("red")
        checkedText.classList.add("green");
    } else {
        console.log("no");
        checkedText.textContent = "Ви народилися не у високосний рік!"
        spsResult.classList.remove("green")
        checkedText.classList.add("red");
    }
}

checkBtn.addEventListener("click", checkLogic);