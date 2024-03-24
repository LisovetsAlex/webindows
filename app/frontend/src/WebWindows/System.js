import RenderController from "./RenderController";
import AppsController from "./AppsController";
import MouseController from "./MouseController";
import { StartHandler as StartController } from "./StartController";
import EventController from "./EventController";

export class System {
    constructor() {
        this.eventController = new EventController();
        this.mouse = new MouseController(this.eventController);
        this.renderController = new RenderController(this.eventController, this.mouse);
        this.appsController = new AppsController();
        this.starterController = new StartController();

        this.selectedWindow = undefined;
    }

    init() {
        this.starterController.initStartButtons();
        this.renderController.webindowsLoadingScreen(100);
        this.appsController.initAllApps();
        this.initWindowEvents();

        this.initClock();
        for (let i = 0; i < this.appsController.allApps.length; i++) {
            this.renderController.createShortcut(this.appsController.allApps[i]);
        }

        this.tick();
    }

    tick() {
        setInterval(() => {}, 60 / 1000);
    }

    initClock() {
        setInterval(() => {
            this.tickTime();
        }, 1000);
    }

    initWindowEvents() {
        this.eventController.addEvent({
            name: "System_mousemove",
            event: "mousemove",
            callback: (e) => {
                this.moveWindow(e);
            },
        });
    }

    tickTime() {
        let date = new Date();
        let clock = document.getElementById("id_clockTaskBar");
        clock.innerHTML = String(date.getHours()) + ":" + String(date.getMinutes());
    }

    setSelectedWindow(id) {
        this.selectedWindow = document.getElementById(id);
    }

    moveWindow() {
        if (!this.mouse.isDragging) return;

        this.renderController.moveWindow(this.mouse.x, this.mouse.y, this.selectedWindow);
    }

    openApp(app) {
        if (this.appsController.isAppOpened(app.name)) return;

        this.renderController.createWindow(app);
        this.appsController.appOpened(app);
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
        // let audio = new Audio("");
        // audio.play();

        this.renderController.showTurnOffScreen();

        setTimeout(() => {
            this.renderController.black();
        }, 6000);
    }
}

const sys = new System();
export { sys };
