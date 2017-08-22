//business logic
function Ticket (movie, showtime, age) {
  this.movie = movie;
  this.showtime = showtime;
  this.age = age;
}

Ticket.prototype.getTicket = function () {

  if (this.age >= 60) {
    return 7;
  } else if (this.showtime < 17) {
    return 10;
  } else {
    return 12;
  }
}






//user-interface logic
$(document).ready(function() {
  $("form#movie-info").submit(function(event){
    event.preventDefault();
    var title = $("select#title").val();
    var showTime = parseInt($("input#showtime").val());
    var age = parseInt($("input#age").val());

    var customerTicket = new Ticket(title, showTime, age);

    console.log(customerTicket.getTicket());



  });
});
