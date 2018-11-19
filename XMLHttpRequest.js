// GET
function getData(url, headerData) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        // only run if request is complete i.e. 4 == done
        if (xhr.readyState !== 4) return;
        if (xhr.status == 200) {
            console.log('success', JSON.parse(xhr.responseText));
        } else {
            console.log('error', xhr);
        }
    };
    xhr.open('GET', url);
    // some API require special authorization, that's when we use 'setRequestHeader'
    // some API’s will also allow you attach your client ID to the url of the request, that way we don't need the 'setRequestHeader'
    if (headerData) {
        xhr.setRequestHeader('Authorization', 'Client-ID your-unique-id');
    }
    xhr.send();
}
getData('https://jsonplaceholder.typicode.com/users');

// POST
var data = 'name=victor&age=19';

function postData(url, data) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== 4) return;
        if (xhr.status == 200) {
            console.log('success', JSON.parse(xhr.responseText));
        } else {
            console.log('error', xhr);
        }
    };
    xhr.open('POST', url);
    // https://en.wikipedia.org/wiki/List_of_HTTP_header_fields
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
    xhr.send(data);
}
postData(data, 'www.testUrl.com');