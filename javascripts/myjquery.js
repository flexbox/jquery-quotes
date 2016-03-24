$(document).ready(function(){


$('#js-modal-bootstrap').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('whatever') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text('Nouvelle citation ' + recipient)
  modal.find('.modal-body input').val(recipient)
})

var dataUrl ='http://webcitation.fr/quotes.json';

$.getJSON( dataUrl, function( data ) {
	var items = [];
   $.each( data, function( key, val ) {

   	for (var i = 0; i < data.length;i++){
    items.push( "<blockquote id='" + key + "'class='blockquote'><p class='m-b-0'>" + data[i].title + "</p><footer class='blockquote-footer'>" + data[i].author +"</footer></blockquote>" );
	}

  });
 
  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "body" );
});


$("#js-request").on('click',function(event){
	event.preventDefault();
	$(this).hide();
	$('#js-bio').load('bio.txt');

})




});