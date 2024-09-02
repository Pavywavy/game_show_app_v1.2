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
    return match;
};



// event listener for on screen keyboard
qwerty.addEventListener("click", e => {
        if ( e.target.tagName === "BUTTON") { 
            e.target.classList.add("chosen");
            e.target.style.disabled = true; 
let letterFound = checkLetter(e.target);
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
            missed++;
        };
    };
});




// const totalHearts = document.querySelector("ol");
// const listOfHearts = document.querySelector(".tries:first-child");
// const lostHearts = document.querySelector("img");
// totalHearts.firstChild.src = "images/lostHeart.png";
// listOfHearts.remove();
// console.log(totalHearts, listOfHearts, lostHearts);