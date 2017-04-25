$(document).ready(function(){

 function getIP(data) {
     var myLat = Math.round(data.lat);
     var myLon = Math.round(data.lon);
     var result = "";
           
    $.get("http://api.openweathermap.org/data/2.5/weather?lat=" + myLat + "&lon=" + myLon + "&units=imperial&appid=e0737aaec18774db13c1434bc50f2fe5", function(data, textStatus, jqxhr) {
      console.log( JSON.stringify( data )); // Data returned
      console.log(textStatus); // Success
      console.log(jqxhr.status); // 200

	result += '<p>' + JSON.stringify(data.weather[0].main) + '</p>';
	result += '<p>' + JSON.stringify(Math.round(data.main.temp)) + 'F</p>';
                           
      $(".message").html(result);
    });
 }


 $.getJSON( "http://ip-api.com/json/", function( data, textStatus, jqxhr ) {
  console.log( JSON.stringify( data )); // Data returned
  console.log( textStatus ); // Success
  console.log( jqxhr.status ); // 200
 }).done( getIP );

 });
