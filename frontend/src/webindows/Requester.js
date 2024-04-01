export default class Requester {
    /**
     * Method to make an http request to the specified url
     * @param {String} method the method to use (POST, GET, PUT, DELETE)
     * @param {String} url the url to send the request to (eg. /users)
     * @param {String} body the body of the request
     * @param {Function} onSuccess the function to call when the request is successful
     */
    async httpRequest(method, url, body) {
        try {
            const response = await fetch(url, {
                method: method,
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const responseData = await response.json();
            return responseData;
        } catch (error) {
            console.error("Error:", error);
        }
    }
}
