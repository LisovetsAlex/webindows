(() => {
    "use strict";
    const t = new (function () {
        (this.initWindowEvents = function (t) {
            document
                .getElementById("id_windows")
                .addEventListener("mousemove", (t) => {
                    this.mouseMove(t);
                }),
                window.addEventListener("mouseup", (t) => {
                    r.drop();
                }),
                window.addEventListener("mouseout", function (t) {
                    null == t.relatedTarget && r.drop();
                }),
                this.bindStartButtons(t);
        }),
            (this.bindStartButtons = function (t) {
                let e = document.getElementById("buttonGroup");
                for (let n = 0; n < t.length; n++) {
                    let i = document.createElement("button");
                    (i.className = "winStartBtn"),
                        (i.onclick = () => {
                            t[n].func();
                        }),
                        (i.innerHTML = `\n            <div style="display: inline-block; margin-top: -14px;">\n                <img alt="alt" src="Assets/${t[n].img}" width="40" height="40">\n            </div>\n            <div style="padding-left:50px; margin-top:-26px;">\n                ${t[n].text}\n            </div>\n            `),
                        e.append(i);
                }
            }),
            (this.drag = function (t) {
                r.drag(t);
            }),
            (this.drop = function () {
                r.drag(void 0);
            }),
            (this.mouseMove = function (t) {
                r.moveWindow(t);
            }),
            (this.openApp = function (t) {
                r.openApp(t);
            }),
            (this.closeApp = function (t) {
                r.closeApp(t);
            }),
            (this.toggleHideApp = function (t) {
                r.toggleHideApp(t);
            }),
            (this.turnOff = function () {
                r.turnOff();
            });
    })();
    function e() {
        (this.desktop = document.getElementById("id_desktop")),
            (this.createShortcut = function (e) {
                const n = document.createElement("div"),
                    i = document.createElement("button"),
                    s = document.createElement("img");
                n.setAttribute("id", "id_shortcuts"),
                    i.setAttribute("id", `${e.name}sc`),
                    i.classList.add("winCl-ShortcutBtn"),
                    i.classList.add("winCl-Grabber"),
                    (i.dataset.width = "75"),
                    i.addEventListener("dblclick", () => {
                        t.openApp(e);
                    }),
                    i.addEventListener("mousedown", () => {
                        t.drag(`${e.name}sc`);
                    }),
                    s.setAttribute("src", `Assets/${e.img}`),
                    s.setAttribute("loading", "lazy"),
                    s.classList.add("winCl-ShortcutImg"),
                    i.append(s),
                    (i.innerHTML += e.name),
                    n.append(i),
                    this.desktop.append(n);
            }),
            (this.removeWindow = function (t) {
                document.getElementById(t).remove(),
                    document.getElementById(`${t}mini`).remove();
            }),
            (this.webindowsLoadingScreen = function (t) {
                let e = document.getElementById("turnOff");
                (e.style.backgroundImage =
                    "url('Assets/Img_LoadingWindows.PNG')"),
                    (e.style.display = "block"),
                    setTimeout(function () {
                        e.style.display = "none";
                    }, t);
            }),
            (this.createWindow = function (t) {
                const e = document.createElement("div"),
                    n = document.createElement("iframe");
                e.setAttribute("id", `${t.name}`),
                    e.setAttribute("data-width", "350"),
                    e.classList.add("winCl-BasicWindow"),
                    (e.style.width = 363),
                    (e.style.height = 235),
                    n.setAttribute("id", `${t.name}`),
                    n.setAttribute("src", `${t.html}`),
                    n.setAttribute("loading", "lazy"),
                    (n.style.width = 358),
                    (n.style.height = 198),
                    e.append(this.createWindowHeader(t)),
                    e.append(n),
                    (e.style.position = "absolute"),
                    (e.style.left = window.innerWidth / 2 - 100 + "px"),
                    (e.style.top = window.innerHeight / 2 - 200 + "px"),
                    this.desktop.prepend(e);
            }),
            (this.createWindowHeader = function (e) {
                const n = document.createElement("div"),
                    i = document.createElement("button"),
                    s = document.createElement("button"),
                    o = document.createElement("button");
                return (
                    n.classList.add("winCl-WindowHeader"),
                    n.classList.add("winCl-Grabber"),
                    n.addEventListener("mousedown", () => {
                        t.drag(`${e.name}`);
                    }),
                    n.addEventListener("mouseup", () => {
                        t.drop();
                    }),
                    i.classList.add("winCl-BtnHeader"),
                    i.classList.add("winCl-CloseIcon"),
                    i.addEventListener("mousedown", (n) => {
                        t.closeApp(e.name);
                    }),
                    s.classList.add("winCl-BtnHeader"),
                    s.classList.add("winCl-ExpandIcon"),
                    s.addEventListener("mousedown", () => {}),
                    o.classList.add("winCl-BtnHeader"),
                    o.classList.add("winCl-MinimizeIcon"),
                    o.addEventListener("mousedown", () => {
                        t.toggleHideApp(e.name);
                    }),
                    (n.innerHTML += e.name),
                    n.append(i),
                    n.append(s),
                    n.append(o),
                    this.createHiddenApp(e),
                    n
                );
            }),
            (this.createHiddenApp = function (e) {
                const n = document.createElement("button"),
                    i = document.getElementById("id_minnedApps");
                n.setAttribute("id", `${e.name}mini`),
                    n.classList.add("winCl-MinimizedBtn"),
                    n.addEventListener("click", () => {
                        t.toggleHideApp(e.name);
                    }),
                    (n.innerHTML = `\n                    <img src="Assets/${e.img}" style="width: 32px; height: 28px; padding-top: 0px;">\n                    <p style="margin: 0px; margin-top: 8px;" >\n                        ${e.name}\n                    </p>\n                    `),
                    i.prepend(n);
            }),
            (this.hideWindow = function (t) {
                document.getElementById(t).style.display = "none";
            }),
            (this.showWindow = function (t) {
                document.getElementById(t).style.display = "block";
            }),
            (this.adjustZIndex = function (t) {
                const e = document.getElementsByClassName("winCl-BasicWindow");
                for (let t = 0; t < e.length; t++) e[t].style["z-index"] = 1;
                t.classList.contains("winCl-ShortcutBtn") ||
                    (t.style["z-index"] = 2);
            }),
            (this.moveWindow = function (t, e, n) {
                (n.style.position = "absolute"),
                    (n.style.left =
                        Number(t - Number(n.dataset.width) / 2) + "px"),
                    (n.style.top = e - 10 + "px");
            }),
            (this.showTurnOffScreen = function () {
                let t = document.getElementById("turnOff");
                (t.style.backgroundImage = "url('Assets/Img_ShutDown.PNG')"),
                    (t.style.display = "block");
            }),
            (this.black = function () {
                let t = document.getElementById("turnOff");
                (t.style.backgroundImage = ""),
                    (t.style.backgroundColor = "black");
            });
    }
    function n(t, e, n) {
        (this.name = t),
            (this.isFullScreen = !1),
            (this.isMinimized = !1),
            (this.html = e),
            (this.img = n);
    }
    function i() {
        (this.allApps = new Array()),
            (this.openedApps = new Array()),
            (this.initAllApps = function () {
                let t = new Array(0),
                    e = {};
                (e = new n(
                    "Order Manager",
                    "Apps/App_OrderManagerHTML.html",
                    "ImgTrans_OrderManager.png"
                )),
                    t.push(e),
                    (e = new n(
                        "Callback Sorter",
                        "Apps/App_CallbackSorterHTML.html",
                        "Img_Program.PNG"
                    )),
                    t.push(e),
                    (e = new n(
                        "POS Aufgabe",
                        "Apps/CustomerProductTester/App_CPTesterHTML.html",
                        "Img_Program.PNG"
                    )),
                    t.push(e),
                    (this.allApps = t);
            }),
            (this.isAppOpened = function (t) {
                for (let e = 0; e < this.openedApps.length; e++)
                    if (this.openedApps[e].name == t) return !0;
                return !1;
            }),
            (this.appOpened = function (t) {
                this.openedApps.push(t);
            }),
            (this.appClosed = function (t) {
                for (let e = 0; e < this.openedApps.length; e++)
                    this.openedApps[e].name == t &&
                        this.openedApps.splice(e, 1);
            }),
            (this.appHidden = function (t) {
                for (let e = 0; e < this.openedApps.length; e++)
                    this.openedApps[e].name == t &&
                        (this.openedApps[e].isMinimized = !0);
            }),
            (this.appShown = function (t) {
                for (let e = 0; e < this.openedApps.length; e++)
                    this.openedApps[e].name == t &&
                        (this.openedApps[e].isMinimized = !1);
            }),
            (this.isAppHidden = function (t) {
                for (let e = 0; e < this.openedApps.length; e++)
                    if (this.openedApps[e].name == t)
                        return this.openedApps[e].isMinimized;
                return !1;
            });
    }
    function s() {
        this.sendRequest = function (t, e) {
            fetch(t)
                .then(function (t) {
                    if (!t.ok) throw new Error("Network response was not ok");
                    return t.text();
                })
                .then(function (t) {
                    e(t);
                })
                .catch(function (t) {
                    console.error("Fetch error: " + t);
                });
        };
    }
    function o(t, e, n) {
        (this.text = t), (this.func = n), (this.img = e);
    }
    function d() {
        (this.buttonGroup = new Array(0)),
            (this.initStartButtons = function () {
                const e = void 0;
                this.buttonGroup.push(
                    new o("Windows Update", "Img_Program.PNG", e)
                ),
                    this.buttonGroup.push(
                        new o("Programme", "Img_Program.PNG", e)
                    ),
                    this.buttonGroup.push(
                        new o("Dokumente", "Img_Order3.PNG", e)
                    ),
                    this.buttonGroup.push(
                        new o("Einstellungen", "Img_Settings.PNG", e)
                    ),
                    this.buttonGroup.push(new o("Suchen", "Img_Search.PNG", e)),
                    this.buttonGroup.push(new o("Hilfe", "Img_HowBook.PNG", e)),
                    this.buttonGroup.push(
                        new o("Ausführen...", "Img_Program.PNG", e)
                    ),
                    this.buttonGroup.push(
                        new o("Beenden...", "Img_Stop.PNG", t.turnOff)
                    ),
                    this.bindButtonStart();
            }),
            (this.bindButtonStart = function () {
                document.addEventListener(
                    "click",
                    (t) => {
                        let e = document.getElementById("windowStart");
                        ("block" === e.style.display &&
                            !document
                                .getElementById("windowStart")
                                .contains(t.target)) ||
                        (!document
                            .getElementById("windowStart")
                            .contains(t.target) &&
                            !document
                                .getElementById("buttonStart")
                                .contains(t.target))
                            ? (e.style.display = "none")
                            : (e.style.display = "block");
                    },
                    !1
                );
            });
    }
    const r = new (function () {
        (this.requester = new s()),
            (this.draw = new e()),
            (this.apper = new i()),
            (this.starter = new d()),
            (this.selectedWindow = void 0),
            (this.mouseX = 0),
            (this.mouseY = 0),
            (this.isDragging = !1),
            (this.init = function () {
                this.starter.initStartButtons(),
                    this.draw.webindowsLoadingScreen(100),
                    this.apper.initAllApps(),
                    t.initWindowEvents(this.starter.buttonGroup),
                    this.initClock();
                for (let t = 0; t < this.apper.allApps.length; t++)
                    this.draw.createShortcut(this.apper.allApps[t]);
                this.requester.sendRequest(
                    "http://localhost:8080/demo-1.0-SNAPSHOT/api/products",
                    (t) => {
                        console.log(t);
                    }
                );
            }),
            (this.initClock = function () {
                setInterval(() => {
                    this.tickTime();
                }, 1e3);
            }),
            (this.tickTime = function () {
                let t = new Date();
                document.getElementById("id_clockTaskBar").innerHTML =
                    String(t.getHours()) + ":" + String(t.getMinutes());
            }),
            (this.setSelectedWindow = function (t) {
                this.selectedWindow = document.getElementById(t);
            }),
            (this.drag = function (t) {
                if (null == t)
                    return (
                        (this.isDragging = !1),
                        void this.setSelectedWindow(void 0)
                    );
                this.setSelectedWindow(t),
                    (this.isDragging = !0),
                    null != r.selectedWindow &&
                        this.draw.adjustZIndex(this.selectedWindow);
            }),
            (this.drop = function () {
                (this.selectedWindow = void 0), (this.isDragging = !1);
            }),
            (this.moveWindow = function (t) {
                this.isDragging &&
                    (t.clientX <= window.innerWidth &&
                        t.clientX >= 20 &&
                        (this.mouseX = t.clientX),
                    t.clientY <= window.innerHeight - 100 &&
                        t.clientY >= 10 &&
                        (this.mouseY = t.clientY),
                    this.draw.moveWindow(
                        this.mouseX,
                        this.mouseY,
                        this.selectedWindow
                    ));
            }),
            (this.openApp = function (t) {
                this.apper.isAppOpened(t.name) ||
                    (this.draw.createWindow(t), this.apper.appOpened(t));
            }),
            (this.closeApp = function (t) {
                this.apper.isAppOpened(t) &&
                    (this.draw.removeWindow(t), this.apper.appClosed(t));
            }),
            (this.toggleHideApp = function (t) {
                if (this.apper.isAppHidden(t))
                    return this.draw.showWindow(t), void this.apper.appShown(t);
                this.draw.hideWindow(t), this.apper.appHidden(t);
            }),
            (this.turnOff = function () {
                this.draw.showTurnOffScreen(),
                    setTimeout(() => {
                        this.draw.black();
                    }, 6e3);
            });
    })();
    r.init();
})();
