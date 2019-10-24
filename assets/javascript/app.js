//I want to dynamically create buttons with each searched value
//Create an array which houses a few searches for user example
var topics = [
    "Cars", "Avengers", "Hammer", "Subwoofer", "Indigenous"
]

console.log(topics[1]);
//Create function for gifs to begin animation and stop animation
//Create call to gif api

function mcGif () {
for(var i = 0; i < topics.length; i++){
    $('<button>')
        .attr('id', topics[i])
        .text(topics[i])
        .appendTo((theButtons)) //This did not work initially due to div name being in quotes
        .click(function(){
            clicks.push(this.id);
        });
}
};
mcGif();