import { sys } from "./System";

function UEH() {
    this.drag = function (name) {
        sys.drag(name);
    };

    this.drop = function () {
        sys.drag(undefined);
    };

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
