import ShortcutController from "./ShortcutController";
import WindowsController from "./WindowsController";
import LoginScreenController from "./LoginScreenController";
import TaskBarController from "./TaskBarController";

export default class RenderController {
    constructor(eventController, mouse, appsController) {
        this.isDesktopCreated = false;
        this.desktop = document.getElementById("id_desktop");
        this.appsController = appsController;
        this.shortcutController = new ShortcutController(eventController, mouse);
        this.windowsController = new WindowsController(eventController, mouse, appsController);
        this.loginScreenController = new LoginScreenController();
        this.taskbarController = new TaskBarController(eventController);
    }

    createDesktop() {
        if (this.isDesktopCreated) return;
        this.isDesktopCreated = true;
        this.taskbarController.createTaskBar();
        for (let i = 0; i < this.appsController.allApps.length; i++) {
            this.shortcutController.createShortcut(this.appsController.allApps[i]);
        }
    }

    createWindow(app) {
        this.windowsController.createWindow(app);
    }

    removeWindow(name) {
        this.windowsController.removeWindow(name);
    }

    showWindow(name) {
        this.windowsController.showWindow(name);
    }

    hideWindow(name) {
        this.windowsController.hideWindow(name);
    }

    createShortcut(app) {
        this.shortcutController.createShortcut(app);
    }

    createLoginScreen() {
        this.loginScreenController.createLoginScreen();
        if (!this.isDesktopCreated) return;
        this.removeAll();
    }

    removeLoginScreen() {
        this.loginScreenController.removeLoginScreen();
    }

    removeAll() {
        this.isDesktopCreated = false;
        this.desktop.innerHTML = "";
        this.windowsController.onRemoved();
        this.shortcutController.onRemoved();
        this.taskbarController.onRemoved();
        this.loginScreenController.onRemoved();
        this.desktop.style.backgroundImage = "";
    }

    changeBackground(imgUrl) {
        this.desktop.style.backgroundImage = `url("http://localhost:3000/files/get/file/${imgUrl}")`;
    }
}
