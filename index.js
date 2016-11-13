$(document).ready(function (){

var selectedSeats = [];

$('.open').on('click', function(){
	$(this).toggleClass('open selected');
	
	
	var seatNumber = $(this).attr('id'); 
	var seatClass = $(this).attr('class');
	var formOpacity = $('.form').css('opacity');
	
	if(seatClass === 'seats selected'){
		// console.log(seatClass);
		selectedSeats.push(seatNumber);

		for(var i = 0; i < selectedSeats.length; i++){
			fetchedSeat = selectedSeats[i]; 
			console.log(fetchedSeat);
		 }
	}

	//toggle visibility for form with conditional statement that accepts 'open' classes
	
	if(formOpacity === '0'){
		$('.form').css('opacity', '1');
	}
	

	//'Seat(s) Selected' field is populated with clicked seat's ID value
	/*
		
	*/

});


	

//document.body wrapper
});