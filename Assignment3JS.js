//David Sims 301268408
//March 12th 2023
/*Resources used: http://www.lostdecadegames.com/how-to-make-a-simple-html5-canvas-game/ I used this link provided to us for a basic understanding of how these type of games work.
I used this youtube video for understanding the basics of a score incremental clicker game https://www.youtube.com/watch?v=d-AbDEwpp6g&ab_channel=TanktotGames
*/


//Variables setting the interval speed for the ghost, setting the starting score, the time of for the ghost movement method, and just a placeholder for the ghost image
var interval = 1250;
var score = 0;
var time;
var ghostImage;

//Window onload function, this function will load the ghost when the window is loaded. the fucktion checks for clicks on the ghost, it also starts the ghost in the top left
//of the background image
window.onload = function begin(){
    ghostImage = document.getElementById("ghost");
    ghostImage.addEventListener("click", checkClick, false);
    ghostImage.addEventListener("ontouchstart", checkClick, false);
    ghostImage.style.position = "absolute";
    ghostImage.style.left = ghostImage.style.left;
    ghostImage.style.top = ghostImage.style.top;
    console.log(document.getElementById('bgContainer').offsetTop);
    //updating the score for whenever the ghost is clicked
    update();
}

//Function to have the ghost appear in different locations by using math.random then adding the offsetleft and top for the fact that the game is in the center
function moveGhost(){
    ghostImage.style.left = (Math.random() * 800 + document.getElementById('bgContainer').offsetLeft) +"px";
    ghostImage.style.top = (Math.random() * 400 + document.getElementById('bgContainer').offsetTop) +"px";
    ghostImage.addEventListener("click", checkClick, false);
    ghostImage.addEventListener("ontouchstart", checkClick, false);
}

//Function to check if the ghost was clicked, if so, increase the score and decrease the interval between movement of ghost
function checkClick(){
    ghostImage.removeEventListener("click", checkClick, false);
    score += 10;
    console.log('tets');
    document.getElementById('scoreContainer').innerHTML = score;
    interval -= 150;
    clearInterval(time);
    time = window.setInterval(moveGhost, interval);
}

//updates the score and updates if there is a time change for the ghost movement
function update(){
    document.getElementById('scoreContainer').innerHTML = score;
    time = window.setInterval(moveGhost, interval);
}

//function to reset the score if the user clicks the button by saying the score is = 0 then updating the innerhtml while also alerting the user of the update
function scoreReset(){
    score = 0;
    document.getElementById('scoreContainer').innerHTML = score;
    alert("You have reset the score.");
}
//reseting the speed if the button to reset the speed is clicked this resets teh interval to the number originally set above and alerts the player of it
function speedReset(){
    interval = 1250;
    clearInterval(time);
    time = window.setInterval(moveGhost, interval);
    alert("You have reset the speed.");
}