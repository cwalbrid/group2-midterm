$(document).ready(function (){

// An array that stores the seat numbers that a user has selected
var selectedSeats = [];

// A handler for when a user clicks on a seat with a class of Open or Selected
$('.seats').on('click', function(){
	
	var seatNumber = $(this).attr('id'); 
	var seatClass = $(this).attr('class');
	var formOpacity = $('.form').css('opacity');
	
	// Push the seat number to our selectedSeats array
	if(seatClass === 'seats open'){

		selectedSeats.push(seatNumber);
		alert(selectedSeats);

	// Sets form opacity to 1 if the current opacity is set to 0. This makes the form visible.
		if(formOpacity === '0'){
			$('.form').css('opacity', '1');
	};	 
	
	//Remove seats from the selectedSeats array if they have a class of selected and are clicked again.
	} else if(seatClass === 'seats selected'){
		
		selectedSeats = jQuery.grep(selectedSeats, function(e){
			return e !== seatNumber;
		});

		alert(selectedSeats)
	};

	//Toggle seat class between 'open' and 'selected'
	$(this).toggleClass('open selected');
	


	

	//'Seat(s) Selected' field is populated with clicked seat's ID value
	/*
		
	*/

});


	

//document.body wrapper
});