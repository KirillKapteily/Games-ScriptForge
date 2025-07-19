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
let numCalcInp = document.querySelector(".calc__time__inp");
let numCalcBtn = document.querySelector(".calc__time__btn")
let numCalcText = document.querySelector(".calc__time__text")

let calcTimeLogic = () => {
    let inputed = Number(numCalcInp.value);
    let hours = Math.floor(inputed / 60);
    let other = hours % 60;
    let mins = inputed % 60;

    if (isNaN(inputed)) {
        alert("Введіть число");
        return;
    }

    numCalcText.textContent = `${other}годин ${mins}хвилин`;

}

numCalcBtn.addEventListener("click", calcTimeLogic);

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
    if ((inputed % 4 === 0 && inputed % 100)) {
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

// enter 3 nums 
let enterNumText = document.querySelector(".enter__numbers__text");

let numInp1 = document.querySelector(".inp__1");
let numInp2 = document.querySelector(".inp__2");
let numInp3 = document.querySelector(".inp__3");

let numLogic = () => {
    let inputed1 = Number(numInp1.value);
    let inputed2 = Number(numInp2.value);
    let inputed3 = Number(numInp3.value);

    if (inputed1 !== '' && inputed2 !== '' && inputed3 !== '') {
        let num1 = Number(numInp1.value);
        let num2 = Number(numInp2.value);
        let num3 = Number(numInp3.value);

        let max = Math.max(num1, num2, num3);

        enterNumText.textContent = `Найбільше число, яке ви ввели - (${max})`
    }
}

numInp1.addEventListener('input', numLogic);
numInp2.addEventListener('input', numLogic);
numInp3.addEventListener('input', numLogic);


//scientists
let stsList = document.querySelector(".sts__list");

let stsBtn1 = document.querySelector(".sts__btn__1");
let stsBtn2 = document.querySelector(".sts__btn__2");
let stsBtn3 = document.querySelector(".sts__btn__3");
let stsBtn4 = document.querySelector(".sts__btn__4");
let stsBtn5 = document.querySelector(".sts__btn__5");
let stsBtn6 = document.querySelector(".sts__btn__6");
let stsBtn7 = document.querySelector(".sts__btn__7");
let stsBtn8 = document.querySelector(".sts__btn__8");
let stsBtn9 = document.querySelector(".sts__btn__9");

let stsItemContent = document.querySelector(".sts__item__content")

let stsContent1 = document.querySelector(".sts__content__1");
let stsContent2 = document.querySelector(".sts__content__2");
let stsContent3 = document.querySelector(".sts__content__3");
let stsContent4 = document.querySelector(".sts__content__4");
let stsContent5 = document.querySelector(".sts__content__5");
let stsContent6 = document.querySelector(".sts__content__6");
let stsContent7 = document.querySelector(".sts__content__7");
let stsContent8 = document.querySelector(".sts__content__8");
let stsContent9 = document.querySelector(".sts__content__9");
let stsContent10 = document.querySelector(".sts__content__10");
let stsContent11 = document.querySelector(".sts__content__11");
let stsContent12 = document.querySelector(".sts__content__12");
let stsContent13 = document.querySelector(".sts__content__13");

const scientists = [
    {
        name: "Albert",
        surname: "Einstein",
        born: 1879,
        dead: 1955,
        id: 1
    },
    {
        name: "Isaac",
        surname: "Newton",
        born: 1643,
        dead: 1727,
        id: 2
    },
    {
        name: "Galileo",
        surname: "Galilei",
        born: 1564,
        dead: 1642,
        id: 3
    },
    {
        name: "Marie",
        surname: "Curie",
        born: 1867,
        dead: 1934,
        id: 4
    },
    {
        name: "Johannes",
        surname: "Kepler",
        born: 1571,
        dead: 1630,
        id: 5
    },
    {
        name: "Nicolaus",
        surname: "Copernicus",
        born: 1473,
        dead: 1543,
        id: 6
    },
    {
        name: "Max",
        surname: "Planck",
        born: 1858,
        dead: 1947,
        id: 7
    },
    {
        name: "Katherine",
        surname: "Blodgett",
        born: 1898,
        dead: 1979,
        id: 8
    },
    {
        name: "Ada",
        surname: "Lovelace",
        born: 1815,
        dead: 1852,
        id: 9
    },
    {
        name: "Sarah E.",
        surname: "Goode",
        born: 1855,
        dead: 1905,
        id: 10
    },
    {
        name: "Lise",
        surname: "Meitner",
        born: 1878,
        dead: 1968,
        id: 11
    },
    {
        name: "Hanna",
        surname: "Hammarström",
        born: 1829,
        dead: 1909,
        id: 12
    }
];

let bornedIn19th = () => {
    const nineth = scientists.filter(searched => searched.born >= 1800 && searched.born <= 1900);

    nineth.forEach(element => {
        console.log(element.name);
        document.querySelectorAll('.sts__item__content').forEach(item => {
            nineth.forEach(scientist => {
                if (item.textContent.includes(scientist.name)) {
                    item.classList.add("green");
                }
            });
        });
    });
}

let sortByYearsOfLife = () => {
    let sorted = scientists.slice().sort((a, b) => a.born - b.born);
    let years = sorted.map(element => element.name);
     stsList.innerHTML = '';
    years.forEach(year => {
        const liC = document.createElement('li');
        const Divid = document.createElement('div');
        Divid.classList.add("sts__item__content");
        Divid.textContent = year;
        liC.appendChild(Divid);
        stsList.appendChild(liC);
    });
    console.log(years);
}

let findNamesThatStartsOnC = () => {
    let filtered = scientists.filter(scientist => scientist.name.startsWith("S"));
    let names = filtered.map(element => element.name);
    console.log(names);
    document.querySelectorAll('.sts__item__content').forEach(item => {
        if (item.textContent.startsWith("S")) {
            item.classList.add("green");
        }
    });
}

let delNamesThatStartsOnA = () => {
    let filtered = scientists.filter(scientist => scientist.name.startsWith("A"));
    let names = filtered.map(element => element.name);
    document.querySelectorAll('.sts__item__content').forEach(item => {
        if (item.textContent.startsWith("A")) {
            item.classList.add("none");

        }
    });
    // console.log(names);
}

let findSinetistThatBornedLate = () => {
    let sorted = scientists.slice().sort((a, b) => a.born - b.born);
    let last = sorted.map(element => element.name);
    stsItemContent.classList.add("green");
    console.log(last[10]);
}

let findSinetistThatBornedLatestAndErlyest = () => {
    let sorted = scientists.slice().sort((a, b) => a.born - b.born);
    let last = sorted.map(element => element.name);
    document.querySelectorAll('.sts__item__content').forEach(item => {
        last.forEach(() => {
            if (item.textContent.includes(last[0]) || item.textContent.includes(last[10])) {
                item.classList.add("green");
            }
        });
    });
    console.log(last[10]);
    console.log(last[0]);


}

let sortedByAlphabet = () => {
    let sorted = scientists.slice().sort((a, b) => a.name.localeCompare(b.name));
    let names = sorted.map(scientist => scientist.name + " " + scientist.surname);
    console.log(names);
    stsList.innerHTML = '';
    names.forEach(name => {
        const liC = document.createElement('li');
        const Divid = document.createElement('div');
        Divid.classList.add("sts__item__content");
        Divid.textContent = name;
        liC.appendChild(Divid);
        stsList.appendChild(liC);
    });
}

let foundBirthYearOfAlbert = () => {
    const albert = scientists.find(searched => searched.name === "Albert" && searched.surname === "Einstein");
    if (albert) {
        console.log(albert.born);
        stsItemContent.classList.add("green");
    }
}

let findSinetistestWithIdenticalFirstWord = () => {
    let filteredNames = scientists.filter(started => started.name.startsWith("H") && started.surname.startsWith("H"));
    let last = filteredNames.map(element => element.name);
     document.querySelectorAll('.sts__item__content').forEach(item => {
        if (item.textContent.startsWith("H")&& item.textContent.startsWith("H")) {
            item.classList.add("green");
        }
    });
    console.log(last);
}
stsBtn1.addEventListener("click", bornedIn19th);
stsBtn2.addEventListener("click", sortedByAlphabet);
stsBtn3.addEventListener("click", sortByYearsOfLife);
stsBtn4.addEventListener("click", findSinetistThatBornedLate);
stsBtn5.addEventListener("click", foundBirthYearOfAlbert);
stsBtn6.addEventListener("click", findNamesThatStartsOnC);
stsBtn7.addEventListener("click", delNamesThatStartsOnA);
stsBtn8.addEventListener("click", findSinetistThatBornedLatestAndErlyest);
stsBtn9.addEventListener("click", findSinetistestWithIdenticalFirstWord);