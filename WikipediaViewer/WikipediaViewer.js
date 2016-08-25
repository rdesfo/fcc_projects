
$(document).ready(function() {
  
  $('#btnSearch').on("click", function(){
    var text= document.getElementById('search').value;
    console.log(text);
  
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
    result += '<h2>' + JSON.stringify(value.title) + '</h2>';
    result += '<p>' + JSON.stringify(value.snippet) + '</p>';
    result += '</div>';

    // "https://en.wikipedia.org/wiki/" + encodeURI("some title")
    });

    $(".results").html(result);
    console.log(result);

  },'json');
};
}); //ready
