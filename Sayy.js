let colors=["red", "green", "blue", "yellow"];
let heading=document.querySelector('h2');
let classbtn=document.querySelectorAll('button');


let userSequence=[];  // user jo input karega 
let gameSequence=[];// store kaega  game sequence level
 let started = false;// Ye ensure karne ke liye ki abhi game start nahi hua
 let currentLevel =0;

 

document.addEventListener("keypress", function (e) {
    if (!started) {
        console.log("Game started");
        started = true;
        currentLevel=1; // Increment level
        // level.push(currentLevel);/// note karna 
        heading.innerText = `Level ${currentLevel}`;

        setTimeout(() =>{
            gameStart();
        },1000);
       
    }
});



function rm(){
return Math.floor(Math.random()*4);
}// Creating random number


// Now creating flash Function 
function flash(button){
// heading.innerText = "Watch the Pattern";
    let btn= document.querySelector(`#${button}`); // select current button
    btn.classList.add('flash');
    setTimeout(function(){
        btn.classList.remove('flash');// this will remove the flash
    }, 1000);
    
}
// ending flash function


// now creating array consisting colour
function gameStart(){
    gameSequence = [];
    userSequence=[];
    for(let i=0;i<currentLevel;i++){
        let rannum=rm();
    let color=colors[rannum];
    gameSequence.push(color);
    setTimeout(()=>{
        flash(color);
    },i*1000);
    heading.innerText=`Level ${currentLevel}`;
     
    }
}


// track user input events
classbtn.forEach((btn)=>{
    btn.addEventListener("click",function(){
        let color=btn.id;
        userSequence.push(color);// Stores user input
        flash(color); 
    checkSequence(userSequence.length-1);
    
    heading.innerText = `Level ${currentLevel}`;

    });
});
function checkSequence(index){
    if(!gameSequence[index]) return ;
    if(userSequence[index]=== gameSequence[index])    // this will check if the selection and poped item is same
{
    if(userSequence.length=== gameSequence.length){
        setTimeout(()=>{
            nextLevel();
        },1000);
    }
}
else{
    heading.innerText="Game Over ! Press any Key To restart.";
    started=false;
    currentLevel=0;
    gameSequence=[];
    userSequence=[];
}

}

// to reach next level 
function nextLevel(){
    currentLevel++;
    heading.innerText=`Level ${currentLevel}`;
    userSequence=[];// For next level you have to remove the past command of the user
    setTimeout(()=>{
        gameStart();
    },1000);
}






