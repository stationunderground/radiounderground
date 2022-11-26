/**
 * @name		jQuery Countdown Plugin
 * @author		Martin Angelov
 * @modified by 	Tommy Marshall
 * @version 	1.1
 * @url			http://tutorialzine.com/2011/12/countdown-jquery/
 * @license		MIT License
 * @Tree Days		Tree Days Digitals
 */

(function($){
	
	// Number of seconds in every time division
	var days	= 24*60*60,
		hours	= 60*60,
		minutes	= 60;
	
	// Creating the plugin
	$.fn.countdown = function(prop){
		
		var options = $.extend({
			callback	: function(){},
			timestamp	: 0
		},prop);
		
		var left, d, h, m, s, positions;

		// Initialize the plugin
		init(this, options);
		
		positions = this.find('.position');
		
		(function tick(){
			
			// Time left
			left = Math.floor((options.timestamp - (new Date())) / 1000);
			
			if(left < 0){
				left = 0;
			}
			
			// Number of days left
			d = Math.floor(left / days);
			updateDuo(0, 2, d);
			left -= d*days;
			//console.log(d);
			
			// Number of hours left
			h = Math.floor(left / hours);
			updateDuo(3, 4, h);
			left -= h*hours;
			
			// Number of minutes left
			m = Math.floor(left / minutes);
			updateDuo(5, 6, m);
			left -= m*minutes;
			
			// Number of seconds left
			s = left;
			updateDuo(7, 8, s);
			
			// Calling an optional user supplied callback
			options.callback(d, h, m, s);
			
			// Scheduling another call of this function in 1s
			setTimeout(tick, 1000);
		})();
		
		// This function updates two digit positions at once
		function updateDuo(minor,major,value){
			
			if(major - minor == 2) {
				switchDigit(positions.eq(0),Math.floor(value/10/10)%10);
				switchDigit(positions.eq(1),Math.floor(value/10)%10);
				switchDigit(positions.eq(2),value%10);
			}
			else {
				switchDigit(positions.eq(minor),Math.floor(value/10)%10);
				switchDigit(positions.eq(major),value%10);
			}
		}
		
		return this;
	};


	function init(elem, options){
		elem.addClass('countdownHolder');

		// Creating the markup inside the container
		$('<span class="countDays">').html(
				'<span class="position">\
				<span class="digit static">0</span>\
			</span>\
			<span class="position">\
				<span class="digit static">0</span>\
			</span>\
			<span class="position">\
				<span class="digit static">0</span>\
			</span>\
			<span class="countDiv countDiv0"></span>'
		).appendTo(elem);
		
		$.each(['Hours','Minutes','Seconds'],function(i){
			$('<span class="count'+this+'">').html(
				'<span class="position">\
					<span class="digit static">0</span>\
				</span>\
				<span class="position">\
					<span class="digit static">0</span>\
				</span>'
			).appendTo(elem);
			
			if(this!="Seconds"){
				elem.append('<span class="countDiv countDiv'+(i+1)+'"></span>');
			}
		});

	}

	// Creates an animated transition between the two numbers
	function switchDigit(position,number){
		
		var digit = position.find('.digit')
		
		if(digit.is(':animated')){
			return false;
		}
		
		if(position.data('digit') == number){
			// We are already showing this number
			return false;
		}
		
		position.data('digit', number);
		
		var replacement = $('<span>',{
			'class':'digit',
			css:{
				top:'-2.1em',
				opacity:0
			},
			html:number
		});
		
		// The .static class is added when the animation
		// completes. This makes it run smoother.
		
		digit
			.before(replacement)
			.removeClass('static')
			.animate({top:'2.5em',opacity:0},'fast',function(){
				digit.remove();
			})

		replacement
			.delay(100)
			.animate({top:0,opacity:1},'fast',function(){
				replacement.addClass('static');
			});
	}
})(jQuery);