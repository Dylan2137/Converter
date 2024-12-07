 // Declare userInput globally so it's accessible outside the function
let userInput = "";
let selectedOption = "";
const op1 = "Converts angled brackets into HTML special characters, so you can display them on a webpage.";
const op2 = "Basic letter to number encryptor. a=1 A=27, converts punctuation marks into spaces";
const op3 = "Decrypts the previous option, 1=a 27=A";
const op4 = "Flips the id of the letter, eg. a=z b=y etc. can be used in conjunction with the letter to number code to ensure more safety.";
const op5 = "Converts letters and numbers into morse code, spaces are turned into /. Don't use punctuation marks";

const rephtml = {
    "<": "&#60;",
    ">": "&#62;",
    
}
const repa1 = {
    "a": "1 ", "b": "2 ", "c": "3 ", "d": "4 ", "e": "5 ", "f": "6 ", "g": "7 ", "h": "8 ",
    "i": "9 ", "j": "10 ", "k": "11 ", "l": "12 ", "m": "13 ", "n": "14 ", "o": "15 ", "p": "16 ",
    "q": "17 ", "r": "18 ", "s": "19 ", "t": "20 ", "u": "21 ", "v": "22 ", "w": "23 ", "x": "24 ",
    "y": "25 ", "z": "26 ",
    "A": "27 ", "B": "28 ", "C": "29 ", "D": "30 ", "E": "31 ", "F": "32 ", "G": "33 ", "H": "34 ",
    "I": "35 ", "J": "36 ", "K": "37 ", "L": "38 ", "M": "39 ", "N": "40 ", "O": "41 ", "P ": "42 ",
    "Q": "43 ", "R": "44 ", "S ": "45 ", "T": "46 ", "U": "47 ", "V": "48 ", "W": "49 ", "X": "50 ",
    "Y": "51 ", "Z": "52 "
}
const rep1a = {
    "1 ": "a", "2 ": "b", "3 ": "c", "4 ": "d", "5 ": "e", "6 ": "f", "7 ": "g", "8 ": "h",
    "9 ": "i", "10 ": "j", "11 ": "k", "12 ": "l", "13 ": "m", "14 ": "n", "15 ": "o", "16 ": "p",
    "17 ": "q", "18 ": "r", "19 ": "s", "20 ": "t", "21 ": "u", "22 ": "v", "23 ": "w", "24 ": "x",
    "25 ": "y", "26 ": "z",
    "27 ": "A", "28 ": "B", "29 ": "C", "30 ": "D", "31 ": "E", "32 ": "F", "33 ": "G", "34 ": "H",
    "35 ": "I", "36 ": "J", "37 ": "K", "38 ": "L", "39 ": "M", "40 ": "N", "41 ": "O", "42 ": "P",
    "43 ": "Q", "44 ": "R", "45 ": "S", "46 ": "T", "47 ": "U", "48 ": "V", "49 ": "W", "50 ": "X",
    "51 ": "Y", "52 ": "Z"
}
const repaz = {
    "a": "z", "b": "y", "c": "x", "d": "w", "e": "v", "f": "u", "g": "t", "h": "s",
    "i": "r", "j": "q", "k": "p", "l": "o", "m": "n", "n": "m", "o": "l", "p": "k",
    "q": "j", "r": "i", "s": "h", "t": "g", "u": "f", "v": "e", "w": "d", "x": "c",
    "y": "b", "z": "a",
    "A": "Z", "B": "Y", "C": "X", "D": "W", "E": "V", "F": "U", "G": "T", "H": "S",
    "I": "R", "J": "Q", "K": "P", "L": "O", "M": "N", "N": "M", "O": "L", "P": "K",
    "Q": "J", "R": "I", "S": "H", "T": "G", "U": "F", "V": "E", "W": "D", "X": "C",
    "Y": "B", "Z": "A"
}
const repmorse = {
    "a": ".- ", "b": "-... ", "c": "-.-. ", "d": "-.. ", "e": ". ", "f": "..-. ", "g": "--. ", "h": ".... ",
    "i": ".. ", "j": ".--- ", "k": "-.- ", "l": ".-.. ", "m": "-- ", "n": "-. ", "o": "--- ", "p": ".--. ",
    "q": "--.- ", "r": ".-. ", "s": "... ", "t": "- ", "u": "..- ", "v": "...- ", "w": ".-- ", "x": "-..- ",
    "y": "-.-- ", "z": "--.. ", 
    "A": ".- ", "B": "-... ", "C": "-.-. ", "D": "-.. ", "E": ". ", "F": "..-. ", "G": "--. ", "H": ".... ",
    "I": ".. ", "J": ".--- ", "K": "-.- ", "L": ".-.. ", "M": "-- ", "N": "-. ", "O": "--- ", "P": ".--. ",
    "Q": "--.- ", "R": ".-. ", "S": "... ", "T": "- ", "U": "..- ", "V": "...- ", "W": ".-- ", "X": "-..- ",
    "Y": "-.-- ", "Z": "--.. ", " ": "/", "0": "----- ", "1": ".---- ", "2": "..--- ", "3": "...-- ", "4": "....- ", "5": "..... ", "6": "-.... ",
    "7": "--... ", "8": "---.. ", "9": "----. "
}
let replacement;


 function initialize() {
     const promptBox = document.querySelector('.prompt-box');
     const saveButton = document.getElementById('saveButton');
     const output = document.getElementById('output');
     
     

     saveButton.addEventListener('click', () => {
         userInput = promptBox.value;
         console.log("User Input Saved:", userInput);
         const regex = new RegExp(Object.keys(replacement).join('|'), 'g');

         let userOutput = userInput.replace(regex, (match) => replacement[match] || match);
         output.textContent = userOutput;
         output.textContent = userOutput;

     });

 }
// Initialize the selected option variable

function initializeDropdown() {
    const promptBox = document.querySelector('.prompt-box');
    const saveButton = document.getElementById('saveButton');
    const output = document.getElementById('output');
    const dropdown = document.getElementById('dropdownMenu');
    const displaySelectedOption = document.getElementById('selectedOption');
    const desc = document.getElementById('desc');
    const theme = document.querySelector('.themes')
    const displaySelectedTheme = document.getElementById('selectedTheme')
    const looks = document.querySelector(".looks");

    // Add an event listener to capture changes in selection
    dropdown.addEventListener('change', (event) => {
        // Update the selected option variable with the current selection
        selectedOption = event.target.value;

        if(selectedOption == "op1"){
            desc.textContent = op1;
            replacement = rephtml;
        }
        else if (selectedOption == "op2"){
            desc.textContent = op2;
            replacement = repa1;
        }
        else if (selectedOption == "op3"){
            desc.textContent = op3;
            replacement = rep1a;
        }
        else if (selectedOption == "op4"){
            desc.textContent = op4;
            replacement = repaz;
        }
        else if (selectedOption == "op5"){
            desc.textContent = op5;
            replacement = repmorse;
        }
    
    });
    //switch themes depending on selected option
    theme.addEventListener('change', (event) => {
        selectedTheme = event.target.value;
        if (selectedTheme == "brown"){
            document.body.style.backgroundColor = "#2F2504";
            document.body.style.color = "000000";
            promptBox.style.borderColor = "#2E282A";
            promptBox.style.backgroundColor = "#B2945B"
            output.style.borderColor = "#2E282A";
            output.style.backgroundColor = "#B2945B"
            saveButton.style.borderColor = "#2E282A";
            saveButton.style.backgroundColor = "#B2945B";
            desc.style.backgroundColor = "#B2945B";
            desc.style.borderColor = "#2E282A";
            dropdown.style.backgroundColor = "#2E282A";
            looks.style.backgroundColor = "#B2945B";
            theme.style.backgroundColor = "#B2945B";
            theme.style.borderColor = "#2E282A";
        }
        else if (selectedTheme == "blue"){
            document.body.style.backgroundColor = "#304D6D";
            document.body.style.color = "#a7cced";
            promptBox.style.borderColor = "#63adf2";
            promptBox.style.backgroundColor = "#545E75"
            output.style.borderColor = "#63adf2";
            output.style.backgroundColor = "#545E75"
            saveButton.style.borderColor = "#63adf2";
            saveButton.style.backgroundColor = "#545E75";
            desc.style.backgroundColor = "#545E75";
            desc.style.borderColor = "#63adf2";
            dropdown.style.backgroundColor = "#63adf2";
            looks.style.backgroundColor = "#545E75";
            theme.style.backgroundColor = "#545E75";
            theme.style.borderColor = "#63adf2";
            
        }
        else if (selectedTheme == "green"){
            document.body.style.backgroundColor = "#1A2E1A";
            document.body.style.color = "#D1E7D1";
            promptBox.style.borderColor = "#2A442A";
            promptBox.style.backgroundColor = "#4F8C4F";
            output.style.borderColor = "#2A442A";
            output.style.backgroundColor = "#4F8C4F";
            saveButton.style.borderColor = "#2A442A";
            saveButton.style.backgroundColor = "#4F8C4F";
            desc.style.backgroundColor = "#4F8C4F";
            desc.style.borderColor = "#2A442A";
            dropdown.style.backgroundColor = "#2A442A";
            looks.style.backgroundColor = "#4F8C4F";
            theme.style.backgroundColor = "#4F8C4F";
            theme.style.borderColor = "#2A442A";

        }
        else if (selectedTheme == "purple"){
            document.body.style.backgroundColor = "#2A1A2E";
            document.body.style.color = "#E1D1E7";
            promptBox.style.borderColor = "#3A2A44";
            promptBox.style.backgroundColor = "#8C4F8C";
            output.style.borderColor = "#3A2A44";
            output.style.backgroundColor = "#8C4F8C";
            saveButton.style.borderColor = "#3A2A44";
            saveButton.style.backgroundColor = "#8C4F8C";
            desc.style.backgroundColor = "#8C4F8C";
            desc.style.borderColor = "#3A2A44";
            dropdown.style.backgroundColor = "#3A2A44";
            looks.style.backgroundColor = "#8C4F8C";
            theme.style.backgroundColor = "#8C4F8C";
            theme.style.borderColor = "#3A2A44";
        }
    });
}

 // Run the initialize function once the DOM is fully loaded
 document.addEventListener('DOMContentLoaded', () => {
    initialize();
    initializeDropdown();
});
