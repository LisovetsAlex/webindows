export default class LocalStorageController {
    constructor() {}

    saveUserData(userData) {
        localStorage["loggedInUser"] = JSON.stringify(userData);
    }

    getUserData() {
        if (!localStorage["loggedInUser"]) return null;
        return JSON.parse(localStorage["loggedInUser"]);
    }
}
