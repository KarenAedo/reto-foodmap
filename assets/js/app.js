$(document).ready(function(){
	
//SPLASH - función para que aparezca el splash
//setTimeout función para el tiempo
setTimeout(function(){
   $('#splash').fadeOut(500); //fadeOut, para desaparecer cosas
  }, 2000);

}); //document.ready



/*for(var i = 0; i < restaurants.length; i++){
  var createRestaurants = $('#restaurants').append(
    '<div class="row character">' +
    '<div class= "col-md-6 text-center">' +
    '<img src="assets/' + restaurants[i].photo + '">' +
    '</div>' +
    '<div class= "col-md-6">'+
    '<h3>' + restaurants[i].name + '</h3>' +
    '<p>School: ' + restaurants[i].location + '</p>' +
    '<p>City: ' + restaurants[i].foodType + '</p>' +
    '</div>' +
    '</div>');
}

$(#filter).on('change', function(){
  var inputValue = $(#filter).val();
  $('.food-type').each(function(index, value){
    var temp = $(this).text();
      if(temp == inputValue){
        $(this).parent().parent().parent().parent().show();
      } else {
        $(this).parent().parent().parent().parent().hide();
      }
  });
}); */  