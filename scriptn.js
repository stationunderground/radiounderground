$(function(){
	
	var note = $('#note'),
		ts = new Date(0000, 08, 00),
		Christmas = true;
	
	if((new Date()) > ts){
		// Count towards something else.
		// Notice the *1000 at the end - time must be in milliseconds
		ts = (new Date(2022, 11, 25));
		Christmas = true;
	}

		
	$('#countdown').countdown({
		timestamp	: ts,
		callback	: function(Jours, Heures, Minutes, Secondes){
			
			var message = "Il Reste  ";
			
			message += Jours + " Jour" + ( Jours==1 ? '':'s' ) + ", ";
			message += Heures + " Heure" + ( Heures===1 ? '':'s' ) + ", ";
			message += Minutes + " Minute" + ( Minutes==1 ? '':'s' ) + " et  ";
			message += Secondes + " Seconde" + ( Secondes==1 ? '':'s' ) + "  <br />";
			
			if(Christmas){
				message += "Avant Noël 2022 !<br /> Bienvenue sur Radio Underground";

				}

			else {
				message += "Reste 10 jours avant Noël !";
			}
			
			note.html(message);
		}
	});
	
});
