// this is our back-end stuff


// this is our front-end stuff
$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault();
    var englishPhrase = $("input#englishInput").val();
    var englishWords = englishPhrase.split(" ");

    console.log(englishPhrase);
    console.log(englishWords);

    englishWords.forEach(function(englishWord){
      if (englishWord.match(/[0-9]/)) {
        console.log("integer detected")
      } else if (englishWord.match("a","A","e","E","i","I","o","O","u","U")) {
        englishWord.concat("ay");
        console.log("What? only if it's the whole word" + englishWord.concat("ay"));
      } else if (englishWord.charAt(0).match(/[aeiouAEIOU]/)) {
        englishWord.concat("way");
        console.log(englishWord.concat("way"));
      } else if (englishWord.charAt(0).match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/)) {
        console.log("This word needs to be pig-latinized")
      }
    });

  });
});