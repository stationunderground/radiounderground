$(function(){
	
	var note = $('#note'),
		ts = new Date(2017, 00, 00),
		Christmas = false;
	
	if((new Date()) > ts){
		// Count towards something else.
		// Notice the *1000 at the end - time must be in milliseconds
		ts = (new Date(2019, 00, 01));
		Christmas = true;
	}
		
	$('#countdown').countdown({
		timestamp	: ts,
		callback	: function(jours, heures, minutes, secondes){
			
			var message = "";
			
			message += jours + " jour" + ( jours==1 ? '':'s' ) + ", ";
			message += heures + " heure" + ( heures==1 ? '':'s' ) + ", ";
			message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " et  ";
			message += secondes + " seconde" + ( secondes==1 ? '':'s' ) + " . <br />";
			
			if(Christmas){
				message += "Avant la Nouvelle Année 2019 !";
			}

			else {
				message += "Reste 10 jours avant Noël !";
			}
			
			note.html(message);
		}
	});
	
});
