// let gameSeq=[];
// let UserSeq=[];
// let btns=['yellow','green','red','blue'];

// let started=false;// This epresent game is not start
// let level=0;


// let h2=document.querySelector('h2');

// // on KeyPress game get started
// document.addEventListener("keypress", function(e){
    
//     if(!started){
//         console.log("Game Started");
//         started=true;

//         // gameSeq=[];
//         // UserSeq=[];
//         // level=0;
//         // h2.textContent = "Level: "+level;
//         Levelup();
       
//     }
// });

// function flash(button){
//     button.classlist.add('flash');
//     setTimeout(function(){button.classList.remove('flash');}, 1000);

// }

// function Levelup(){
//     level++;
//     h2.innerText=`Level: ${level}`;
//     let rm=Math.floor(Math.random()*3);

//     let rancolor=btns[rm];
//     let ranbtn=document.querySelector(`.${rancolor}`);
//     console.log("random color: "+ rancolor);
//     console.log("Random Index"+ rm);
//     console.log(ranbtn);
//     flash(ranbtn);

// }

let redbtn = document.querySelector('#redbtn');
let greenbtn = document.querySelector('#greenbtn');
let bluebtn = document.querySelector('#bluebtn');
let yellowbtn = document.querySelector('#yellowbtn');
let heading = document.querySelector('h2');

let level = [];  // Stores the game sequence
let userSequence = []; // Stores the user's sequence
let started = false; // To track if the game has started
let levelNumber = 0; // To track current level

// Function to generate a random number (0-3)
function rm() {
    return Math.floor(Math.random() * 4);
}

// Function to flash a button
function flashButton(button) {
    button.style.opacity = "0.5"; // Dim the button
    setTimeout(() => {
        button.style.opacity = "1"; // Reset opacity
    }, 500);
}

// Function to play the generated sequence for the user
function playSequence() {
    let i = 0;
    let interval = setInterval(() => {
        if (i < level.length) {
            let color = level[i];
            flashButton(document.querySelector(`#${color}btn`));
            i++;
        } else {
            clearInterval(interval);
        }
    }, 1000);
}

// Function to generate the next step in the game sequence
function nextLevel() {
    userSequence = []; // Reset user sequence
    levelNumber++;
    heading.textContent = `Level ${levelNumber}`;

    let randomIndex = rm();
    let colors = ["red", "green", "blue", "yellow"];
    let newColor = colors[randomIndex];

    level.push(newColor);
    console.log("Game Sequence:", level);

    playSequence(); // Show the sequence
}

// Function to track user clicks and check correctness
function userClick(button) {
    let color = button.id.replace("btn", ""); // Extract color name
    userSequence.push(color);
    console.log("User Clicks:", userSequence);

    let currentIndex = userSequence.length - 1;
    if (userSequence[currentIndex] !== level[currentIndex]) {
        heading.textContent = "Wrong! Game Over.";
        setTimeout(() => startOver(), 1000);
        return;
    }

    if (userSequence.length === level.length) {
        setTimeout(() => nextLevel(), 1000);
    }
}

// Function to start the game
function startGame() {
    if (!started) {
        started = true;
        level = [];
        levelNumber = 0;
        nextLevel();
    }
}

// Function to reset the game                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 

function startOver() {
    started = false;
    level = [];
    userSequence = [];
    levelNumber = 0;
    heading.textContent = "Game Over! Click any button to restart.";
}

// Add event listeners to buttons
redbtn.addEventListener('click', function () { userClick(this); });
greenbtn.addEventListener('click', function () { userClick(this); });
bluebtn.addEventListener('click', function () { userClick(this); });
yellowbtn.addEventListener('click', function () { userClick(this); });

// Start game on first click
document.addEventListener("keypress", startGame);
document.addEventListener("click", startGame);
