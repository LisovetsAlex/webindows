import { ueh } from "./UserEventHandler";

export default class RenderController {
    constructor(eventController, mouse) {
        this.mouse = mouse;
        this.eventController = eventController;
        this.desktop = document.getElementById("id_desktop");
    }

    createShortcut(app) {
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
    }

    removeWindow(name) {
        const window = document.getElementById(name);
        window.remove();

        const mini = document.getElementById(`${name}mini`);
        mini.remove();
    }

    webindowsLoadingScreen(duration) {
        let screen = document.getElementById("turnOff");
        screen.style.backgroundImage = "url('Assets/Img_LoadingWindows.PNG')";
        screen.style.display = "block";
        setTimeout(function () {
            screen.style.display = "none";
        }, duration);
    }

    createWindow(app) {
        const windowElem = document.createElement("div");
        const frame = document.createElement("iframe");
        const resizeHandleLeft = document.createElement("div");
        const resizeHandleRight = document.createElement("div");
        const resizeHandleTop = document.createElement("div");
        const resizeHandleBottom = document.createElement("div");
        const resizeHandleDRB = document.createElement("div");
        const resizeHandleDLB = document.createElement("div");

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
        frame.onload = () => {
            this.eventController.addFrame(frame);
            const iframe = frame.contentDocument || frame.contentWindow.document;
            iframe.addEventListener("mousemove", (e) => {
                sendMousemoveToParent(e, frame);
            });
        };

        windowElem.append(this.createWindowHeader(app));
        windowElem.append(frame);
        windowElem.append(resizeHandleLeft);
        windowElem.append(resizeHandleRight);
        windowElem.append(resizeHandleTop);
        windowElem.append(resizeHandleBottom);
        windowElem.append(resizeHandleDRB);
        windowElem.append(resizeHandleDLB);

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
        resizeHandleDRB.classList.add("resize-handle-diag");
        resizeHandleDRB.classList.add("right-bottom");
        resizeHandleDLB.classList.add("resize-handle-diag");
        resizeHandleDLB.classList.add("left-bottom");

        resizeHandleBottom.addEventListener("mousedown", () => {
            const savedY = this.mouse.y;
            const savedHeightWindow = windowElem.style.height;
            const savedHeightFrame = frame.style.height;
            this.eventController.addFrameEvent({
                name: `${app.name}_resize`,
                event: "mousemove",
                callback: () => {
                    windowElem.style.height = Math.max(this.mouse.y - savedY + parseInt(savedHeightWindow), 50) + "px";
                    frame.style.height = Math.max(this.mouse.y - savedY + parseInt(savedHeightFrame), 20) + "px";
                },
            });
        });

        resizeHandleTop.addEventListener("mousedown", () => {
            const savedY = this.mouse.y;
            const savedHeightWindow = windowElem.style.height;
            const savedHeightFrame = frame.style.height;
            this.eventController.addFrameEvent({
                name: `${app.name}_resize`,
                event: "mousemove",
                callback: () => {
                    if (savedY - this.mouse.y + parseInt(savedHeightWindow) < 50) return;
                    windowElem.style.top = this.mouse.y + "px";
                    frame.style.top = this.mouse.y - 37 + "px";
                    windowElem.style.height = Math.max(savedY - this.mouse.y + parseInt(savedHeightWindow), 50) + "px";
                    frame.style.height = Math.max(savedY - this.mouse.y + parseInt(savedHeightFrame), 20) + "px";
                },
            });
        });

        resizeHandleRight.addEventListener("mousedown", () => {
            const savedX = this.mouse.x;
            const savedWidthWindow = windowElem.style.width;
            const savedWidthFrame = frame.style.width;
            this.eventController.addFrameEvent({
                name: `${app.name}_resize`,
                event: "mousemove",
                callback: () => {
                    windowElem.style.width = Math.max(this.mouse.x - savedX + parseInt(savedWidthWindow), 200) + "px";
                    frame.style.width = Math.max(this.mouse.x - savedX + parseInt(savedWidthFrame), 195) + "px";
                },
            });
        });

        resizeHandleLeft.addEventListener("mousedown", () => {
            const savedX = this.mouse.x;
            const savedWidthWindow = windowElem.style.width;
            const savedWidthFrame = frame.style.width;
            this.eventController.addFrameEvent({
                name: `${app.name}_resize`,
                event: "mousemove",
                callback: () => {
                    if (savedX - this.mouse.x + parseInt(savedWidthWindow) < 200) return;
                    windowElem.style.left = this.mouse.x + "px";
                    frame.style.left = this.mouse.x + "px";
                    windowElem.style.width = Math.max(savedX - this.mouse.x + parseInt(savedWidthWindow), 200) + "px";
                    frame.style.width = Math.max(savedX - this.mouse.x + parseInt(savedWidthFrame), 195) + "px";
                },
            });
        });

        resizeHandleDRB.addEventListener("mousedown", () => {
            this.eventController.addFrameEvent({
                name: `${app.name}_resize`,
                event: "mousemove",
                callback: () => {
                    const ySide = this.mouse.y - windowElem.offsetTop;
                    const hypo = calculateDistance({ x: windowElem.offsetLeft, y: windowElem.offsetTop }, { x: this.mouse.x, y: this.mouse.y });
                    const xSide = Math.sqrt(-1 * ySide * ySide + hypo * hypo);
                    windowElem.style.height = Math.max(ySide, 50) + "px";
                    frame.style.height = Math.max(ySide - 37, 20) + "px";
                    windowElem.style.width = Math.max(xSide, 200) + "px";
                    frame.style.width = Math.max(xSide - 5, 195) + "px";
                },
            });
        });

        resizeHandleDLB.addEventListener("mousedown", () => {
            const savedWidth = parseInt(windowElem.style.width);
            const savedLeft = windowElem.offsetLeft;
            this.eventController.addFrameEvent({
                name: `${app.name}_resize`,
                event: "mousemove",
                callback: () => {
                    const ySide = this.mouse.y - windowElem.offsetTop;
                    const hypo = calculateDistance({ x: savedLeft + savedWidth, y: windowElem.offsetTop }, { x: this.mouse.x, y: this.mouse.y });
                    const xSide = Math.sqrt(-1 * ySide * ySide + hypo * hypo);
                    windowElem.style.left = this.mouse.x + "px";
                    frame.style.left = this.mouse.x + "px";
                    windowElem.style.height = Math.max(ySide, 50) + "px";
                    frame.style.height = Math.max(ySide - 37, 20) + "px";
                    windowElem.style.width = Math.max(xSide, 200) + "px";
                    frame.style.width = Math.max(xSide - 5, 195) + "px";
                },
            });
        });

        this.eventController.addEvent({
            name: `${app.name}_resize_up`,
            event: "mouseup",
            callback: () => {
                this.eventController.removeFrameEvent(`${app.name}_resize`);
            },
        });

        this.desktop.prepend(windowElem);
    }

    createWindowHeader(app) {
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
    }

    createHiddenApp(app) {
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
    }

    hideWindow(name) {
        const window = document.getElementById(name);
        window.style.display = "none";
    }

    showWindow(name) {
        const window = document.getElementById(name);
        window.style.display = "block";
    }

    adjustZIndex(window) {
        const arr = document.getElementsByClassName("winCl-BasicWindow");
        for (let i = 0; i < arr.length; i++) {
            arr[i].style["z-index"] = 1;
        }
        if (!window.classList.contains("winCl-ShortcutBtn")) window.style["z-index"] = 2;
    }

    moveWindow(x, y, window) {
        if (window == undefined) return;

        window.style.position = "absolute";
        window.style.left = Number(x - Number(window.dataset.width) / 2) + "px";
        window.style.top = y - 10 + "px";
    }

    showTurnOffScreen() {
        let screen = document.getElementById("turnOff");

        screen.style.backgroundImage = "url('Assets/Img_ShutDown.PNG')";
        screen.style.display = "block";
    }

    black() {
        let screen = document.getElementById("turnOff");

        screen.style.backgroundImage = "";
        screen.style.backgroundColor = "black";
    }
}

function sendMousemoveToParent(event, iframe) {
    const iframeRect = iframe.getBoundingClientRect();
    const offsetX = iframeRect.left + event.clientX;
    const offsetY = iframeRect.top + event.clientY;

    window.parent.postMessage(
        {
            type: "mousemove",
            clientX: offsetX,
            clientY: offsetY,
        },
        "*"
    );
}

function calculateDistance(vector1, vector2) {
    const deltaX = vector2.x - vector1.x;
    const deltaY = vector2.y - vector1.y;
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
}
