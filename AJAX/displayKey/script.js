$("input").keypress(function (e) {
  $(".output").html(e.type + " : " + e.key);
});
