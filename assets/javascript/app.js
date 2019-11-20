//I want to dynamically create buttons with each searched value
//Create an array which houses a few searches for user example
// var topics = [
//     "Cars", "Avengers", "Hammer", "Subwoofer", "Indigenous"
// ]
//Create function for gifs to begin animation and stop animation
//Create call to gif api

$(document).ready(function() {

    var topics = ["Cars", "Avengers", "Hammer", "Subwoofer", "Indigenous"];


    function buttons(arrayUse, addClass, addButton){
        $(addButton).empty();

        for (var i = 0; i < arrayUse.length; i++){

            var a = $("<button>")
            a.addclass(addclass);
            a.attr("data-type", arrayUse[i]);
            
        }
    }
})
