
function Ticket(nameMovie, ageBuyer, quantity, timeMovie) {
  this.nameMovie = nameMovie;
  this.ageBuyer = ageBuyer;
  // this.quantity = quantity;
  this.timeMovie = timeMovie;
}



var buyer = new Ticket()


$("document").ready(function() {

  $('.dropdown-submenu a.test').on("click", function(e){
    $(this).next('ul').toggle();
    e.stopPropagation();
    e.preventDefault();
  });


  $("#formOne").submit(function() {
  var nameInput = $("input#movie").val();
  var ageInput = $("input#ageBuyer").val();
  var quantityInput = $("input#quantity").val();
  var timeInput = $("input#timeMovie").val();
  console.log(nameInput);
  console.log(ageInput);
  console.log(quantityInput);
  console.log(timeInput);
  event.preventDefualt();
})
})
