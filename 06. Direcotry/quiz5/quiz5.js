
const $boxes = document.querySelectorAll('.box');

let isDrawing = null;
function boxMove(event) {
  if(!isDrawing) return;
  moveX += event.movementX;
  moveY += event.movementY;

  const num = 50
  isDrawing.style.left = moveX -num.toString() + "px";
  isDrawing.style.top =  moveY -num.toString() + "px"; 
}

function boxUp() {
  isDrawing = false;

}

function boxDown(event) {
  isDrawing = event.target;
  moveX = event.clientX;

}

function addEventListener() {
  $boxes.forEach($box => {
    $box.addEventListener('mousedown',boxDown);
    $box.addEventListener('mouseup',boxUp);
  });

  document.body.addEventListener('mousemove',boxMove);
};

addEventListener();

