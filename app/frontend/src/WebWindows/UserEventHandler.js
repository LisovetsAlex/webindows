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

    this.getMouseYVelocity = function () {
        return sys.mouseYVel;
    };
    this.getMouseXVelocity = function () {
        return sys.mouseXVel;
    };

    this.isHoldingLMB = function () {
        return sys.holdingLMB;
    };

    this.resizeWindowX = function () {
        return sys.holdingLMB;
    };

    this.getMousePosition = function () {
        return { x: sys.mouseX, y: sys.mouseY };
    };

    /**
     * Add an event to the system.
     *
     * Obj:
     *   name: string
     *   event: string
     *   callback: function
     *
     * @param {type} obj - The object representing the event to be added.
     * @return {type}
     */
    this.addEvent = function (obj) {
        sys.addEvent(obj);
    };

    this.removeEvent = function (name) {
        sys.removeEvent(name);
    };
}

const ueh = new UEH();

export { ueh };
