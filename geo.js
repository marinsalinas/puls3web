$(function(){
	var geo =  navigator.geolocation;
	var opciones = {};

	function geo_error(){
		console.log("Hmmm.. this is akward");
	}

	function geo_exito(position){
		var lat = position.coords.latitude;
		var lon = position.coords.longitude;
		var mapa = new Image();
		mapa.src = "http://maps.googleapis.com/maps/api/staticmap?zoom=17&size=250x250&sensor=true&center="+lat+","+lon;
		$('#geo').append(mapa);
	}

	geo.getCurrentPosition(geo_exito, geo_error, opciones);
});