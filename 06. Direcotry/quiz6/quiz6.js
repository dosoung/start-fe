const $result = document.getElementById('result');
const $number = document.getElementById('num');
const $button = document.getElementById('btn');

// console.log(typeof($number.value));
// console.log(a);
// console.log(typeof(a));

function inputnumber() {
  return parseInt($number.value);
};

function calGugudan(number) {
  let result = '';
  for(let i =0 ; i<10 ; i++) {
    result += `${number} * ${i} = ${number * i}<br>`;
};
  return result;
}

$button.addEventListener('click', () => {
  let number = inputnumber();

  if(number) {
    let result = calGugudan(number);
    $result.innerHTML = result;
  } else {
    alert('숫자를 입력해 주세요');
  }
});