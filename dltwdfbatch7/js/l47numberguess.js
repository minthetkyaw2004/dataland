// console.log('hey')

// UI
const minnum = document.querySelector('.minnumber'),
		maxnum = document.querySelector('.maxnumber'),
		getinput = document.querySelector('#guessnumber'),
		getbtn = document.querySelector('#btn'),
		message1 = document.querySelector('.message1'),
		message2 = document.querySelector('.message2'),
		getgame = document.querySelector('#game');

let min = 1,
	max = 10,
	gameleft = 3,
	winningnum = randomnum(min,max);

minnum.textContent = min;
maxnum.innerText = max;

getbtn.addEventListener('click',function(){
	// console.log('I am working');
	// console.log(getinput.value);
	// console.log(typeof getinput.value);

	// let guess = Number(getinput.value);
	// let guess = +getinput.value;
	let guess = parseInt(getinput.value);

	// console.log(guess);
	// console.log(typeof guess);

	if(guess < min || guess > max || isNaN(guess)){
		console.log(`Please enter a number between ${min} and ${max}`);
		// message2.textContent = `Please enter a number between ${min} and ${max}`;
		setmessage2(`Please enter a number between ${min} and ${max}`,'red');
	}

	if(guess === winningnum){
		// Gameover WON
		// disable getinput
		// getinput.disabled = true;

		// getinput border color to green
		// getinput.style.borderColor = 'green';

		// message1
		// message1.textContent = `${winningnum} is correct!!!, you win`;
		// message1.style.color = 'green';
		// setmessage1(`${winningnum} is correct!!!, you win`,'green');

		// play again?
		// getbtn.value = 'Play Again';
		gameover(true,`${winningnum} is correct!!!, you win`);
	}else{
		// Wrong number

		//gameleft --;
		gameleft -= 1;

		// console.log(gameleft);

		if(gameleft === 0){
			// Gameover LOSE

			// disable getinput
			// getinput.disabled = true;

			// getinput border color to red
			// getinput.style.borderColor = 'red';

			// message 1
			// message1.textContent = `Game over, you lose, the correct number is ${winningnum}`;
			// message1.style.color = 'red';
			// setmessage1(`Game over, you lose, the correct number is ${winningnum}`,'red');

			// play again ?
			// getinput.value = `Play Again`;

			gameover(false, `Game over, you lose, the correct number is ${winningnum}`);
		}else{
			// Continue Game

			// getinput borderColor to red
			getinput.style.borderColor = 'red';

			// getinput clear value
			getinput.value = '';

			// message 1
			// message1.innerText = `${guess} is not correct, ${gameleft} guess left`;
			// message1.style.color = 'blue';
			setmessage1(`${guess} is not correct, ${gameleft} guess left`,'blue')
		}
	}

});

// Message
function setmessage1(msg,color) {
	message1.textContent = msg;
	message1.style.color = color;
}
function setmessage2(msg,color){
	message2.textContent = msg;
	message2.style.color = color;

	setTimeout(function(){
		message2.textContent = '';
	},3000);
}

// gameover
function gameover(won,msg){

	let color;

	won === true ? color = 'green' : color = 'red';

	// getinput disabled
	getinput.disabled = true;

	// getinput border color to green or red
	getinput.style.borderColor = color;

	// message1
	setmessage1(msg,color);

	// play again
	getbtn.value = 'Play Again';

	// add class name
	// getbtn.className = 'btn playgain';
	getbtn.classList.add('playgain');

}
getgame.addEventListener('mouseup',function(e){
	// console.log(e.target);

	if(e.target.className === 'btn playgain'){
		// console.log('i am playgain function')
		window.location.reload();
	}

});

// For winning number
function randomnum(min,max){
	let getrdm = Math.floor(Math.random()*( max - min ) +1);
	// console.log(getrdm);
	return getrdm;
}

