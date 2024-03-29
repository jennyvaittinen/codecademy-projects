let doorImage1 = document.querySelector("#door1");
let doorImage2 = document.querySelector("#door2");
let doorImage3 = document.querySelector("#door3");
let botDoorPath = "https://content.codecademy.com/projects/chore-door/images/robot.svg";
let beachDoorPath = "https://content.codecademy.com/projects/chore-door/images/beach.svg";
let spaceDoorPath = "https://content.codecademy.com/projects/chore-door/images/space.svg";
let numClosedDoors = 3;
let openDoor1, openDoor2, openDoor3;
let closedDoorPath = "https://content.codecademy.com/projects/chore-door/images/closed_door.svg";
let startButton = document.getElementById("start");
let currentlyPlaying = true;

const isBot = (door) => {
if(door.src === botDoorPath) {
  return true;
} else {
  return false;
};
};

const isClicked = (door) => {
if(door.src === closedDoorPath) {
  return false;
} else {
  return true;
}
};

const playDoor = (door) => {
  numClosedDoors--;
  if(numClosedDoors === 0) {
    gameOver('win');
  } else if(isBot(door)) {
    gameOver();
  };
};

const randomChoreDoorGenerator = () => {
let choreDoor = Math.floor(Math.random()*numClosedDoors);
if(choreDoor === 0){
openDoor1 = botDoorPath;
openDoor2 = beachDoorPath;
openDoor3 = spaceDoorPath;
} else if(choreDoor === 1) {
  openDoor1 = beachDoorPath;
openDoor2 = botDoorPath;
openDoor3 = spaceDoorPath;
} else if(choreDoor === 2) {
  openDoor1 = spaceDoorPath;
  openDoor2 = beachDoorPath;
openDoor3 = botDoorPath;
};
};

doorImage1.onclick = () => {
if(currentlyPlaying && !isClicked(doorImage1)) {
  doorImage1.src = openDoor1;
playDoor(doorImage1);
};
};

doorImage2.onclick = () => {
  if(currentlyPlaying && !isClicked(doorImage2)){
doorImage2.src = openDoor2;
playDoor(doorImage2);
};
};

doorImage3.onclick = () => {
if(currentlyPlaying && !isClicked(doorImage3)){
doorImage3.src = openDoor3;
playDoor(doorImage3);
};
};

const startRound = () => {
  door1.src = closedDoorPath;
  door2.src = closedDoorPath;
  door3.src = closedDoorPath;
  numClosedDoors = 3;
  startButton.innerHTML = "Good luck!";
  currentlyPlaying = true;
  randomChoreDoorGenerator();
};

  startButton.onclick = () => {
    if(!currentlyPlaying){
    startRound();
    };
};

const gameOver = (status) => {
if(status === 'win') {
  startButton.innerHTML = 'You win! Play again?';
} else {
  startButton.innerHTML = 'Game over! Play again?';
};
  currentlyPlaying = false;
};
startRound();