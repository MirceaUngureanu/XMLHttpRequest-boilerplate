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
    }
    xhr.open('GET', url);
    // some API require special authorization, that's when we use 'setRequestHeader'
    // some API’s will also allow you attach your client ID to the url of the request, that way we don't need the 'setRequestHeader'
    if (headerData) {
        xhr.setRequestHeader('Authorization', 'Client-ID your-unique-id');
    }
    xhr.send();
}
getData('https://jsonplaceholder.typicode.com/users');