var $ = require("jquery");
$.getScript("http://ip-api.com/json/?callback=getIP")

function getIP(data) {
  var myLat = Math.round(data.lat);
  var myLon = Math.round(data.lon);
      
  console.log(data);
  console.log("http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=e0737aaec18774db13c1434bc50f2fe5");
          
  $.get("http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=e0737aaec18774db13c1434bc50f2fe5", function(data, textStatus, jqxhr) {
    console.log(data); // Data returned
    console.log(textStatus); // Success
    console.log(jqxhr.status); // 200
                            
    $(".message").html(JSON.stringify(data.weather[0].main));
  });
}
