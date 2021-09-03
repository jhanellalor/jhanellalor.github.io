var	msg = ["Sunday Fundayyyy!!",
			   "UGHHH Mondays...",
			   "Its Tuesday. Eh",
			   "Wow! Wednesday!",
			   "Thrilling Thursday!",
			   "Thank God its Friday",
			   "Time to TURN UUUUUPPPPPPPPPP"];
var myDate = new Date();
var todayNumber = myDate.getDay();
var todayElement = document.getElementById('day' + todayNumber);
todayElement.setAttribute('id', 'today');

var messageElement = document.getElementById('message');
messageElement.innerText = msg[todayNumber];

