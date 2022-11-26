$(function(){
	
	var note = $('#note'),
		ts = new Date(2015, 10, 20, 16),
		Christmas = true;
	
	if((new Date()) > ts){
		// Count towards something else.
		// Notice the *1000 at the end - time must be in milliseconds
		ts = (new Date(2015, 11, 25)),
		Christmas = false;
	}
		
	$('#countdown').countdown({
		timestamp	: ts,
		callback	: function(jours, heures, minutes, secondes){
			
			var message = "";
			
			message += jours + " <b>jour" + ( jours==1 ? '':'s' ) + ", </b>";
			message += heures + " <b>heure" + ( heures==1 ? '':'s' ) + ",</b> ";
			message += minutes + " <b>minute" + ( minutes==1 ? '':'s' ) + " et </b></b>";
			message += secondes + " <b>seconde" + ( secondes==1 ? '':'s' ) + " <br />";
			
			if(Christmas){
				message += "Avant Noël Music Underground Radio!";
			}
			else {
				message += "Avant Noël sur Underground Radio !";
			}
			
			note.html(message);
		}
	});
	
});
