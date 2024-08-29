let qwerty = document.getElementById("qwerty");
let phrase = document.getElementById("phrase");
let resetButton = document.querySelector("#overlay");


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
   resetButton.addEventListener("click", () => {
        resetButton.style.display = "none";
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
};


// event listener for on screen keyboard
qwerty.addEventListener("click", e => {
    if ( e.target.tagName === "BUTTON" ) { 
        e.target.classList.add("chosen");
        e.target.style.disabled = true;
    };
    let selectedLetter = checkLetter(e.target);
    if (selectedLetter !== randomLetters) {
        let lostHearts = document.querySelector(".tries").src = "images/lostHeart.png";
        
        missed++;
    };
});