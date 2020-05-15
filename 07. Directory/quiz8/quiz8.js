const $min = document.getElementById('min')
const $max = document.getElementById('max')
const $btn = document.getElementById('btn')
const $box = document.getElementById('box')

let num = 0
let curnum = 0

//make random number
function makeRandomNumber(max, min) {
	curnum = Math.floor(Math.random() * (max - min + 1) + min)
	return curnum
}

function animation() {
	if (curnum != num) {
		num++
		$box.innerHTML = num
		$btn.disabled = true
	} else {
		$btn.disabled = false
	}
}

function showNumber() {
	$box.innerHTML = makeRandomNumber($max.value, $min.value)
	num = curnum - 50
}

$btn.addEventListener('click', showNumber)
setInterval(animation, 20)
