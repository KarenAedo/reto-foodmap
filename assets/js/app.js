$(document).ready(function(){
	
	//Splash
   	setTimeout(function(){
   		$('#splash').fadeOut(500);
   	}, 2000);
   
   	//input filtro
   	var elements = $('article')
   	$('select').change(function(){
   		var value = $('option:selected').text().toLowerCase();
   		console.log(value);
   		$('article').detach();
   		elements.appendTo('restaurantes');
   		if(value != 'selecione') $('article').show().filter(':not(.'+ value +')').detach();
   	});

   //mouseover'



}); //.ready