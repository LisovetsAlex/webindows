/**
 * Sends a request to the specified URL and invokes the provided callback function with the response data.
 *
 * @param {string} url - The URL to send the request to.
 * @param {function} callback - The callback function to invoke with the response data.
 * @param {RequestInit} fetchOptions - The options to pass to the fetch function.
 * @return {void} This function does not return a value.
 */
const sendRequest = function (url, callback, fetchOptions) {
    fetch(url, {
        method: fetchOptions.method,
        body: fetchOptions.body,
        ...fetchOptions,
    })
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
