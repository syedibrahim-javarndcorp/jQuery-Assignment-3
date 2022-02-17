$("h1,p").on("click", function (e) {
    $(".output").html(`<h1> The Event Type is ${e.type}</h1>`)
})
$("h1,p").on("mouseover", function (e) {
    $(".output").html(`<h1> The Event Type is ${e.type}</h1>`)
})