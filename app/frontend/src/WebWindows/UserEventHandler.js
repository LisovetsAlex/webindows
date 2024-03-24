import { sys } from "./System";

function UEH() {
    this.mouseMove = function (event) {
        sys.moveWindow(event);
    };

    this.openApp = function (app) {
        sys.openApp(app);
    };

    this.closeApp = function (name) {
        sys.closeApp(name);
    };

    this.toggleHideApp = function (name) {
        sys.toggleHideApp(name);
    };

    this.turnOff = function () {
        sys.turnOff();
    };
}

const ueh = new UEH();

export { ueh };
