const WBND_REQ = "http://localhost:3000";
const ROOT_PATH = WBND_REQ + "/files/get/folder";
const PUBLIC_PATH = WBND_REQ + "/files/get/public" + "/webindows/public/";
const ASSETS_PATH = WBND_REQ + "/files/get/public" + "/webindows/public/Assets/";
const ICONS_PATH = WBND_REQ + "/files/get/public" + "/webindows/public/Assets/Icons/";

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

export { PUBLIC_PATH, ASSETS_PATH, ICONS_PATH, requestFolder };
