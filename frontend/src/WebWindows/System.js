import Draw from "./Draw";
import Apper from "./Apper";
import { Requester } from "./Requester";
import { ueh } from "./UserEventHandler";
import { StartHandler } from "./StartHandler";

function System() {
    this.requester = new Requester();
    this.draw = new Draw();
    this.apper = new Apper();
    this.starter = new StartHandler();

    this.selectedWindow = undefined;
    this.mouseX = 0;
    this.mouseY = 0;
    this.isDragging = false;

    this.init = function () {

        this.starter.initStartButtons();
        this.draw.webindowsLoadingScreen(100);
        this.apper.initAllApps();
        ueh.initWindowEvents(this.starter.buttonGroup);

        this.initClock();
        for (let i = 0; i < this.apper.allApps.length; i++) {
            this.draw.createShortcut(this.apper.allApps[i]);
        }
    };

    this.initClock = function () {
        setInterval(() => {
            this.tickTime();
        }, 1000);
    };

    this.tickTime = function () {
        let date = new Date();
        let clock = document.getElementById("id_clockTaskBar");
        clock.innerHTML = String(date.getHours()) + ":" + String(date.getMinutes());
    };

    this.setSelectedWindow = function (id) {
        this.selectedWindow = document.getElementById(id);
    };

    this.drag = function (id) {
        if (id == undefined) {
            this.isDragging = false;
            this.setSelectedWindow(undefined);
            return;
        }

        this.setSelectedWindow(id);
        this.isDragging = true;

        if (sys.selectedWindow == undefined) return;
        this.draw.adjustZIndex(this.selectedWindow);

        /*
        for (let i = 0; i < this.openApps.length; i++) {
            if (this.openApps[i].name == id && this.openApps[i].isFullScreen)
                this.ExpandWindow(id);
        }*/
    };

    this.drop = function () {
        this.selectedWindow = undefined;
        this.isDragging = false;
    };

    this.moveWindow = function (event) {
        if (!this.isDragging) return;

        if (event.clientX <= window.innerWidth && event.clientX >= 20) this.mouseX = event.clientX;
        if (event.clientY <= window.innerHeight - 100 && event.clientY >= 10) this.mouseY = event.clientY;

        this.draw.moveWindow(this.mouseX, this.mouseY, this.selectedWindow);

        /*
        if (!isDragging) {
            const iframes = document.getElementsByTagName("iframe");
            for (let i = 0; i < iframes.length; i++) {
                iframes[i].style.scale = 1;
            }
            return;
        }
    
        const iframes = document.getElementsByTagName("iframe");
        for (let i = 0; i < iframes.length; i++) {
            iframes[i].style.scale = 0;
        }
        */
    };

    this.openApp = function (app) {
        if (this.apper.isAppOpened(app.name)) return;

        this.draw.createWindow(app);
        this.apper.appOpened(app);
    };

    this.closeApp = function (name) {
        if (!this.apper.isAppOpened(name)) return;

        this.draw.removeWindow(name);
        this.apper.appClosed(name);
    };

    this.toggleHideApp = function (name) {
        if (this.apper.isAppHidden(name)) {
            this.draw.showWindow(name);
            this.apper.appShown(name);
            return;
        }

        this.draw.hideWindow(name);
        this.apper.appHidden(name);
    };

    this.turnOff = function () {
        // let audio = new Audio("");
        // audio.play();

        this.draw.showTurnOffScreen();

        setTimeout(() => {
            this.draw.black();
        }, 6000);
    };
}

const sys = new System();
export { sys };
