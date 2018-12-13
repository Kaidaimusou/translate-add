chrome.runtime.onMessage.addListener(
    function(request, sender, callback) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if(xhr.readyState == 4 && xhr.status == 200 ) {
                console.log(xhr);
                var data = xhr.responseText;
                callback(data);
            }
        }
        var text = request.message;
        console.log(text);
        var url = "https://script.google.com/macros/s/AKfycbyWEJ-p8C8nA5JT3RQO5dpXM3MbLXwXLuof0Y3G8g5s1FOglvg/exec?text=" + encodeURI(text) + "&source=en&target=ja";
        xhr.open('GET', url, true);
        xhr.send();
        return true;
    }
);