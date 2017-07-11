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
    var loc = "";
    var result = "";
    var more = "";

    console.log(data.location.name);
    loc += '<p>' + data.location.name + '</p>'; //town
    loc += '<p>' + data.location.region + '</p>'; //state
    $("#location").html(loc);

    result += '<p>' + data.current.condition.text + '</p>';
    result += '<p>' + data.current.temp_f + '</p>';
    $("#message").html(result);

    var wind_speed = "wind speed: " + data.current.wind_mph + " mph";
    var pressure = "barometric pressure: " + data.current.pressure_in + "in";
    var precip = "precipitation: " + data.current.precip_in + " in";
    var feels_like = "feels like: " + data.current.feelslike_f + "f";
    var visibility = "visibility: " + data.current.vis_miles + " mi";

    more += '<p>' + wind_speed + '</p>';
    more += '<p>' + "wind direction: " + data.current.wind_degree + '</p>';
    more += '<p>' + pressure + '</p>';
    more += '<p>' + precip + '</p>';
    more += '<p>' + "humidity: " + data.current.humidity + '</p>';
    more += '<p>' + "clouds: " + data.current.cloud + '</p>';
    more += '<p>' + feels_like + '</p>';
    more += '<p>' + visibility + '</p>';
    $("#more").html(more);
    $("#more").attr("aria-expanded","true");
  }
});
