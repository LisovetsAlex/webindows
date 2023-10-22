/**
 * Sends a request to the specified URL and invokes the callback function with the response data.
 *
 * @param {string} url - The URL to send the request to.
 * @param {function} callback - The callback function to invoke with the response data.
 * @throws {Error} If the network response is not ok.
 * @return {void}
 */
const sendRequest = function (url, callback) {
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
