//business logic

// Stores information we need about the ticket.
function Ticket (movie, showtime, age) {
  this.movie = movie;
  this.showtime = showtime;
  this.age = age;
}

// Price depends on age and showtime, so this assigns the ticket price based on this Ticket object's values for age and showtime.
Ticket.prototype.getTicket = function () {
  if (this.age >= 60) {
    return "$7";
  } else if (this.showtime < 17) {
    return "$10";
  } else {
    return "$12";
  }
}

// We want our showtime to look like an actual time, so we change it out of 24-hr format and into AM/PM format
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
    // Get our movie information from the form: title, showTime, and customer age
    var title = $("select#title").val();
    var showTime = parseInt($("select#showtime").val());
    var age = parseInt($("input#age").val());

    // Make a new ticket object using the input
    var customerTicket = new Ticket(title, showTime, age);

    // Hide our form, show the ticket
    $(".result").slideToggle();
    $("form").slideToggle();

    // Add information to the ticket section: Movie Title, Time, Price, and Poster
    $(".movieTitle").append(customerTicket.movie);
    $(".time").append(customerTicket.getShowtime());
    $(".ticketPrice").append(customerTicket.getTicket());
    // This works because all poster images are named [Movie Title].jpeg
    $(".poster").append("<img src='img/" + customerTicket.movie + ".jpeg' alt='" + customerTicket.movie + "poster'>");
  });
});
