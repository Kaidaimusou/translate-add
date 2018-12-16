$(document).on('click', function(elem) {
    var elem = $(elem.target);
    var tagName = elem.prop("tagName");
    console.log(elem.text(), tagName);
    if(tagName == "P") {
        var text = elem.text();
        chrome.runtime.sendMessage( {
            "message": text
        }, function(response) {
            console.log(response);
            elem.after("<p>" + response + "</p>");
        });
    }
});