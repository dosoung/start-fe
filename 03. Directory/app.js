{/* <a href = "http://daum.net">daum</a> */}

var link = document.querySelector('#link');
link.addEventListener('click',function() {
  console.log(1111111);
  // event.stopPropagation();
  event.preventDefault();
});


// var list = document.querySelector('#list');
// console.log(list.children);


// var app = document.getElementById('list');

// //이벤트 위임 패턴
// app.addEventListener('click', function(event) {
//   if(event.target.nodeName ==='LI') {
//     //한개의 event리스너로 모든 li에 click이벤트 등록과 비슷
//     console.log('li');
//     event.stopPropagation();
//   }
// });

// document.body.addEventListener('click',function() {
//   console.log('body');
// });


//debug방법
// debugger;
// for(var i=0; i<list.children.length; i++) {
//   list.children[i].addEventListener('click',function() {
//     console.log(1);
//   })
// }


// var clickCount = 0;
// function popup(event) {
//   console.log(++clickCount);
//   console.log(arguments, event, event.type, event.currentTarget);
// }



//callback
// function clickBody() {
//   console.log('click');
// }

// document.querySelector('.box').addEventListener('click', clickBody);

// console.log(window.outerWidth);
// console.log(window.name);
// window.open("http://www.daum.net");

//div id를 가져오는 메소드
// var debug = console.log(document.getElementById('debug'));
// console.log(debug);

//querySelector()를 사용하면 첫번쨰 자식만 타겟으로잡고 
//querySelectorAll()를 사용하면 타겟을 배열형식으로 받음
//div class를 가져오는 메소드
//#을 통해id를 가져옴
// var box = document.querySelector('#debug');
// var box2 = document.querySelectorAll('.box');
// console.log(box)


//Dom 생성
// var div = document.createElement('div');
// console.log(div);
// div.style.border ='1px solid #000';
// div.innerHTML = 'Hello!';
// document.body.appendChild(div);



//span을 만들고 textnode hello만들고 span에 textnode객체넣고 debug클래스에 넣는다.
// const span = document.createElement('span');
// const textNode = document.createTextNode('hello!');
// span.appendChild(textNode);
// document.querySelector('#debug').appendChild(span);

//Dom 제거

// var debug = document.getElementById('debug');
// debug.remove();

// const list = document.getElementById('list');
// list.removeChild(list.children[0]);
