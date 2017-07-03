

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

    var wikiSearch = "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=" + text + "&callback=?";

    doSearch(wikiSearch);
    return doSearch(wikiSearch);
  })
  
  var doSearch = function(search){
    $.getJSON(search)
      .done(function(json) {
        console.log( "second success" );
        var result = "";
        $.each(json.query.search, function(key, value){
          result += '<div class="jumbotron">';
          result += '<h2><a href="https://en.wikipedia.org/wiki/' + (value.title).replace(' ', '_')+ '">'+ value.title + '</a></h2>';
          result += '<p>' + value.snippet + '</p>';
          result += '</div>';
        });
        $(".results").html(result);
        console.log(result);
      })
      .fail(function() {
        console.log( "error" );
      })
  };
}); //ready
