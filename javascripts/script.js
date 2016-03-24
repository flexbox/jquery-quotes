$(document).ready(function() {

        $.getJSON("http://webcitation.fr/quotes.json ", function (data) {
            var items = [];
            $.each(data, function (key, val) {
                items.push("<blockquote class=\"blockquote\"><p id='\" + key + \"'>" + data[key].title + "</p><footer class=\"blockquote-footer\">"+data[key].author+"</footer></blockquote>");
            });
            $("<ul/>", {
                "class": "my-new-list",
                html: items.join("")
            }).appendTo("#content");
        });

    $("#js-request").on('click',function(event) {
        event.preventDefault();
        $("#js-bio").load("bio.txt", function( response, status, xhr ) {
            if ( status == "error" ) {
                var msg = "Sorry but there was an error: ";
                $( "#js-bio" ).html( msg + xhr.status + " " + xhr.statusText );
            }
        });
    });


});