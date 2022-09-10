const getcheckbox = document.getElementById('toggle-checkbox');
const getchecklabel = document.getElementById('toggle-label');
const getbasic = document.getElementById('basic');
const getprof = document.getElementById('prof');
const getmst = document.getElementById('mst');

console.log(getcheckbox:checked ? 'true':'false');

getchecklabel.addEventListener('click',function(){

	// console.log('i am working');

	if(getcheckbox.checked){
		// console.log('yes');
		[getbasic.textContent,getprof.textContent,getmst.textContent] = [10,20,30];
	}else{
		// console.log('no');
		getbasic.textContent = 120;
		getprof.textContent = 240;
		getmst.textContent = 360;
	}

	// 5PS

});