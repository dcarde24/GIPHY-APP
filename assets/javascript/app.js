//I want to dynamically create buttons with each searched value
//Create an array which houses a few searches for user example
// var topics = [
//     "Cars", "Avengers", "Hammer", "Subwoofer", "Indigenous"
// ]
//Create function for gifs to begin animation and stop animation
//Create call to gif api

$(document).ready(function() {
//added array
    var topics = ["Cars", "Avengers", "Hammer", "Subwoofer", "Indigenous"];

//create function for adding buttons and then appending them to an array
    function buttons(arrayUse, addClass, addButton){
        $(addButton).empty();

        for (var i = 0; i < arrayUse.length; i++){

            let p = $("<button>")
            $("p").addClass(addClass);
            $("p").attr("data-type", arrayUse[i]);
            $("p").text(arrayUse[i]);

            $(addButton).append(p);

        }
    }
//Create a function call to giphy for gif search
    $(document).on("click", ".gifButtons", function() {

        $("#newGifs").empty();

        $(".gifButtons").removeClass("active");
        $(this).addClass("active");

        var type = $(this).attr("data-type");
        var queryUrl = "http://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=KA4jqDVANEZo1GtpOp0jo5sY1JVUKcmj";

        $.ajax({
            url:queryUrl,
            method: "GET"
        })

        .then(function(response) {
            var result = response.data;

            for (var i =0; i < results.length; i++) {
                var topDiv = $("<div class=\"topic\">");

                var rating = result[i].rating;

                var p = $("<p>").text("Rating: " + rating);

                var animated = results[i].images.fixed_height.url;
                var still = results[i].images.fixed_height_still.url;

                var gitImage = $("<img>");
                gitImage.attr("src", still);
                gitImage.attr("data-still", still);
                gitImage.attr("data-animate", animated);
                gitImage.attr("data-state", "still");
                gitImage.addClass("git-Image");

                topDiv.append(p);
                topDiv.append(gitImage);

                $("#newGifs").append(topDiv);
            }
        });

    });


   $(document).on("click", ".git-Image", function() {
       var state = $(this).attr("data-state");

       if (state === "still"){
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
       }
       else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");  
       }
   }); 

   $("#add-gif").on("click", function(event) {
       event.preventDefault();
       var oneGif = $("input").eq(0).val();

       if(oneGif.length > 2) {
           topics.push(oneGif);
       }

       buttons(topics, "gif-button", "#gif-buttons");
   });
   buttons(topics, "gif-button", "#gif-buttons");

})

