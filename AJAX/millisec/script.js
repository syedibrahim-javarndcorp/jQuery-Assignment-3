var clickTime, diffrence;
$(".count").on("click", function (e) {
  if (clickTime) {
    diffrence = e.timeStamp - clickTime;
    $(".output").append("Time Difference is " + diffrence + "<br/>");
  } else {
    $(".output").append(`Click again <br/> `);
  }
  clickTime = e.timeStamp;
});
