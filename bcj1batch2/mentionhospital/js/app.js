$(document).ready(function(){

	// Start Header Section

	// Start Banner Section

	// $('.carousel').carousel({
	// 	interval:500
	// });

	// End Banner Section

	// End Header Section

	// Start Info Section
	$(window).scroll(function(){
		let getscrollpoint = $(this).scrollTop();
		// console.log(getscrollpoint);

		if(getscrollpoint >= 220){
			$('.infotexts').addClass('fromlefts');
			$('.infopics').addClass('fromrights');
		}else{
			$('.infotexts').removeClass('fromlefts');
			$('.infopics').removeClass('fromrights');
		}
	});
	// End Info Section

	// Start Premises Section

	if($(window).width() <= 726){
		$('#lightslider').lightSlider({
			// auto:true,
			item:1,
			loop:true,
			slideMove:1,
			speed:1200
		}).play();	
	}else{
		$('#lightslider').lightSlider({
			// auto:true,
			item:4,
			loop:true,
			slideMove:1,
			speed:600
		}).play();
	}

	// End Premises Section

	// Start Pricing Section

	$(window).scroll(function(){
		let getscrollpoint = $(this).scrollTop();
		// console.log(getscrollpoint);
		if(getscrollpoint >= 2450){
			$('.cardones').addClass('movelefts');
			$('.cardtwos').addClass('movebottoms');
			$('.cardthrees').addClass('moverights');
		}else{
			$('.cardones').removeClass('movelefts');
			$('.cardtwos').removeClass('movebottoms');
			$('.cardthrees').removeClass('moverights');
		}
	});

	// End Pricing Section

	// Start Joinus Section
	$('#accordion').accordion();
	// End Joinus Section

	// Start Footer
	$('#getyear').text(new Date().getUTCFullYear());
	// End Footer

	// Start Progress 
		$(window).scroll(function(){
			var getprogess = $('#progresses');
			var getprogressval = $('#progressvalues');

			var getscrolltop = $(this).scrollTop();
			// console.log(getscrolltop);

			var getscrollheight = $(document).height();
			// console.log(getscrollheight);
			var getclientheight = $(window).height();
			// console.log(getclientheight);
			var calcheight = getscrollheight - getclientheight;
			var getfinalheight = Math.round( getscrolltop * 100 / calcheight );

			getprogess.css({
				"background" : `conic-gradient(steelblue ${getfinalheight}% ,#eee ${getfinalheight}% )`
			});
			getprogressval.text(`${getfinalheight}%`);
		});
	// End Progress 
});

// 4PS

// by Javascript

// var getscrollheight = document.documentElement.scrollHeight;
// console.log(getscrollheight);
// var getclientheight = document.documentElement.clientHeight;
// console.log(getclientheight);