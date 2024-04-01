export default class UserController {
    constructor(requester) {
        this.requester = requester;
    }

    loginUser(username, password) {
        const user = this.requester.httpRequest("POST", "/users/login", { username, password });
    }
}
