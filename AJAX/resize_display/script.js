$( window ).resize(function() {
  $( "body" ).prepend( "<div> The Width is = " + $( window ).width() + "</div>" );
});