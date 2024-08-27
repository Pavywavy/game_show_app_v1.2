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
const addPhraseToDisplay = (arr) => {
    const list = document.querySelector("ul");
    for (let i = 0; i < arr.length; i++) {
        const item = document.createElement("li");
        if (arr[i] === " ") {
            list.append(item);
            document.querySelector(".space");
            item.classList.add("space");
           } else {
            list.append(item);
            document.querySelector(".letter");
            item.classList.add("letter");
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