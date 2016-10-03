var quotes = [{
  name: "professor",
  quote: "Good news everyone!",
  color: "grey"
}, {
  name: "zoidberg",
  quote: "Hooray!",
  color: "blue"
}, {
  name: "Bender",
  quote: "Lets face it, comedy’s a dead art form. Now tragedy! That’s funny.",
  color: "red"
}, {
  name: "Amy",
  quote: "You’ve gone from crazy like a fox to crazy like Fox News.",
  color: "pink"
}, {
  name: "Hermes",
  quote: "With a warning label this big, you know they gotta be fun!",
  color: "green"
}, {
  name: "Fry",
  quote: "All this prolonged exposure to radiation is making me thirsty.",
  color: "orange"
}]

$(document).ready(function() {
  function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  $("#getMessage").on("click", function() {
    var qInt = getRandomIntInclusive(0, quotes.length - 1);
    var futQuote = "";
    var shareButton = "";
    var shareUrl = "";

    futQuote += "<blockquote>";
    futQuote += "<p>" + quotes[qInt].quote + "</p>";
    futQuote += "<footer>" + quotes[qInt].name + "</footer>";
    futQuote += "</blockquote>";

    shareUrl += '<a class="twitter-share-button" target="_blank" href="https://twitter.com/intent/tweet?text=' + encodeURI(quotes[qInt].quote) + '">';
    
    shareButton += shareUrl;
    shareButton += '<button class="btn btn-default">';
    shareButton += '<i class="fa fa-twitter" aria-hidden="true"></i> Share';
    shareButton += '</button>';
    shareButton += '</a>';

    $(".message").html(futQuote);
    $("body").css("background-color", quotes[qInt].color);
    $(".twitter-share-button").html(shareButton);
  });
});