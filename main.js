let redChip = document.getElementById('red');
let blackChip = document.getElementById('black');

redChip.addEventListener('pointerdown', getRedCoordinates);
blackChip.addEventListener('pointerdown', getBlackCoordinates);


function getRedCoordinates() {
    let redPosition = redChip.getBoundingClientRect();
    let redX = Math.round(redPosition.left);
    let redY = Math.round(redPosition.top);
    console.log(`redX coordinates = ${redX}`);
    console.log(`redY coordinates = ${redY}`);
}

function getBlackCoordinates() {
    let blackPosition = blackChip.getBoundingClientRect();
    let blackX = Math.round(blackPosition.left);
    let blackY = Math.round(blackPosition.top);
    console.log(`blackX coordinates = ${blackX}`);
    console.log(`blackY coordinates = ${blackY}`);
}