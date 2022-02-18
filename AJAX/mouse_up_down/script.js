$("body").on("mouseup", function (e) {
    $(".output").append(`This is ${e.type} Event <br/>`)
    // setTimeout(function(){
    //     $(".output").hide()
    // }, 2000
    // )
})
$(document).on("mousedown",function (e) {
    $(".output").append(`This is ${e.type} Event <br/>`) 
})