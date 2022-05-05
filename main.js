// let redChip = document.getElementById('red');
// let blackChip = document.getElementById('black');

// redChip.addEventListener('pointerdown', getRedCoordinates);
// blackChip.addEventListener('pointerdown', getBlackCoordinates);


// function getRedCoordinates() {
//     let redPosition = redChip.getBoundingClientRect();
//     let redX = Math.round(redPosition.left);
//     let redY = Math.round(redPosition.top);
//     console.log(`redX coordinates = ${redX}`);
//     console.log(`redY coordinates = ${redY}`);
// }

// function getBlackCoordinates() {
//     let blackPosition = blackChip.getBoundingClientRect();
//     let blackX = Math.round(blackPosition.left);
//     let blackY = Math.round(blackPosition.top);
//     console.log(`blackX coordinates = ${blackX}`);
//     console.log(`blackY coordinates = ${blackY}`);
// }


const myGameContainer = document.querySelector('.game-container');
myGameContainer.addEventListener('pointerdown', userPressed, { passive: true });

let element, bbox, startX, startY;

function userPressed(event) {
  element = event.target;
  if (element.classList.contains('chips')) {
    startX = event.clientX;
    startY = event.clientY;
    bbox = element.getBoundingClientRect();
    myGameContainer.addEventListener('pointermove', userMoved, { passive: true });
    myGameContainer.addEventListener('pointerup', userReleased, { passive: true });
    myGameContainer.addEventListener('pointercancel', userReleased, { passive: true });
  };
};

function userMoved(event) {
  let deltaX = event.clientX - startX;
  let deltaY = event.clientY - startY;
  element.style.left = bbox.left + deltaX + "px";
  element.style.top = bbox.top + deltaY + "px";
};

function userReleased(event) {
  myGameContainer.removeEventListener('pointermove', userMoved);
  myGameContainer.removeEventListener('pointerup', userReleased);
  myGameContainer.removeEventListener('pointercancel', userReleased);
};

