console.log('app.js');

// //Create
// var todos = ['운동']
// var todo = '게임';
// todos.push(todo);
// console.log(todos)


// // Read
// todos.forEach(function(todo){
//   console.log(todo);
// });

// var arr = [1,2];
// arr[1] = 3;
// // arr = 1,3
// var todos = ['운동','게임'];
// var updateTodo = '게임';
// var updateIndex = todos.findIndex(function(todo) {
//   return todo ===updateTodo;
// });
// todos[updateIndex] = '공부';
// console.log(todos)

// Delete
// var todos = ['운동','공부','목욕'];
// var deleteTodo = '공부';
// var deleteIndex = todos.findIndex(function(todo) {
//   return todo === deleteTodo;
// });
// todos.splice(deleteIndex,1);
// console.log(todos);

// var isMan = false;
// if(isMan) {
//   console.log('1');

// } 
// else if(!isMan && isHero) {
  
// }
// else {
//   console.log('2');
// }


// window.alert('안녕')
// var who = prompt('당신은 누구세요?');
// console.log(who);

// var isDelete = confirm('정말 삭제합니까?');
// console.log(isDelete)

// function sum(a,b) {
//   return a+b;
// };
// console.log(sum(1,2));


// var car = {
//   year : '2014',
//   starting: function() {
//     console.log('starting...');
//   },
// };

// var something = {
//   name :'성도현',
//   birth:1994,
//   old : function() {
//     console.log('how old r u?')
//   },
// };
// console.log(something)
// car.starting();

//캡슐화 장점 있음 바로 실행됌 함수를 생성하고
// (function() {
//   var a = 'a';
//   console.log(a);
// })()

// function sum( x, y ) {
//   if (!y) y = 1;
//   return x+y;
// }
// console.log(sum(3))



// for(i=1 ; i<=9 ; i++) {
//   for(j=1 ; j<=9 ; j++) {
//     result = i*j;
//     console.log(i+"*"+j+ "=" +result );
//   }
// };

// function gugudan(i,j){
//   for(i=1 ; i<=9 ; i++) {
//     for(j=1 ; j<=9 ; j++) {
//       result = i*j
//       console.log(i+"*"+j+ "=" +result );
//     }
//   };
// }

// console.log(gugudan());
// var result = 0
// do {
//   var sum = prompt('더할 값을 입력 해 주세요');
//   if(!sum) {
//     alert('숫자의 총 합은 : ' + result);
//     break;
//   } else {
//     result += parseInt(sum);
//   }
  
// }while(true)
