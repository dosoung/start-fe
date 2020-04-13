//체스판 그리기 i+j가 짝수일때 검정
var board = document.getElementById("board");
var flag = 1;
function draw(){
    for(var i=0; i<4; i++){
        for(var j=0; j<4; j++){
          var color = document.createElement('color');
          if((i+j)%2==0) {
            color.className ='Black';
            board.appendChild(color);
          } else {
            color.className = 'White';
            board.appendChild(color);
          }

        }
    }
  }

//체스칸 초기화
function reset() {
  var name = document.getElementsByTagName('color');
  for (var i=0; i<16; i++){
    if(name[i].className =='White')
        name[i].style.background = "white";
    else
        name[i].style.background= "black";
}
event.target.style.background = "red";
}


//체스칸 클릭
function board_click(){
  var click= document.querySelectorAll('color');
      for(var i=0; i<16; i++){
          click[i].addEventListener('click', function(){
              reset();
          });
      }
  }

draw();
board_click();
