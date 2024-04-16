import { sys } from "./System";

class UEH {
    openApp(name) {
        sys.openApp(name);
    }

    closeApp(name) {
        sys.closeApp(name);
    }

    toggleHideApp(name) {
        sys.toggleHideApp(name);
    }

    turnOff() {
        sys.turnOff();
    }

    loginUser(username, password) {
        sys.loginUser(username, password);
    }

    logoutUser() {
        sys.logoutUser();
    }

    changeBackground(path) {
        sys.changeBackground(path);
    }
}

const ueh = new UEH();

export { ueh };
