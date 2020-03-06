// this is our back-end stuff


// this is our front-end stuff
$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault();
    //debugger
    var englishPhrase = $("input#englishInput").val();
    var englishArray = englishPhrase.split(" ");

    console.log(englishPhrase);
    console.log(englishArray);

  });
});