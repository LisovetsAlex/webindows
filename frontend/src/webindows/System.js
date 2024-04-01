import RenderController from "./RenderController";
import AppsController from "./AppsController";
import MouseController from "./MouseController";
import { StartHandler as StartController } from "./StartController";
import EventController from "./EventController";
import UserController from "./UserController";
import Requester from "./Requester";
import LocalStorageController from "./LocalStorageController";

export class System {
    constructor() {
        this.eventController = new EventController();
        this.requester = new Requester();
        this.appsController = new AppsController(this.requester);
        this.mouse = new MouseController(this.eventController);
        this.localStorageController = new LocalStorageController();
        this.renderController = new RenderController(this.eventController, this.mouse, this.appsController);
        this.starterController = new StartController();
        this.userController = new UserController(this.requester);
    }

    async init() {
        this.starterController.initStartButtons();
        this.appsController.initAllApps();

        this.initClock();

        for (let i = 0; i < this.appsController.allApps.length; i++) {
            this.renderController.createShortcut(this.appsController.allApps[i]);
        }

        await this.tryLoggingIn();

        this.tick();
    }

    tick() {
        setInterval(() => {
            this.tryLoggingIn();
        }, 500);
    }

    initClock() {
        setInterval(() => {
            this.tickTime();
        }, 1000);
    }

    tickTime() {
        const clock = document.getElementById("id_clockTaskBar");
        if (!clock) return;
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, "0");
        const minutes = String(now.getMinutes()).padStart(2, "0");
        clock.innerHTML = hours + ":" + minutes;
    }

    openApp(name) {
        if (this.appsController.isAppOpened(name)) return;
        const openedApp = this.appsController.openApp(name);
        this.renderController.createWindow(openedApp);
    }

    closeApp(name) {
        if (!this.appsController.isAppOpened(name)) return;
        this.renderController.removeWindow(name);
        this.appsController.appClosed(name);
    }

    toggleHideApp(name) {
        if (this.appsController.isAppHidden(name)) {
            this.renderController.showWindow(name);
            this.appsController.appShown(name);
            return;
        }

        this.renderController.hideWindow(name);
        this.appsController.appHidden(name);
    }

    turnOff() {
        this.renderController.showTurnOffScreen();

        setTimeout(() => {
            this.renderController.black();
        }, 6000);
    }

    async loginUser(username, password) {
        const loggedInUser = await this.userController.loginUser(username, password);
        if (loggedInUser) {
            this.localStorageController.saveUserData(loggedInUser);
            this.renderController.removeLoginScreen();
        }
    }

    async tryLoggingIn() {
        const userData = this.localStorageController.getUserData();
        if (!userData) return this.renderController.createLoginScreen();
        this.loginUser(userData.name, userData.password);
        this.renderController.changeBackground(userData.personal_settings.bg_img_url);
    }

    logoutUser() {
        this.localStorageController.clearUserData();
    }
}

const sys = new System();
export { sys };
