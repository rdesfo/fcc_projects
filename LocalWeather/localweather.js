$(document).ready(function(){

  jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("bottom", "50%");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + 
      $(window).scrollLeft()) + "px");
    return this;
  }

  $('.container').center();

  navigator.geolocation.getCurrentPosition(myPosition);

  function myPosition(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    getWeather(lat, lon);
  }

  function getWeather(lat, lon) {
    $.get("https://api.apixu.com/v1/current.json?key=05495792429f4ad7b9e13631171107&q=" + lat + " " + lon, function(data, textStatus, jqxhr) {
       console.log(JSON.stringify( data )); // Data returned
       console.log(textStatus); // Success
       console.log(jqxhr.status); // 200
    })
    .done(function(json){
      console.log(json);
      updateResult(json);
    })
    .fail(function( jqxhr, textStatus, error ) {
      console.log(textStatus); // Success
      console.log(jqxhr.status); // 200
      console.log(error);
    });
  }

  function updateResult(data){
    var result = "";
    result += '<p>' + data.current.condition.text + '</p>';
    result += '<p>' + data.current.temp_f + '</p>';
    $(".message").html(result);
  }
});
