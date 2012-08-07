
var mobMenu = $("#main-menu-select");

mobMenu.bind('change', function(){
	window.location=mobMenu.attr('value');
});