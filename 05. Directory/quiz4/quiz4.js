var isDrawing = false;
var $box = document.getElementById("box");
var x;
var y;

$box.addEventListener("mousedown", function (event) {
  isDrawing = true;
  x=event.clientX;
  y=event.clientY;
  console.log(x, y);
});

$box.addEventListener("mousemove", function (event) {
  if (isDrawing) {
    x += event.movementX;
    y += event.movementY;
    var num = 100
    //box가자꾸 움직이면 모서리가 클릭이되어서 css값줄때 빼서 주었습니다. int인식 안되서 string으로변환
    $box.style.left = x -num.toString() + "px";
    $box.style.top =  y -num.toString() + "px"; 
    console.log(x,y);
  }
});

$box.addEventListener("mouseup", function (event) {
  isDrawing = false;
});
