var wikiSearch = "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=" + "batman" + "&callback=?";


$.getJSON(wikiSearch,null,function(json){
  $.each(json["query"]["search"], function(key, value){
    console.log("key: " + JSON.stringify(key) + " and value: " + JSON.stringify(value));
  // console.log(json["query"]);
  });
},'json');

