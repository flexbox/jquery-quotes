$( document ).ready(function() {

	var dataUrl = "http://webcitation.fr/quotes.json";

	$.getJSON( dataUrl, function( data ) {

    var items = [];
    $.each( data, function( key, val ) {
      items.push( "<blockquote class=\"blockquote\"><p class=\"m-b-0\">" + data[key].title + 
        "</p><footer class=\"blockquote-footer\">" + data[key].author + "</footer></blockquote>" );
    });

    $( "<div/>", {
      "class": "quotations",
      html: items.join( "" )
    }).appendTo( "#js-content" );
  });


  $('#js-request').on('click', function(e){
    e.preventDefault();
    $('#js-request').hide();
    $('#js-bio').load("bio.txt", function( response, status, xhr ) {
      if ( status == "error" ) {
        var msg = "Sorry but there was an error: ";
        $( "#js-bio" ).html( msg + xhr.status + " " + xhr.statusText );
      }
    });
  });
});