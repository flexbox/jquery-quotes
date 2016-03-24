$(document).ready(function() {

	var dataUrl = 'http://webcitation.fr/quotes.json';

	$.getJSON(dataUrl, function(data) {
		var items = [];
		$.each( data, function( key, val ) {
			var lg = data.length; 
			var i = 0;
			for(i; i<lg; i++){
				items.push( "<blockquote id='" + key + "' class='blockquote'><p class='m-b-0'>" + data[i].title + "</p><footer class='blockquote-footer'>" + data[i].author + "</footer></blockquote>" );
			}
    	
 		});
 		$( "<ul/>", {
		    "class": "quotes",
		    html: items.join( "" )
		}).appendTo( "body" );
	});


    $('#js-modal').on('show.bs.modal', function (event) {
		var button = $(event.relatedTarget)
		var recipient = button.data('whatever')
		var modal = $(this)
		modal.find('.modal-title').text('Add a new quote')
		modal.find('.modal-body textarea').val(recipient)
	});

    $('#js-request').on('click', function(event) {
    	event.preventDefault();
    	$(this).hide();
    	$("#js-bio").load('bio.txt');
    });


});

