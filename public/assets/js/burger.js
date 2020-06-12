
$(function() {
  $(".change-devoured").on("click", function(event) {
    var id = $(this).data("id");
    var newDevoured = $(this).attr("data-newdevour");
   
    if( newDevoured == 'false' ) {
        newDevoured = true;
    } else {
        newDevoured = false;
    }
    var newDevouredState = {
      id: id,
      devoured: newDevoured
    };

   
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function(response) {
      console.log("changed devoured to", newDevouredState);
      console.log(response ,"This is the response back");
      // Reload the page to get the updated list
      location.reload();
    }
);

  });

  $(".create-form").on("submit", function(event) {
  
    event.preventDefault();
    var newBurger;

    var enteredName =  $("#burger-id").val().trim();
    console.log("enteredName: " + enteredName);
    var enteredNameLength = $("#burger-id").val().length;
    console.log("enteredNameLength: " + enteredNameLength);

   
    if(enteredName === '' || enteredNameLength > 35) {

      // clear out the invalid value
      $("#burger-id").val("");
      // then display the alert message to the user
      alert("You must enter a name between 1 and 35 characters");
    
      return;
    } else {

      
        newBurger = {
          name: enteredName,
          devoured: 0
        };
    }

    // Send the POST request.
    $.ajax("/api/burgers", {
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

});
