$(function(){
	$("footer .logo").load('logos_fotter.html');

	$.get('user.json', function(data) {
		var avatar = new Image();
		avatar.src = data.avatar;
		avatar.title = data.nombre + " " + data.apellido;
		$('#avatar').append(avatar);
	});


});