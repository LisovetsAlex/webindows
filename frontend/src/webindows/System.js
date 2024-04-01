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
        this.appsController = new AppsController();
        this.mouse = new MouseController(this.eventController);
        this.renderController = new RenderController(this.eventController, this.mouse, this.appsController);
        this.starterController = new StartController();
        this.requester = new Requester();
        this.localStorageController = new LocalStorageController();
        this.userController = new UserController(this.requester);
    }

    init() {
        this.starterController.initStartButtons();
        this.renderController.createLoginScreen();
        this.appsController.initAllApps();

        this.initClock();

        for (let i = 0; i < this.appsController.allApps.length; i++) {
            this.renderController.createShortcut(this.appsController.allApps[i]);
        }

        this.loginUser();

        this.tick();
    }

    tick() {
        //setInterval(() => {}, 60 / 1000);
    }

    initClock() {
        setInterval(() => {
            this.tickTime();
        }, 1000);
    }

    tickTime() {
        const clock = document.getElementById("id_clockTaskBar");
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
        let loggedInUser = this.localStorageController.getUserData() ?? null;

        if (loggedInUser) return this.renderController.removeLoginScreen();
        if (!loggedInUser) {
            loggedInUser = await this.userController.loginUser(username, password);
            this.localStorageController.saveUserData(loggedInUser);
        }
    }
}

const sys = new System();
export { sys };
