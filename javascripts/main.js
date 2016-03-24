$(document).ready(function() { 
 
        $.ajax({
            url: 'http://webcitation.fr/quotes.json',
            dataType: 'json',
            success: function(json) {
                for(var key in json) {
                    $('#js-content').append('<blockquote class="blockquote">'+ json[key]['title'] +'<footer class="blockquote-footer">'+ json[key]['author'] +'</footer></blockquote>');
                }
            }
        });    


	$("#js-request").on("click",function(){
		$("#js-request").hide();
		$("#js-bio").load("bio.txt");
	});
    
});
