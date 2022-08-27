var getmodal = document.getElementById('signupmodal');
var getbtnsignup = document.getElementById('btn-signup');
var getbtnclose = document.querySelector('.btn-close');
var getbtnfullscreen = document.getElementById('btn-fullscreen');
var getbtnclosescreen = document.getElementById('btn-closescreen');

getbtnsignup.addEventListener('click',function(){
	getmodal.style.transform = 'scale(1,1)';
});

getbtnclose.addEventListener('click',function(){
	getmodal.style.transform = 'scale(0,0)';
});

window.onclick = function(e){
	// console.log(e.target);
	if(e.target === getmodal){
		getmodal.style.display = 'none';
	}
}

var getde = document.documentElement;
// console.log(getde);

getbtnclosescreen.style.display = 'none';

getbtnfullscreen.addEventListener('click',function(){

	if(getde.requestFullscreen){
		getde.requestFullscreen();
	}else if(getde.msRequestFullscreen){
		getde.msRequestFullscreen();
	}else if(getde.webkitRequestFullscreen){
		getde.webkitRequestFullscreen();
	}

	getbtnclosescreen.style.display = 'inline-block';

});

getbtnclosescreen.addEventListener('click',function(){

	if(document.exitFullscreen){
		document.exitFullscreen();
	}else if(document.msExitFullscreen){
		document.msExitFullscreen();
	}else if(document.webkitExitFullscreen){
		document.webkitExitFullscreen();
	}

	getbtnclosescreen.style.display = 'none';

});