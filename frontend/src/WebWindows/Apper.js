function App(name, html, icon) {
    this.name = name;
    this.isFullScreen = false;
    this.isMinimized = false;
    this.html = html;
    this.img = icon;
}

export default function Apper() {
    this.allApps = new Array();
    this.openedApps = new Array();

    this.initAllApps = function () {
        let arrApps = new Array(0);
        let obj = {};

        obj = new App(
            "Order Manager",
            `Apps/App_OrderManagerHTML.html`,
            "ImgTrans_OrderManager.png"
        );
        arrApps.push(obj);

        obj = new App(
            "Callback Sorter",
            `Apps/App_CallbackSorterHTML.html`,
            "Img_Program.PNG"
        );
        arrApps.push(obj);

        obj = new App(
            "POS Aufgabe",
            `Apps/CustomerProductTester/App_CPTesterHTML.html`,
            "Img_Program.PNG"
        );
        arrApps.push(obj);

        this.allApps = arrApps;
    };

    this.isAppOpened = function (name) {
        for (let i = 0; i < this.openedApps.length; i++) {
            if (this.openedApps[i].name == name) return true;
        }
        return false;
    };

    this.appOpened = function (app) {
        this.openedApps.push(app);
    };

    this.appClosed = function (name) {
        for (let i = 0; i < this.openedApps.length; i++) {
            if (this.openedApps[i].name == name) {
                this.openedApps.splice(i, 1);
            }
        }
    };

    this.appHidden = function (name) {
        for (let i = 0; i < this.openedApps.length; i++) {
            if (this.openedApps[i].name == name) {
                this.openedApps[i].isMinimized = true;
            }
        }
    };

    this.appShown = function (name) {
        for (let i = 0; i < this.openedApps.length; i++) {
            if (this.openedApps[i].name == name) {
                this.openedApps[i].isMinimized = false;
            }
        }
    };

    this.isAppHidden = function (name) {
        for (let i = 0; i < this.openedApps.length; i++) {
            if (this.openedApps[i].name == name) {
                return this.openedApps[i].isMinimized;
            }
        }
        return false;
    };
}
