$("body").on("click", function (e) {
    $(".output").html("<h1>Clicked the tag  : " + e.target.nodeName +"</h1> ")
})