// const pause2 = document.querySelector('.pauseButton');
// const play2 = document.querySelector('.pauseButton');
// const reload2 = document.querySelector('.pauseButton');


let randomColorRGB = () => {
	const r = Math.floor(Math.random() * 255);
	const g = Math.floor(Math.random() * 255);
	const b = Math.floor(Math.random() * 255);
	colorRgb = "rgb(" + r + "," + g + "," + b + ")";
};

backgroundButton.onclick = () => {
	randomColorRGB();
	body.style.backgroundColor = colorRgb;
};



everythingButton.onclick = () => {
let bodyColor = () => {
	randomColorRGB();
	body.style.backgroundColor = colorRgb;
};

bodyColor();

let mainBlockColor = () => {
	randomColorRGB();
	mainBlock.style.backgroundColor = colorRgb;
};

mainBlockColor();

let topLineColor = () => {
	randomColorRGB();
	topLine.style.backgroundColor = colorRgb;
};

topLineColor();
};