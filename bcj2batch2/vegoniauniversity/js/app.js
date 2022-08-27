// Start jQuery Area

$(document).ready(function(){

	// Start Header

		// Start Nav Bar

		$('.navbuttons').click(function(){
			$(this).toggleClass('crossxs');
		});

		// End Nav Bar

	// End Header
});

// End jQuery Area

// -----------------------------------------------

// Start Javascript Area

	// Start Students Counter Section

		var getcountervalues = document.querySelectorAll('.countervalues');
		// console.log(getcountervalues);

		getcountervalues.forEach(function(getcountervalue){

			getcountervalue.textContent = 0;

			// console.log(getcountervalue);

			const updatecounter = function(){
				// console.log('i am working');

				const getcttarget = getcountervalue.getAttribute('data-target');
				// console.log(getcttarget);
				// console.log(typeof getcttarget, getcttarget);

				const getctcontent = +getcountervalue.innerText;
				console.log(typeof getctcontent,getctcontent);

				const incnumber = getcttarget / 100;
				console.log(incnumber);

				if(getctcontent < getcttarget){
					getcountervalue.textContent = getctcontent + incnumber;

					setTimeout(updatecounter,30);

				}
			}

			updatecounter();

		});

	// End Students Counter Section


// End Javascript Area

// 25CT