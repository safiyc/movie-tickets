//business logic
function Ticket (movie, showtime, age) {
  this.movie = movie;
  this.showtime = showtime;
  this.age = age;
}

Ticket.prototype.getTicket = function () {
  if (this.age >= 60) {
    return "$7";
  } else if (this.showtime < 17) {
    return "$10";
  } else {
    return "$12";
  }
}

Ticket.prototype.getShowtime = function() {
  if (this.showtime > 12) {
    return (this.showtime - 12) + " PM";
  } else {
    return this.showtime + " AM";
  }
}

//user-interface logic
$(document).ready(function() {
  $("form#movie-info").submit(function(event){
    event.preventDefault();
    var title = $("select#title").val();
    var showTime = parseInt($("select#showtime").val());
    var age = parseInt($("input#age").val());

    var customerTicket = new Ticket(title, showTime, age);

    $(".result").slideToggle();
    $("form").slideToggle();
    $(".movieTitle").append(customerTicket.movie);
    $(".time").append(customerTicket.getShowtime());
    $(".ticketPrice").append(customerTicket.getTicket());
    $(".poster").append("<img src='img/" + customerTicket.movie + ".jpeg' alt='" + customerTicket.movie + "poster'>");
  });
});
