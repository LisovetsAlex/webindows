import Draw from "./Draw";
import Apper from "./Apper";
import { Requester } from "./Requester";
import { StartHandler } from "./StartHandler";
import EventHandler from "./EventHandler";

function System() {
    this.requester = new Requester();
    this.draw = new Draw();
    this.apper = new Apper();
    this.starter = new StartHandler();
    this.eventHandler = new EventHandler();

    this.selectedWindow = undefined;
    this.mouseX = 0;
    this.mouseY = 0;
    this.isDragging = false;
    this.mouseYVel = 0;
    this.mouseXVel = 0;
    this.lastTick = 0;
    this.holdingLMB = false;
    this.events = new Array();

    this.init = function () {
        this.starter.initStartButtons();
        this.draw.webindowsLoadingScreen(100);
        this.apper.initAllApps();
        this.initWindowEvents();

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

    this.initWindowEvents = function () {
        let html = document.getElementById("id_windows");

        html.addEventListener("mousedown", (e) => {
            callEvent("mousedown", e);
            this.holdingLMB = true;
        });
        html.addEventListener("mousemove", (e) => {
            if (e.clientX <= window.innerWidth && e.clientX >= 20)
                this.mouseX = e.clientX;
            if (e.clientY <= window.innerHeight - 100 && e.clientY >= 10)
                this.mouseY = e.clientY;

            this.callEvent("mousemove", e);

            this.moveWindow(e);
            this.calculateMouseVelocity(e);
        });
        window.addEventListener("mouseup", (e) => {
            this.holdingLMB = false;
            this.drag(undefined);
        });
        window.addEventListener("mouseout", (event) => {
            if (event.relatedTarget != null) return;
            this.drag(undefined);
        });
    };

    this.tickTime = function () {
        let date = new Date();
        let clock = document.getElementById("id_clockTaskBar");
        clock.innerHTML =
            String(date.getHours()) + ":" + String(date.getMinutes());
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

    this.calculateMouseVelocity = function (event) {
        if (!this.lastX) this.lastX = null;
        if (!this.lastY) this.lastY = null;

        let velocityX = 0;
        let velocityY = 0;

        const currentX = event.clientX;
        const currentY = event.clientY;

        if (this.lastX !== null && this.lastY !== null) {
            const deltaX = currentX - this.lastX;
            const deltaY = currentY - this.lastY;

            const timeDiff = performance.now() - this.lastTick;

            velocityX = (deltaX / timeDiff).toFixed(2);
            velocityY = (deltaY / timeDiff).toFixed(2);
        }

        this.lastX = currentX;
        this.lastY = currentY;
        this.lastTick = performance.now();

        velocityX = Math.max(-1, Math.min(1, velocityX));
        velocityY = Math.max(-1, Math.min(1, velocityY));

        this.mouseYVel = Number(velocityY);
        this.mouseXVel = Number(velocityX);
    };

    this.addEvent = function (obj) {
        this.events.push(obj);
        document.addEventListener(obj.event, obj.callback);
    };

    this.removeEvent = function (name) {
        for (let i = 0; i < this.events.length; i++) {
            if (this.events[i].name == name) {
                this.events.splice(i, 1);
                return;
            }
        }
    };

    this.callEvent = function (e, name) {
        for (let i = 0; i < this.events.length; i++) {
            if (this.events[i].name == name) {
                this.events[i].callback(e);
            }
        }
    };
}

const sys = new System();
export { sys };
