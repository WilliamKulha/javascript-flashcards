//This is how you make jQuery find only the interacted with element and do something with it.//

$(document).ready(function(){
  $(".card-title")
    .click(function(){
      var mainDiv= $(this).parent().parent();
      mainDiv.find(".card-text").slideDown();
  });
  $(".card-text")
    .click(function(){
      var mainDiv= $(this).parent().parent();
      mainDiv.find(".card-text").slideUp();
    });
});
