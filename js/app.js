let qwerty = document.getElementById("qwerty");
let phrase = document.getElementById("phrase");
let resetButton = document.querySelector(".btn__reset");

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
                document.querySelector(".space");
                list.classList.add("space");
               } else {
                document.querySelector(".letter");
                list.classList.add("letter");
               }; 
        };
   };

  const randomLetters = addPhraseToDisplay(randomPhrases);

  // checks to see if letter matches
const checkLetter = button => {
    let allTheLetters = randomLetters.getElementById("letter");
    let match = "null";
    for (i = 0; i < allTheLetters.length; i++) {
        if ( button === allTheLetters[i] ) {
            allTheLetters.classList.add("show");
            match = allTheLetters.textContent;
        };
        return match;
    };
}

qwerty.addEventListener("click", e => {


});
