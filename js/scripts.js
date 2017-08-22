//business logic








//user-interface logic
$(document).ready(function() {
  $("form#movie-info").submit(function(event){
    event.preventDefault();
    var title = $("select#title").val();
    var showTime = $("input#showtime").val();
    var age = $("input#age").val();

    console.log(title, showTime, age);




  });
});
