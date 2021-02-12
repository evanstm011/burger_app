// // Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
//   $(".delquote").on("click", function(event) {
//     var id = $(this).data("id");

//     // Send the DELETE request.
//     $.ajax("/api/quotes/" + id, {
//       type: "DELETE"
//     }).then(
//       function() {
//         console.log("deleted id ", id);
//         // Reload the page to get the updated list
//         location.reload();
//       }
//     );
//   });

  $("#submitBtn").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burgerName: $("#burgerName").val().trim()
       };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new Burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".eatBurger").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();


    var id = $(this).data("id");

    // Send the POST request.
    $.ajax("/api/quotes/" + id, {
      type: "PUT",
      data: updatedQuote
    }).then(
      function() {
        console.log("updated quote");
        // Reload the page to get the updated list
        location.assign("/");
      }
    );
  });
});
