/**
 * Method to make an http request to the specified url
 * @param {String} method the method to use (POST, GET, PUT, DELETE)
 * @param {String} url the url to send the request to (eg. /users)
 * @param {String} body the body of the request
 * @param {Function} onSuccess the function to call when the request is successful
 */
function httpRequest(method, url, body, onSuccess) {
    let xhr = new XMLHttpRequest();

    const baseURL = "http://localhost:3000/db";
    const fullURL = baseURL + url;

    console.log("requesting: " + fullURL);

    xhr.open(method, fullURL, true);

    if (body) {
        xhr.setRequestHeader("Content-Type", "application/json");
        console.log(JSON.stringify(body));
        xhr.send(JSON.stringify(body));
    } else {
        xhr.send();
    }

    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                console.log("Request success!");
                console.log("Response: " + xhr.responseText);
                onSuccess(xhr.responseText);
            } else {
                console.log("Request failed!");
                console.log(xhr.responseText);
            }
        }
    };
}

module.exports = httpRequest;
