var $add_red= document.querySelector('.add-red');
var $add_box = document.querySelector('.add-btn');
var $body = document.getElementById('boo');
var $remove_box = document.querySelector('.delete-btn');
var $box = document.querySelector('.box');
var $add_text = document.querySelector('.text-btn');
var $reset_box = document.querySelector('.reset-btn');
var $show_box = document.querySelector('.toggle-btn');
var $show_image = document.querySelector('.image-btn');


var box_len = getBoxes().length;

function getBoxes() {
  var boxes = document.querySelectorAll('.box');
  return boxes;
}

//문제 1
$add_red.addEventListener('click',function() {
  getBoxes().forEach(function($div) {
    $div.classList.add('red');
  });
});

//문제 2
function addBox(){  
  var $addDiv = document.createElement('div');
  $body.appendChild($addDiv).className = $box.className;
};
$add_box.addEventListener('click',addBox);


//문제 3
$remove_box.addEventListener('click', function(){
  $body.removeChild(getBoxes().item(box_len-1));
})

// 문제 4
$add_text.addEventListener('click', function() {
  var $text = document.querySelector('.txt').value;
  getBoxes().forEach(function($div) {
    $div.innerHTML =$text;
  })
})

//문제 5
$reset_box.addEventListener('click',function() {
  getBoxes().forEach(function($div) {
    $div.remove();
  })
})

//문제 6
$show_box.addEventListener('click', function() {
  getBoxes().forEach(function($div) {
    $div.classList.toggle('hidden');
  });
});

//문제 7
$show_image.addEventListener('click', function() {
  var image_src=  'https://i.imgur.com/69NjYBH.png';
  var $box_len = getBoxes().length;
  if($box_len === 0) {
    addBox();
    console.log($box_len);
  } 
  console.log($box_len);
  getBoxes().forEach(function($div) {
  var img = document.createElement('img');
  img.src = image_src;
  $div.append(img);
});
});




