const $box = document.getElementById('box');

let isDown = false;
let offset = {x: 0 , y: 0 };
$box.addEventListener('mousedown', (event) => {
  isDown = true;
  console.log('mousedown');

  offset.x = $box.offsetLeft - event.clientX;
  offset.y = $box.offsetTop - event.clientY;
});


$box.addEventListener('mouseup', (event) => {
  isDown = false;
  console.log('mouseup');
});

$box.addEventListener('mousemove', (event) => {
  console.log('mousedown');
  if (!isDown) return;
  $box.style.left -= event.clientX - 10;
  $box.style.top -= event.clientY - 10;

});