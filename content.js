$(document).on('click', function(elem) {
    var elem = $(elem.target);
    var tagName = elem.prop("tagName");
    console.log(elem.text(), tagName);
    if(tagName == "P") {
        var text = elem.text()function doGet(e) {
            var p = e.parameter;
            var translatedText = LanguageApp.translate(p.text, p.source, p.target);
            return ContentService.createTextOutput(translatedText);
          }function doGet(e) {
            var p = e.parameter;
            var translatedText = LanguageApp.translate(p.text, p.source, p.target);
            return ContentService.createTextOutput(translatedText);
          };
        chrome.runtime.sendMessage( {
            "message": text
        }, function(response) {
            console.log(response);
            elem.after("<p>" + response + "</p>");
        });
    }
});