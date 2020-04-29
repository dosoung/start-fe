const $box = document.querySelector('box');
const $bug = document.getElementById('bug');
const $point = document.getElementById('point');
const $life = document.getElementById('life');

let leftnum = 0 ;
let rightnum = 0;
let score = 0;
let life = 10;
let success = false;

//left 0 부터 380까지 난수발생
//right 0부터 380까지 난수발생
function randomNum() {
  return Math.floor(Math.random() *(380+1));
}

//setinterval을 사용하여 1.5초마다 박스를 생성
const interval = setInterval( () => randomPos() ,1500);

//setinterval stop
function stop() {
  clearInterval(interval);
}


//bug랜덤하게 생성 및 점수 관련
function randomPos(){
  leftnum = randomNum();
  rightnum = randomNum();
  $bug.style.left = leftnum+ "px";
  $bug.style.top = rightnum+"px";
  if(success) {
    $bug.classList.toggle('hidden');
    success = false;
  } else {
    life--;
  }
  showNum();
}


//show point and life
function showNum() {
  $point.innerHTML = score;
  $life.innerHTML = life;
  if(life === 0 ) {
    alert('game over');
    stop();
  };
}


$bug.addEventListener('click' , (event) => {
  $bug.classList.toggle('hidden');
  score++;
  success = true;
  showNum();
});



