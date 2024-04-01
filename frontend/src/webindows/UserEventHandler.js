import { sys } from "./System";

class UEH {
    mouseMove(event) {
        sys.moveWindow(event);
    }

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
}

const ueh = new UEH();

export { ueh };
