import { ueh } from "./UserEventHandler";

export default function Draw() {
    this.desktop = document.getElementById("id_desktop");
    this.resizeTimer = undefined;

    this.createShortcut = function (app) {
        const shortCut = document.createElement("div");
        const btn = document.createElement("button");
        const img = document.createElement("img");

        shortCut.setAttribute("id", "id_shortcuts");

        btn.setAttribute("id", `${app.name}sc`);
        btn.classList.add("winCl-ShortcutBtn");
        btn.classList.add("winCl-Grabber");
        btn.dataset.width = "75";

        btn.addEventListener("dblclick", () => {
            ueh.openApp(app);
        });
        btn.addEventListener("mousedown", () => {
            ueh.drag(`${app.name}sc`);
        });

        img.setAttribute("src", `Assets/${app.img}`);
        img.setAttribute("loading", "lazy");
        img.classList.add("winCl-ShortcutImg");

        btn.append(img);
        btn.innerHTML += app.name;
        shortCut.append(btn);

        this.desktop.append(shortCut);
    };

    this.removeWindow = function (name) {
        const window = document.getElementById(name);
        window.remove();

        const mini = document.getElementById(`${name}mini`);
        mini.remove();
    };

    this.webindowsLoadingScreen = function (duration) {
        let screen = document.getElementById("turnOff");
        screen.style.backgroundImage = "url('Assets/Img_LoadingWindows.PNG')";
        screen.style.display = "block";
        setTimeout(function () {
            screen.style.display = "none";
        }, duration);
    };

    this.createWindow = function (app) {
        const windowElem = document.createElement("div");
        const frame = document.createElement("iframe");
        const resizeHandleLeft = document.createElement("div");
        const resizeHandleRight = document.createElement("div");
        const resizeHandleTop = document.createElement("div");
        const resizeHandleBottom = document.createElement("div");

        windowElem.setAttribute("id", `${app.name}`);
        windowElem.setAttribute("data-width", `350`);
        windowElem.classList.add("winCl-BasicWindow");
        windowElem.style.width = 363;
        windowElem.style.height = 235;

        frame.setAttribute("id", `${app.name}`);
        frame.setAttribute("src", `${app.html}`);
        frame.setAttribute("loading", `lazy`);
        frame.style.width = 358;
        frame.style.height = 198;

        windowElem.append(this.createWindowHeader(app));
        windowElem.append(frame);
        windowElem.append(resizeHandleLeft);
        windowElem.append(resizeHandleRight);
        windowElem.append(resizeHandleTop);
        windowElem.append(resizeHandleBottom);

        windowElem.style.position = "absolute";
        windowElem.style.left = window.innerWidth / 2 - 100 + "px";
        windowElem.style.top = window.innerHeight / 2 - 200 + "px";

        resizeHandleLeft.classList.add("resize-handle-hori");
        resizeHandleLeft.classList.add("left");
        resizeHandleRight.classList.add("resize-handle-hori");
        resizeHandleRight.classList.add("right");
        resizeHandleTop.classList.add("resize-handle-vert");
        resizeHandleTop.classList.add("top");
        resizeHandleBottom.classList.add("resize-handle-vert");
        resizeHandleBottom.classList.add("bottom");

        resizeHandleBottom.addEventListener("mousedown", (e) => {
            ueh.addEvent({
                name: "resizeBottom",
                event: "mousemove",
                callback: () => {
                    console.log(getDistanceBetweenElementAndMouse(windowElem));
                },
            });
        });
        document.addEventListener("mouseup", () => {
            if (this.resizeTimer === undefined) return;
            clearInterval(this.resizeTimer);
        });

        this.desktop.prepend(windowElem);
    };

    this.createWindowHeader = function (app) {
        const windowHeader = document.createElement("div");
        const closeBtn = document.createElement("button");
        const expandBtn = document.createElement("button");
        const hideBtn = document.createElement("button");

        windowHeader.classList.add("winCl-WindowHeader");
        windowHeader.classList.add("winCl-Grabber");
        windowHeader.addEventListener("mousedown", () => {
            ueh.drag(`${app.name}`);
        });
        windowHeader.addEventListener("mouseup", () => {
            ueh.drop();
        });

        closeBtn.classList.add("winCl-BtnHeader");
        closeBtn.classList.add("winCl-CloseIcon");
        closeBtn.addEventListener("mousedown", (e) => {
            ueh.closeApp(app.name);
        });

        expandBtn.classList.add("winCl-BtnHeader");
        expandBtn.classList.add("winCl-ExpandIcon");
        expandBtn.addEventListener("mousedown", () => {});

        hideBtn.classList.add("winCl-BtnHeader");
        hideBtn.classList.add("winCl-MinimizeIcon");
        hideBtn.addEventListener("mousedown", () => {
            ueh.toggleHideApp(app.name);
        });

        windowHeader.innerHTML += app.name;
        windowHeader.append(closeBtn);
        windowHeader.append(expandBtn);
        windowHeader.append(hideBtn);

        this.createHiddenApp(app);

        return windowHeader;
    };

    this.createHiddenApp = function (app) {
        const mini = document.createElement("button");
        const miniApps = document.getElementById("id_minnedApps");

        mini.setAttribute("id", `${app.name}mini`);
        mini.classList.add("winCl-MinimizedBtn");
        mini.addEventListener("click", () => {
            ueh.toggleHideApp(app.name);
        });

        mini.innerHTML = `
                    <img src="Assets/${app.img}" style="width: 32px; height: 28px; padding-top: 0px;">
                    <p style="margin: 0px; margin-top: 8px;" >
                        ${app.name}
                    </p>
                    `;
        miniApps.prepend(mini);
    };

    this.hideWindow = function (name) {
        const window = document.getElementById(name);
        window.style.display = "none";
    };

    this.showWindow = function (name) {
        const window = document.getElementById(name);
        window.style.display = "block";
    };

    this.adjustZIndex = function (window) {
        const arr = document.getElementsByClassName("winCl-BasicWindow");
        for (let i = 0; i < arr.length; i++) {
            arr[i].style["z-index"] = 1;
        }
        if (!window.classList.contains("winCl-ShortcutBtn"))
            window.style["z-index"] = 2;
    };

    this.moveWindow = function (x, y, window) {
        if (window == undefined) return;

        window.style.position = "absolute";
        window.style.left = Number(x - Number(window.dataset.width) / 2) + "px";
        window.style.top = y - 10 + "px";
    };

    this.showTurnOffScreen = function () {
        let screen = document.getElementById("turnOff");

        screen.style.backgroundImage = "url('Assets/Img_ShutDown.PNG')";
        screen.style.display = "block";
    };

    this.black = function () {
        let screen = document.getElementById("turnOff");

        screen.style.backgroundImage = "";
        screen.style.backgroundColor = "black";
    };
}

function getDistanceBetweenElementAndMouse(element) {
    const rect = element.getBoundingClientRect();
    const elementX = rect.left + rect.width / 2;
    const elementY = rect.top + rect.height / 2;
    const mouseX = ueh.getMousePosition().x;
    const mouseY = ueh.getMousePosition().y;

    const distance = Math.sqrt(
        Math.pow(elementX - mouseX, 2) + Math.pow(elementY - mouseY, 2)
    );
    return distance;
}
