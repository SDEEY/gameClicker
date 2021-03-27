const main = document.querySelector('.mainBlock');
const counter = document.querySelector('.scoreSpan');
const mainBlock = document.querySelector('.mainBlock');
const blockLose = document.querySelector('.blockLose');
const perfectHit = document.querySelector('.loseHitSpan');
const totalScore = document.querySelector('.loseTotalScoreSpan');
const body = document.querySelector('body');
const backgroundButton = document.querySelector('.backgroundButton');
const everythingButton = document.querySelector('.everythingButton');
const topLine = document.querySelector('.topLine');
const leftBlock50 = document.querySelector('.leftBlock50');
const rightBlock50 = document.querySelector('.rightBlock50');
const buttonRules = document.querySelector('.buttonRules');
const rules = document.querySelector('.rules');


let changeBottom = -39;

let arrayTimesOfCreateCircle = [];

let maxSizeOfCircle = 39;

let howManyTimesCreateCircle = 0;



let counterVar = 0;
let count = ()=>{
	counterVar += 1;
	counter.innerHTML = counterVar;
};

///////////  Procent tochnih popadaniy ///////////

let arrayMainBlockClick = [];

let mainBlockClick = 0;

mainBlock.onclick = () => {
	mainBlockClick += 1;
	arrayMainBlockClick.push(mainBlockClick);
};



let intervalOfCreateCircle = 1000;

let howManyTimesCreateCircle2 = ()=>{
	howManyTimesCreateCircle += 1;
	// timesOfCreateCircle.innerHTML = howManyTimesCreateCircle;
	arrayTimesOfCreateCircle.push(howManyTimesCreateCircle);
};


function randomInteger(min, max) {
	let random = min + Math.random() * (max + 1 - min);
	return Math.floor(random);
}

/////////////   CREATE CIRCLE   ////////////

function createCircle(){
	let circle = document.createElement('div');
	circle.className = 'circle';
	circle.style.left = coordinates.x;
	circle.style.top = coordinates.y;

	let increaseSizeOfCircle = setInterval(() => {
		maxSizeOfCircle += 1;
		circle.style.width = maxSizeOfCircle + 'px';
		circle.style.height = maxSizeOfCircle + 'px';


		if(maxSizeOfCircle == 71){
			clearInterval(increaseSizeOfCircle);
			maxSizeOfCircle = 40;
		}	
	}, intervalOfCreateCircle/50);
		
	main.append(circle);

	if(main.children.length >= 11){
		perfectHit.innerHTML = (counterVar/mainBlockClick*100).toFixed() + '%';
		totalScore.innerHTML = counterVar;
		blockLose.style.display = 'block';
		body.style.backgroundColor = 'rgb(0, 0, 0, 50%)';
		clearTimeout(runCode);
		mainBlock.style.pointerEvents = 'none';
		topLine.style.pointerEvents = 'none';
	}

	circle.onclick = () => {
		circle.remove();
		count();
		if(counterVar == 50){
		let changeBottom = setInterval(()=>{
			changeBottom += 2;
			leftBlock50.style.bottom = changeBottom + 'px';
			leftBlock50.classList.remove('hide');
			rightBlock50.style.bottom = changeBottom + 'px';
			rightBlock50.classList.remove('hide');
		}, 10);
		let voiceTag = document.createElement('audio');
			voiceTag.setAttribute('src', 'vocal/maman.mp3');
			voiceTag.setAttribute('autoplay', true);
		}
	};

	howManyTimesCreateCircle2();

	let circleColor = () => {
		randomColorRGB();
		circle.style.backgroundColor = colorRgb;
	};

	circleColor();
}

/////////////   BUTTONS   ////////////

const play = document.querySelector('.playButton').onclick = () => {
	mainBlock.style.pointerEvents = 'auto';
	document.querySelector('.playButton').setAttribute('disabled', true);

	runCode = setTimeout(function runCodeSettimeout(){

		coordinates = {
			x: randomInteger(0, 920) + 'px',
	 		y: randomInteger(0, 470) + 'px',
		};

		createCircle();

		if(arrayTimesOfCreateCircle.length == 4){
	 		intervalOfCreateCircle /= 1.2;
	 	} else if(arrayTimesOfCreateCircle.length == 9){
			 intervalOfCreateCircle /= 1.2;
		} else if(arrayTimesOfCreateCircle.length == 14){
			 intervalOfCreateCircle /= 1.2;
		 } else if(arrayTimesOfCreateCircle.length == 19){
			 intervalOfCreateCircle /= 1.1;
		 } else if(arrayTimesOfCreateCircle.length == 24){
			 intervalOfCreateCircle /= 1.1;
		 } else if(arrayTimesOfCreateCircle.length == 29){
			 intervalOfCreateCircle /= 1.1;
		 } else if(arrayTimesOfCreateCircle.length == 34){
			 intervalOfCreateCircle /= 1.1;
		 } else if(arrayTimesOfCreateCircle.length == 39){
			 intervalOfCreateCircle /= 1.1;
		 } else if(arrayTimesOfCreateCircle.length == 44){
			 intervalOfCreateCircle /= 1.1;
		 } else if(arrayTimesOfCreateCircle.length == 49){
			 intervalOfCreateCircle /= 1.1;
		 }

		//  console.log(intervalOfCreateCircle);
		 runCode = setTimeout(runCodeSettimeout, intervalOfCreateCircle);

	}, intervalOfCreateCircle);
	
};


const pause = document.querySelector('.pauseButton').onclick = () => {
	clearTimeout(runCode);
	mainBlock.style.pointerEvents = 'none';
	document.querySelector('.playButton').removeAttribute('disabled');
};


const reload = document.querySelector('.reload').onclick = () => {
	window.location.reload();
};


const loseOkButton = document.querySelector('.loseOk').onclick = () => {
	window.location.reload();
	blockLose.style.display = 'none';
};


buttonRules.onclick = () => {
	rules.classList.toggle('hide');
};





