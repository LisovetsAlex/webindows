function Requester() {
    /**
     * Sends a request to the specified URL using the specified method.
     *
     * @param {string} url - The URL to send the request to.
     * @param {string} [method="GET"] - The HTTP method to use for the request. Default is "GET".
     * @param {function} callback - The callback function to be executed when the request is complete.
     * @return {void}
     */
    this.sendRequest = function (url, callback) {
        fetch(url)
            .then(function (response) {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.text();
            })
            .then(function (data) {
                callback(data);
            })
            .catch(function (error) {
                console.error("Fetch error: " + error);
            });
    };
}

export { Requester };
