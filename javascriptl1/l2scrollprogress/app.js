var getprogressbar = document.querySelector('#progress-bar');

window.onscroll = function(){
	scrollpoint();
};

function scrollpoint(){
	// console.log('i am working');

	var getscrolltop = document.documentElement.scollTop;
	// console.log(getscrolltop);
	var getscrollheight = document.documentElement.scrollHeight;
	// console.log(getscrollheight);
	var getclientheight = document.documentElement.clientHeight;
	// console.log(getclientheight);
	var calcheight = ( getscrollheight - getclientheight );
	// console.log(calcheight);

	var getfinal = Math.round(( getscrolltop * 100 ) / calcheight);
	// console.log(getfinal);

	// var getfinal = Math.round((getscrolltop/calcheight) * 100);

	getprogressbar.style.width = `${getfinal}%`;
};

function printme(){
	window.print();
};