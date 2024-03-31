export class App {
    constructor(name, html, icon, defaultScale) {
        this.name = name;
        this.isFullScreen = false;
        this.isMinimized = false;
        this.width = defaultScale.width;
        this.height = defaultScale.height;
        this.position = { x: 0, y: 0 };
        this.html = html;
        this.img = icon;
    }
}

export default class AppsController {
    constructor() {
        this.allApps = new Array();
        this.openedApps = new Array();
    }

    initAllApps() {
        let arrApps = new Array(0);
        let obj = {};

        obj = new App("Order Manager", `apps/OrderManager/ui.html`, "ImgTrans_OrderManager.png", { width: 350, height: 200 });
        arrApps.push(obj);

        obj = new App("Callback Sorter", `apps/CallbackSorter/ui.html`, "Img_Computer.PNG", { width: 350, height: 200 });
        arrApps.push(obj);

        obj = new App("POS Aufgabe", `apps/CustomerProductTester/ui.html`, "Img_Internet.PNG", { width: 350, height: 200 });
        arrApps.push(obj);

        obj = new App("WWW?", `apps/CustomerProductTester/ui.html`, "Img_HowBook.PNG", { width: 350, height: 200 });
        arrApps.push(obj);

        obj = new App("Visual Studio Code", `apps/VisualStudioCode/ui.html`, "Img_VSC.PNG", { width: 1200, height: 700 });
        arrApps.push(obj);

        obj = new App("Internet", `apps/Browser/ui.html`, "Img_Internet.PNG", { width: 1200, height: 700 });
        arrApps.push(obj);

        this.allApps = arrApps;
    }

    isAppOpened(name) {
        for (let i = 0; i < this.openedApps.length; i++) {
            if (this.openedApps[i].name == name) return true;
        }
        return false;
    }

    openApp(name) {
        const app = this.allApps.find((app) => app.name == name);
        this.openedApps.push(new App(app.name, app.html, app.img, { width: app.width, height: app.height }));
        return this.openedApps[this.openedApps.length - 1];
    }

    appClosed(name) {
        for (let i = 0; i < this.openedApps.length; i++) {
            if (this.openedApps[i].name == name) {
                this.openedApps.splice(i, 1);
            }
        }
    }

    appHidden(name) {
        for (let i = 0; i < this.openedApps.length; i++) {
            if (this.openedApps[i].name == name) {
                this.openedApps[i].isMinimized = true;
            }
        }
    }

    appShown(name) {
        for (let i = 0; i < this.openedApps.length; i++) {
            if (this.openedApps[i].name == name) {
                this.openedApps[i].isMinimized = false;
            }
        }
    }

    toggleExpand(name) {
        for (let i = 0; i < this.openedApps.length; i++) {
            if (this.openedApps[i].name == name) {
                this.openedApps[i].isFullScreen = !this.openedApps[i].isFullScreen;
            }
        }
    }

    getOpenedApp(name) {
        for (let i = 0; i < this.openedApps.length; i++) {
            if (this.openedApps[i].name == name) {
                return this.openedApps[i];
            }
        }
    }

    moved(name, x, y) {
        for (let i = 0; i < this.openedApps.length; i++) {
            if (this.openedApps[i].name == name) {
                this.openedApps[i].position.x = parseInt(x);
                this.openedApps[i].position.y = parseInt(y);
            }
        }
    }

    resized(name, width, height) {
        for (let i = 0; i < this.openedApps.length; i++) {
            if (this.openedApps[i].name == name) {
                this.openedApps[i].isFullScreen = false;
                this.openedApps[i].width = parseInt(width);
                this.openedApps[i].height = parseInt(height);
            }
        }
    }

    isAppHidden(name) {
        for (let i = 0; i < this.openedApps.length; i++) {
            if (this.openedApps[i].name == name) {
                return this.openedApps[i].isMinimized;
            }
        }
        return false;
    }

    isFullscreen(name) {
        for (let i = 0; i < this.openedApps.length; i++) {
            if (this.openedApps[i].name == name) {
                return this.openedApps[i].isFullScreen;
            }
        }
        return false;
    }

    deleteApp(name) {
        for (let i = 0; i < this.allApps.length; i++) {
            if (this.allApps[i].name == name) {
                this.allApps.splice(i, 1);
            }
        }
    }
}
