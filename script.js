const main = document.querySelector('.mainBlock');
// main = [];
const counter = document.querySelector('.scoreSpan');
const mainBlock = document.querySelector('.mainBlock');
// const timesOfCreateCircle = document.querySelector('.howManyTimesCreateCircle');


let arrayTimesOfCreateCircle = [];

let maxSizeOfCircle = 39;

let howManyTimesCreateCircle = 0;


let counterVar = 0;
let count = ()=>{
	counterVar += 1;
	counter.innerHTML = counterVar;
};


let intervalOfCreateCircle = 1000;
// let timeOfCreaseCircle = intervalOfCreateCircle/32;

let howManyTimesCreateCircle2 = ()=>{
	howManyTimesCreateCircle += 1;
	// timesOfCreateCircle.innerHTML = howManyTimesCreateCircle;
	arrayTimesOfCreateCircle.push(howManyTimesCreateCircle);

	
	// if(arrayTimesOfCreateCircle.length <= 5){
	// 	intervalOfCreateCircle = 2000;
	// } else if (arrayTimesOfCreateCircle.length > 5) {
	// 	intervalOfCreateCircle = 500;
	// }
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
			// console.log(maxSizeOfCircle);
	}, intervalOfCreateCircle/50);
		
	main.append(circle);

	if(main.children.length >= 10){
		// alert('Loser');
		clearInterval(runCode);
		mainBlock.style.pointerEvents = 'none';
		setTimeout(() => {
			window.location.reload();
		}, 3000);
	}

	circle.onclick = () => {
		circle.remove();
		count();
	};

	
	// let howManyTimesCreateCircle2 = ()=>{
	// 	howManyTimesCreateCircle += 1;
	// 	// timesOfCreateCircle.innerHTML = howManyTimesCreateCircle;
	// 	arrayTimesOfCreateCircle.push(howManyTimesCreateCircle);
	// };

	howManyTimesCreateCircle2();

	
	console.log(arrayTimesOfCreateCircle.length);
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

		 console.log(intervalOfCreateCircle);
		 runCode = setTimeout(runCodeSettimeout, intervalOfCreateCircle);

	}, intervalOfCreateCircle);
	
};


const pause = document.querySelector('.pauseButton').onclick = () => {
	clearInterval(runCode);
	mainBlock.style.pointerEvents = 'none';
	document.querySelector('.playButton').removeAttribute('disabled');
};


const reload = document.querySelector('.reload').onclick = ()=>{
	window.location.reload();
};


























// let settt = setInterval(() => {
// 	function randomInteger(min, max) {
// 	let random = min + Math.random() * (max + 1 - min);
// 	return Math.floor(random);
// 	}

// 	let coordinates = {
// 		x: randomInteger(0, 920) + 'px',
// 		y: randomInteger(0, 470) + 'px',
// 	};

// 	function createCircle(createCircleTime){
// 		const circle = document.createElement('div');
// 		circle.className = 'circle';
// 		circle.style.left = coordinates.x;
// 		circle.style.top = coordinates.y;

// 		let increaseSizeOfCircle = setInterval(() => {
// 			maxSizeOfCircle += 1;
// 			circle.style.width = maxSizeOfCircle + 'px';
// 			circle.style.height = maxSizeOfCircle + 'px';


// 			if(maxSizeOfCircle == 71){
// 				clearInterval(increaseSizeOfCircle);
// 				maxSizeOfCircle = 40;
// 			}	
// 			// console.log(maxSizeOfCircle);
// 		}, createCircleTime/31);
		
// 		main.append(circle);

		
// 		circle.onclick = () => {
// 			circle.remove();
// 			count();
// 		};
// 	}
	
// 	// createCircle();
	
// }, createCircleTime);