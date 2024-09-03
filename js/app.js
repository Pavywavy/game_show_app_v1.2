let qwerty = document.getElementById("qwerty");
let phrase = document.getElementById("phrase");
let resetButton = document.querySelector(".btn__reset");
let startButton = document.querySelector(".start");
let winScreen = document.getElementById("overlay");
let loseScreen = document.getElementById("overlay");
let missed = 0;

//phrases

const phrases = [ 
    "I love Tacos", 
    "Hamburgers are great",
    "Chicken sandwhich is for me",
    "Hotdogs are interesting",
    "Salmon is fishy"
    ];

    

// on click hide start screen overlay
   startButton.addEventListener("click", () => {
        startButton.style.display = "none";
   });

   // return a random phrase from an array
   const getRandomPhraseAsArray = arr => {
        let randomPhrase = Math.floor(Math.random() * arr.length);
        return arr[randomPhrase].split("");
   };

   const randomPhrases = getRandomPhraseAsArray(phrases);


// adds random letter from phrase to display
const addPhraseToDisplay = arr => {
    const list = document.querySelector("ul");
    for (let i = 0; i < arr.length; i++) {
        const item = document.createElement("li");
        console.log(item);
        if (arr[i] === " ") {
            list.append(item);
            document.querySelector(".space");
            item.classList.add("space");
            item.innerText = `${arr[i]}`;
           } else {
            list.append(item);
            document.querySelector(".letter");
            item.classList.add("letter");
            item.innerText = `${arr[i]}`;
           }; 
    };
    
};

  const randomLetters = addPhraseToDisplay(randomPhrases);

  // checks to see if letter matches
const checkLetter = button => {
    let allTheLetters = document.querySelectorAll(".letter");
    let match = null;
    for (i = 0; i < allTheLetters.length; i++) {
        if ( button.textContent.toLowerCase() === allTheLetters[i].textContent.toLowerCase() ) {
            allTheLetters[i].classList.add("show");
            match = allTheLetters[i].textContent;
        };
    };
    return match;
};

// checkwin function to see if you win
const letter = document.querySelectorAll(".letter");
const show = document.querySelectorAll(".show");
const winOrLoseStatement = document.querySelector(".title");
const checkWin = () => {
    if (letter.length === show.length) {
        winScreen.style.display = "flex";
        winOrLoseStatement.textContent = "You Win!";
    } else if (missed >= 5) {
        loseScreen.style.display = "flex";
        winOrLoseStatement.textContent = "You lose!";
        resetButton.style.display = "none";
    };
};


// event listener for on screen keyboard
qwerty.addEventListener("click", e => {
        if ( e.target.tagName === "BUTTON") { 
            e.target.classList.add("chosen");
            e.target.style.disabled = true; 
let letterFound = checkLetter(e.target);

//this if statement checks to see if the target button is equal to null/doesnt match the correct letter then removes a heart and adds a png of an empty heart
        if ( letterFound === null ) {
            const totalHearts = document.querySelector("li.tries");
            const lostHearts = document.querySelector("ol");
            const item = document.createElement("li");
            item.insertAdjacentHTML(
                "afterbegin",
                `<img src="images/lostHeart.png" height="35px" width="30px">`
            );
            totalHearts.parentNode.removeChild(totalHearts);
            lostHearts.src = "images/lostHeart.png";
            lostHearts.prepend(item);
            console.log(totalHearts);
            console.log(lostHearts);
            missed += + 1;
        };
    };
    checkWin();
});

console.log(letter);
console.log(show);