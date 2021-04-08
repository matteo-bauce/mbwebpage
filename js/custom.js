/*global jQuery:false */
$(document).ready(function(){
	$("p").hover(function(){
		$(this).addClass("animated fadeInUp");
	    },
	    function(){
		$(this).alert("Bye! You now leave p1!");
	    });
    });
$('.dropdown').click(function(){
     $('.dropdown-menu').toggleClass('show');

 });
