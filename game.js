var interval;
var started = false;
var time = 0;
var arrayOfClicks = [];
var ready = true;
var numCompleted = 0; 

var words = ['hat','sat','rat','that','mat','fat','bat','cat','hat','sat','rat','that','mat','fat','bat','cat'];

function shuffle() {
  var currentIndex = words.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = words[currentIndex];
    words[currentIndex] = words[randomIndex];
    words[randomIndex] = temporaryValue;
  }
  return words;
}

function wordsSetUp() {
  shuffle();
  var cells = document.getElementsByTagName("td");
  for (var i = 0; i < cells.length; i++) {
    var cell = cells[i];
    cell.completed = false;
    cell.clicked = false;
    cell.value = words[i];

    cell.addEventListener("mouseenter", function() {
      if (this.completed == false && this.clicked == false)
        this.style.background = "orange";
    });
    cell.addEventListener("mouseleave", function() {
      if (this.completed == false && this.clicked == false)
        this.style.background = "blue";
    });
    cell.addEventListener('click', function() {
      if (this.clicked == false && this.completed == false) {
        release(this);
      }
    });
  }
}

function release(cell) {
  cell.style.backgroundColor = "lavender";
  cell.innerHTML = cell.value;
  cell.clicked = true;
  // Add the clicked cell to the array
  arrayOfClicks.push(cell);

  // Call the function to check for a match after two cells are clicked
  if (arrayOfClicks.length === 2) {
    checkForMatch();
  }
}
function startTimer(){
  if (started == false){
  interval = setInterval(function(){
  time++;
 var myTime = document.querySelector("#timer");
 myTime.innerHTML= "Time Elapsed: " + time;
  },1000)
  started = true;
  }
 }
 
function checkForMatch() {
  // Check if the values of the two clicked cells match
  if (arrayOfClicks.length == 2){
    if (arrayOfClicks[0].value == arrayOfClicks[1].value){ //if the match found
   complete(arrayOfClicks[0]);
   complete(arrayOfClicks[1]);
   arrayOfClicks = [];//reset
    if (numCompleted== 16) { //4x4 matrix has 16 elements, game over
   alert("You won in " + time + " seconds!");
   clearInterval(interval);
    }
    }
    else { //if the match is not found
    ready = false;
    var table = document.querySelector("#matrix");
   table.style.border = "5px dashed red";
   setTimeout(function(){
    //after a 500ms delay
   hide(arrayOfClicks[0]);
   hide(arrayOfClicks[1]);
   arrayOfClicks = [];
    ready = true;
    var table = document.querySelector("#matrix");
   table.style.border = "5px solid black ";
    },500);
    }
    }
    }
   

function hide(cell){
  cell.style.backgroundColor = "purple";
  7
  cell.innerHTML = "";
  cell.clicked = false;
  }

  function complete(cell){
    numCompleted++;
    cell.completed = true;
    cell.style.backgroundColor = "pink";
    }
    
    function start() {
      shuffle();
      wordsSetUp();
      startTimer();
      }
      
      function restart() {
        location.reload();
        }
              

 wordsSetUp(); 
  startTimer(); // Call the startTimer function
  shuffle();
  var cells = document.getElementsByTagName("td");


           
           
             