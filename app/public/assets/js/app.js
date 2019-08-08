

$(function () {
    $(".devouredTrue").on("click", function (event) {
        var id = $(this).data("id");
        console.log(this)
        console.log("id" + id)

        $.ajax("/api/burgers/" + id, {
            type: "PUT"
          
        }).then(
            function () {
                console.log("changed devoured");

                location.reload();
            }
        );
    });

    $("#addburger").on("click", function (event) {
        event.preventDefault()
var userInput = $("#burgerNameInput").val().trim();
console.log(userInput)

        if(userInput===""){
            alert("Please input a burger name");
            return false
        } else{
  

        var newBurger = {
            name: userInput,
            devoured: false
        };
        console.log("--->>> ", newBurger)
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");

                location.reload();
            }
        
        );
    }
    });


});
