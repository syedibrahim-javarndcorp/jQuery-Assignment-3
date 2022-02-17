$(".a").on("dblclick", function () {
  $("<p><b> Double Click Event Triggered </b></p>").appendTo(".output");
});
$(".a").on("click", function () {
    $("<p><b> Click Event Triggered </b></p>").appendTo(".output");
  });