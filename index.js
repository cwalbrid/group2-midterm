$(document).ready(function (){

$('.open').on('click', function(){
	$(this).toggleClass('open selected');
	
	
	var seatNumber = $(this).attr('id'); 
	var seatClass = $(this).attr('class');
	
	if(seatClass === 'seats selected'){
		console.log(seatClass);
	}

	//toggle visibility for form with conditional statement that accepts 'open' classes
	/*
	var formVis = $('.form').css('visibility');

	if(formVis === 'hidden'){
		$('form').css('visibility', 'visible');
	}
	*/

	//'Seat(s) Selected' field is populated with clicked seat's ID value
	/*
		
	*/

});


	

//document.body wrapper
});