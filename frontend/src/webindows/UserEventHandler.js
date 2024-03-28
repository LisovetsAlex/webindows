import { sys } from "./System";

class UEH {
    mouseMove(event) {
        sys.moveWindow(event);
    }

    openApp(app) {
        sys.openApp(app);
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
}

const ueh = new UEH();

export { ueh };
