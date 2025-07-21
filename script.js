//your JS code here. If required.
const div = document.getElementById("counter");
const btn = document.querySelector('button');
let number = 0;
btn.addEventListener('click',function(e){
	alert(number);
	number++;

	div.innerText = number;
});