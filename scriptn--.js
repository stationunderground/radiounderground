$(function(){
	
	var note = $('#note'),
		ts = new Date(0000, 08, 00),
		Christmas = true;
	
	if((new Date()) > ts){
		// Count towards something else.
		// Notice the *1000 at the end - time must be in milliseconds
		ts = (new Date(2019, 12, 01));
		Christmas = true;
	}
		
	$('#countdown').countdown({
		timestamp	: ts,
		callback	: function(Jours, Heures, Minutes, Secondes){
			
			var message = "";
			
			message += Jours + " Jour" + ( Jours==1 ? '':'s' ) + ", ";
			message += Heures + " Heure" + ( Heures===1 ? '':'s' ) + ", ";
			message += Minutes + " Minute" + ( Minutes==1 ? '':'s' ) + " et  ";
			message += Secondes + " Seconde" + ( Secondes==1 ? '':'s' ) + "  <br />";
			
			if(Christmas){
				message += "Bonne et Heureuse Année 2020 à tous !";
 			}

			else {
				message += "Reste 10 jours avant la nouvelle Année !";
			}
			
			note.html(message);
		}
	});
	
});
