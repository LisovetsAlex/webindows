export default class UserController {
    constructor(requester) {
        this.requester = requester;
        this.loggedUser = null;
    }

    async loginUser(username, password) {
        const result = await this.requester.httpRequest("POST", "http://localhost:3000/user/login", { username, password });
        this.loggedUser = result;
        return this.loggedUser;
    }
}
