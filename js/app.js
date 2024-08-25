let qwerty = document.getElementById("qwerty");
let phrase = document.getElementById("phrase");
let resetButton = document.querySelector(".btn__reset");

let missed = 0;
let match = "null";

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
   const getRandomPhraseAsArray = (arr) => {
        let randomPhrase = Math.floor(Math.random() * arr.length);
        return arr[randomPhrase].split("");
   };

   const randomPhrases = getRandomPhraseAsArray(phrases);

   console.log(randomPhrases);

// adds random letter from phrase to display
   const addPhraseToDisplay = (randomPhrases) => {
        const list = document.querySelector("ul");
        for (i = 0; i < randomPhrases.length; i++) {
            list.insertAdjacentHTML("afterbegin", `<li>${randomPhrases}</li>`);
            if (randomPhrases.textContent === " ") {
                document.getElementById("space");
                randomPhrases.classList.add("space");
               } else {
                document.getElementById("letter");
                randomPhrases.classList.add("letter");
               }; 
        };
   };

  const randomLetters = addPhraseToDisplay(randomPhrases);

function checkLetter(buttonClick) {
    allTheLetters = randomLetters.getElementById("letter");
}