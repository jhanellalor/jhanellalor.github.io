$(document).ready(function () {
	var d = new Date();
	var	day = d.getDay();
	var	msg = ["Sunday Fundayyyy!!",
			   "UGHHH Mondays...",
			   "Its Tuesday. Eh",
			   "Wow! Wednesday!",
			   "Thrilling Thursday!",
			   "Thank God its Friday",
			   "Time to TURN UUUUUPPPPPPPPPP"]

	$('#' + day).attr('id', 'today');
	$("#message").text(msg[day]);
	
});