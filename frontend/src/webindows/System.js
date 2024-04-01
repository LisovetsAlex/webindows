import RenderController from "./RenderController";
import AppsController from "./AppsController";
import MouseController from "./MouseController";
import { StartHandler as StartController } from "./StartController";
import EventController from "./EventController";

export class System {
    constructor() {
        this.eventController = new EventController();
        this.appsController = new AppsController();
        this.mouse = new MouseController(this.eventController);
        this.renderController = new RenderController(this.eventController, this.mouse, this.appsController);
        this.starterController = new StartController();
    }

    init() {
        this.starterController.initStartButtons();
        this.renderController.webindowsLoadingScreen(2000);
        this.renderController.createLoginScreen();
        this.appsController.initAllApps();

        this.initClock();

        for (let i = 0; i < this.appsController.allApps.length; i++) {
            this.renderController.createShortcut(this.appsController.allApps[i]);
        }

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
}

const sys = new System();
export { sys };
