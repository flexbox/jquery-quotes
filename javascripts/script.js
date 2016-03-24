$(document).ready(function() {

        $.getJSON("http://webcitation.fr/quotes.json ", function (data) {
            var items = [];
            $.each(data, function (key, val) {
                items.push("<li id='" + key + "'>" + data[key].title + "</li>");
            });
            $("<ul/>", {
                "class": "my-new-list",
                html: items.join("")
            }).appendTo("body");
        });

});