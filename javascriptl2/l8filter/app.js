var getinput = document.getElementById('search');
var getul = document.getElementById('members');
var getli = getul.getElementsByTagName('li');
// console.log(getli); //HTML Collection

var getsortbtnazm1 = document.getElementById('sortazm1');
var getsortbtnazm2 = document.getElementById('sortazm2');
var getsortbtnzam1 = document.getElementById('sortzam1');
var getsortbtnzam2 = document.getElementById('sortzam2');

getinput.addEventListener('keyup',filter);

// getsortbtnazm1.addEventListener('click',sortingazm1);
// getsortbtnazm2.addEventListener('click',sortingazm2);
// getsortbtnzam1.addEventListener('click',sortingzam1);
// getsortbtnzam2.addEventListener('click',sortingzam2);

function sortingazm1(){
	// console.log('i am working');

	var lis = [];

	for(var i=0; i < getli.length; i++){
		// console.log(getli[i]);
		// console.log(getli[i].textContent);

		lis.push(getli[i].textContent);
	}

	// console.log(lis);
	// console.log(lis.sort());
	// console.log(lis.sort().reverse());

	var azlis = lis.sort();
	getul.innerHTML = '';

	azlis.forEach(function(azli){
		// console.log(azli);

		const newli = document.createElement('li');
		const newlink = document.createElement('a');
		newlink.href = `javascript:void(0);`;
		newlink.append(azli);
		newli.appendChild(newlink);
		// console.log(newli);
		getul.appendChild(newli);
	});
}

function sortingzam1(){
	// console.log('i am working');

	var lis = [];

	for(var i=0; i < getli.length; i++){
		// console.log(getli[i]);
		// console.log(getli[i].textContent);

		lis.push(getli[i].textContent);
	}

	// console.log(lis);
	// console.log(lis.sort());
	// console.log(lis.sort().reverse());

	var azlis = lis.sort().reverse();
	getul.innerHTML = '';

	azlis.forEach(function(azli){
		// console.log(azli);

		const newli = document.createElement('li');
		const newlink = document.createElement('a');
		newlink.href = `javascript:void(0);`;
		newli.appendChild(newlink);
		newlink.append(azli);
		// console.log(newli);
		getul.appendChild(newli);
	});	
}

function sortingazm2(){
	
}

function filter(){
	// console.log(this.value);

	var inputfilter = this.value.toLowerCase();
	// console.log(inputfilter);

	for(var x=0; x < getli.length; x++){
		// console.log(getli[x]);

		// console.log(getli[x].querySelector('a').innerText.toLowerCase());
		// console.log(getli[x].getElementsByTagName('a').textContent.toLowerCase());

		var getavalue = getli[x].querySelector('a').innerText.toLowerCase();

		if(getavalue.indexOf(inputfilter) > -1){
			getli[x].style.display = '';
		}else{
			getli.style.display = 'none';
		}
	}
}