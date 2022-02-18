$( "input" ).on("focus",function() {
    $( this ).next( "span" ).css( "display", "inline" ).fadeOut(2000);
  });
  