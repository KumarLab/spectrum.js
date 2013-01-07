// JavaScript Spectrum
$(document).ready(function(){
  spectrum();
	function spectrum(){
		var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
		$('#quote').animate({color:hue},4000);
		$('#footer').animate({backgroundColor:hue},4000);
		spectrum();
	}
});
