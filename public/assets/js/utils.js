$(function() {

  $("#createburger").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#createburger [name=burger]").val().trim()
    };

    // Send the POST request.
    $.ajax("/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".devourburger").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var id = $(this).data("burgerid");

    var devouredBurger = {
      burger_name: $(this).data("burgername"),
      devoured: 1
    };

    // Send the PUT request.
    $.ajax("/burgers/" + id, {
      type: "PUT",
      data: devouredBurger
    }).then(
      function() {
        console.log("updated id ", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

})