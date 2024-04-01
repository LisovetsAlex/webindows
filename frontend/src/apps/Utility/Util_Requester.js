/**
 * Method to make an http request to the specified url
 * @param {String} method the method to use (POST, GET, PUT, DELETE)
 * @param {String} url the url to send the request to (eg. /users)
 * @param {String} body the body of the request
 * @param {String} enctype the enctype of the request (eg. application/json, multipart/form-data)
 * @param {Function} onSuccess the function to call when the request is successful
 */
async function httpRequest(method, url, body, enctype) {
    try {
        const headers = {
            "Content-Type": enctype || "application/json", // Default to application/json if enctype is not provided
        };

        const options = {
            method: method,
            headers: headers,
            body: enctype === "multipart/form-data" ? body : JSON.stringify(body),
        };

        const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.error("Error:", error);
    }
}
