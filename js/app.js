//Edited and Corrected and Added by Hieu Nguyen
//Ryu Throwing Position in the initial place on the screen.
$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})

	.mousedown(function() {
// Playing the hadouken sound mp3.
// This is showing hadouken and animate it to the right of the screen from Ryu shooting from his hand.		
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
// Animate the hadouken (fireball) to the right of the screen from the left.
		$('.hadouken').finish().show().animate(
			{'left': '1020px'},
			500,
			function() {
				$(this).hide();
				$(this).css('left', '520px');
			});
		
	})
//Save these changes, then return to the browser to verify everything works. 
//Note that when the mouse is released, although Ryu returns to his ready position, the Hadouken doesn't disappear. 
//This is a good thing because you will animate across the screen, and then want it to disappear	
	.mouseup(function() {
// Ryu goes back to his ready position
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	})
//Added this as per from the assignment on the DRILL
//Some hints: when you use the keydown method, you need to check to see 
//if the key that the user pressed down is the specific one you're looking for.
// The key code for "x" is 88.
	$(document).keydown(function(event) {
		if (event.keyCode === 88) {
			$('.ryu-still').hide();
			$('.ryu-ready').hide();
			$('.ryu-cool').show();
		}
//Applying the same concept except this is the keyup method concepts.
	}).keyup(function(event){
		if (event.keyCode === 88) {
			$('.ryu-still').show();
			$('.ryu-ready').hide();
			$('.ryu-cool').hide();
		}
	

	});
});
//Add the fireball sound.
//When this function gets run, it will load and play the sound file indicated in audio#hadouken-sound. 
//Volume values can range from 0 to 1. Set the volume to 0.5, so it's audible but not blaring. 
//The final step for your audio effect is to call playHadouken within the body of the .mousedown() code block.
	function playHadouken () {
		$('#hadouken-sound')[0].volume  = 0.5;
		$('#hadouken-sound')[0].load();
		$('#hadouken-sound')[0].play();
		
}
	
