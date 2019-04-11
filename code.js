


function giveMeAMagicalRandomNumber(min, max){
	return Math.floor(Math.random()*(max-min+1)+min);
}


window.onmousemove = () => {

	const R = giveMeAMagicalRandomNumber(0, 255);
	const G = giveMeAMagicalRandomNumber(0, 255);
	const B = giveMeAMagicalRandomNumber(0, 255);

	document.body.style.background = "rgb("+R+","+G+","+B+")";

}






