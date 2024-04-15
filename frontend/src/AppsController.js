import { ICONS_PATH } from "./constants";

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
    constructor(requester) {
        this.allApps = new Array();
        this.openedApps = new Array();
        this.requester = requester;
    }

    initDefaultApps(apps) {
        for (let app of apps) {
            this.requester.httpRequest("POST", "http://localhost:3000/apps/create", {
                data: {
                    name: app.name,
                    start_url: app.html,
                    settings: {
                        description: app.name,
                        icon: app.img,
                        defaultScale: {
                            width: app.width,
                            height: app.height,
                        },
                    },
                },
            });
        }
    }

    async initAllApps() {
        let arrApps = new Array(0);
        let obj = {};

        obj = new App("Apploader", `Apps/AppUploader/ui.html`, `mmsys.cpl_14_4366.ico`, {
            width: 350,
            height: 200,
        });
        arrApps.push(obj);

        obj = new App("Order Manager", `Apps/OrderManager/ui.html`, `mmsys.cpl_14_4366.ico`, {
            width: 350,
            height: 200,
        });
        arrApps.push(obj);

        obj = new App("Callback Sorter", `Apps/CallbackSorter/ui.html`, `mmsys.cpl_14_4366.ico`, {
            width: 350,
            height: 200,
        });
        arrApps.push(obj);

        obj = new App("POS Aufgabe", `Apps/CustomerProductTester/ui.html`, `mmsys.cpl_14_4366.ico`, {
            width: 350,
            height: 200,
        });
        arrApps.push(obj);

        obj = new App("Visual Studio Code", `Apps/InternetExplorer/ui.html`, `pifmgr.dll_14_3.ico`, {
            width: 1200,
            height: 700,
        });
        arrApps.push(obj);

        obj = new App(
            "Internet Explorer",
            `Apps/InternetExplorer/compiled/index.html`,
            `mshtml.dll_14_2660.ico`,
            {
                width: 1200,
                height: 700,
            }
        );
        arrApps.push(obj);

        obj = new App("File Explorer", `Apps/FileExplorer/compiled/index.html`, `cmprops.dll_14_2.ico`, {
            width: 1200,
            height: 700,
        });
        arrApps.push(obj);

        obj = new App("Background Changer", `apps/BackgroundChanger/ui.html`, `progman.exe_14_123.ico`, {
            width: 350,
            height: 200,
        });
        arrApps.push(obj);

        obj = new App("Some App", `apps/SomeApp/compiled/index.html`, `progman.exe_14_123.ico`, {
            width: 1200,
            height: 700,
        });
        arrApps.push(obj);

        obj = new App("MS Paint", `apps/MSPaint/compiled/index.html`, `progman.exe_14_110.ico`, {
            width: 1200,
            height: 700,
        });
        arrApps.push(obj);

        //this.initDefaultApps(arrApps);

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
