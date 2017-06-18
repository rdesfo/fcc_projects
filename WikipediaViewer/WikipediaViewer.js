

$(document).ready(function() {


jQuery.fn.center = function () {
  this.css("position","absolute");
  this.css("bottom", "50%");
  this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + 
    $(window).scrollLeft()) + "px");
  return this;
}

  $('.text-center').center();
  
  $('#btnSearch').on("click", function(){
    var text= document.getElementById('search').value;
    console.log(text);

  $('.text-center').css("position", "static");
  //$('.text-center').css("top", "5%");

    doSearch(text);
  })
  
var doSearch = function(text){
  var wikiSearch = "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=" + text + "&callback=?";

  $.getJSON(wikiSearch,null,function(json){
    var result = "";

    $.each(json.query.search, function(key, value){
    //console.log("key: " + JSON.stringify(key) + " and value: " + JSON.stringify(value));
    //console.log(JSON.stringify(value.title));
    //console.log(JSON.stringify(value.snippet));

    result += '<div class="jumbotron">';
	result += '<h2><a href="https://en.wikipedia.org/wiki/' + (value.title).replace(' ', '_')+ '">'+ JSON.stringify(value.title) + '</a></h2>';
    result += '<p>' + JSON.stringify(value.snippet) + '</p>';
    result += '</div>';

    // "https://en.wikipedia.org/wiki/" + encodeURI("some title")
    });

    $(".results").html(result);
    console.log(result);

  },'json');
};
}); //ready
