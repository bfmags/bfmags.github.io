// Pair Generator App
// @author Bruno Magalhães <bfmags@gmail.com>
(function(){

	// Bind keycodes globally
	window.ENTER_KEY = 13;
	window.ESC_KEY = 27;

	// Creates PairGenerator namespace
	window.PairGenerator = {
		Models: {},
		Collections: {},
		Views: {}
	};

	// Helper function to normalize displayed names
	window.toTitleCase = function(name) {
		return name.replace(/\w\S*/g, function(txt){
			if (txt === txt.toUpperCase()) {
				return txt;
			} else {
				return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
			}
		});
	}

})();

$(document).ready(function(){
	// Start app
	new PairGenerator.Views.AppView();
	// Entry animations with jQuery for IE Support
	$(".appcontainer").animate({ opacity: 1 }, 500);
	$("#app").delay(500).animate({ opacity: 1 }, 700)
			 .delay(700).animate({ marginTop: "-150px" }, 700);
});