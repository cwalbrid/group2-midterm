$(document).ready(function (){

// An array that stores the seat numbers that a user has selected
var selectedSeats = [];
// An array that stores user information on form submit
var userInfo = [];

// An event handler for when the button w/id 'reservebutton' is clicked
	$('#reservebutton').on('click', function(){
		var name = $('#name').val();
		var reservedSeats = $('#seatsToBeReserved').val();
		var userObject = {
			name: name,
			seat: reservedSeats
		};
		userInfo.push(userObject);
		console.log(userInfo);

		$('#name').val('');
		$('#seatsToBeReserved').val('');

		$('.selected').removeClass('selected').removeClass('seats').addClass('reserved');
});

// A handler for when a user clicks on a seat with a class of Open or Selected
$('.seats').on('click', function(){
	
	var seatNumber = " " + $(this).attr('id').toUpperCase(); 
	var seatClass = $(this).attr('class');
	var formOpacity = $('#form').css('opacity');
	
	// Push the seat number to our selectedSeats array
	if(seatClass === 'seats open'){

		selectedSeats.push(seatNumber);
		alert(selectedSeats);

	// Sets form opacity to 1 if the current opacity is set to 0. This makes the form visible.
		if(formOpacity === '0'){
			$('#form').css('opacity', '1');
	};	 
	
	//Remove seats from the selectedSeats array if they have a class of selected and are clicked again.
	} else if(seatClass === 'seats selected'){
		
		selectedSeats = jQuery.grep(selectedSeats, function(e){
			return e !== seatNumber;
		});

		
	};

	//'Seat(s) Selected' field is populated with clicked seat's ID value
	$('#seatsToBeReserved').val(selectedSeats);

	//Toggle seat class between 'open' and 'selected'
	$(this).toggleClass('open selected');
	

});
	
	


	

//document.body wrapper
});