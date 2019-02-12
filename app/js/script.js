$( document ).ready(function(){
	$('.doroga2').remove();
	  $( ".bot" ).click(function(){ // задаем функцию при нажатиии на элемент с классом fadetoggle
      $(".doroga").attr("src","img/OvZ.gif");
	  })
	    $( ".bot" ).click(function(){ 
        $(".doroga2").attr("src","img/k0xrZ.gif");

});
});

jQuery(document).ready(function(){
  jQuery('.bxslider').bxSlider();
});

$('.bxslider').bxSlider({
  auto: true,
  autoControls: true,
  stopAutoOnClick: true,
  pager: true,
  slideWidth: 300
});