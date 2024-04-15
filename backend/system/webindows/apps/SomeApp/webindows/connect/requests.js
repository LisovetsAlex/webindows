import { ROOT_PATH, FILES_REQ } from "@webindows/connect/constants";

/**
 * Get data about the folder at the specified address.
 *
 * @param {String} address - The address of the folder to request.
 * @return {Promise} A Promise that resolves to the JSON response from the server.
 */
async function requestFolder(address) {
    const user = localStorage.getItem("loggedInUser");
    const result = await fetch(ROOT_PATH, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            user: user,
            path: address,
        }),
    });

    return result.json();
}

/**
 * Get data about all files at the specified address.
 *
 * @param {String} address - The address of the folder to request.
 * @return {Promise} A Promise that resolves to the JSON response from the server.
 */
async function requestFiles(address) {
    const result = await fetch(FILES_REQ + address, {
        method: "GET",
    });

    return result.json();
}

export { requestFolder, requestFiles };
