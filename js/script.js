$(document).ready(function(){

	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:0,
		nav:true,
		navText: [ '', ' ' ],

		responsive:{
			0:{
				items:1
			},

			1000:{
				items:3
			}
		}
	});


	// window.addEventListener('resize', function () {
	// 	myFunction('resize');
	// });
	//
	// window.addEventListener("orientationchange", function() {
	// 	myFunction('orientation');
	// });
	//
	// function myFunction(value) {
	// 	if (value == 'resize') {
	// 		console.log('resize')
	// 		// do something
	// 	} else if (value == 'orientation') {
	// 		console.log('orientation')
	// 		// do something else
	// 	}
	// }




});


