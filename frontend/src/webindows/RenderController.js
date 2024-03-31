import { ueh } from "./UserEventHandler";

export default class RenderController {
    constructor(eventController, mouse, appsController) {
        this.desktopGrid = [];
        this.mouse = mouse;
        this.appsController = appsController;
        this.eventController = eventController;
        this.desktop = document.getElementById("id_desktop");
    }

    createShortcut(app) {
        const shortCut = document.createElement("div");
        const btn = document.createElement("button");
        const img = document.createElement("img");

        shortCut.setAttribute("id", "id_shortcuts");
        shortCut.style.position = "absolute";
        const position = this.getNextOnGrid();
        const shortCutIndx = position.indx;
        shortCut.style.top = `${position.y}px`;
        shortCut.style.left = `${position.x}px`;

        btn.setAttribute("id", `${app.name}sc`);
        btn.classList.add("winCl-ShortcutBtn");
        btn.classList.add("winCl-Grabber");
        btn.dataset.width = "75";

        btn.addEventListener("dblclick", () => {
            ueh.openApp(app.name);
        });

        btn.addEventListener("mousedown", () => {
            const savedX = this.mouse.x;
            const savedOffset = shortCut.offsetLeft;
            this.eventController.addEvent({
                name: `${app.name}sc_drag`,
                event: "mousemove",
                callback: () => {
                    this.moveShortcut(savedX, savedOffset, shortCut, shortCutIndx);
                },
            });
        });
        this.eventController.addEvent({
            name: `${app.name}sc_drag_up`,
            event: "mouseup",
            callback: () => {
                this.eventController.removeEvent(`${app.name}sc_drag`);
            },
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
        windowElem.classList.add("winCl-BasicWindow");
        windowElem.style.width = app.width;
        windowElem.style.height = app.height;

        frame.setAttribute("id", `${app.name}`);
        frame.setAttribute("src", `${app.html}`);
        frame.setAttribute("loading", `lazy`);
        frame.style.width = parseInt(windowElem.style.width) - 1;
        frame.style.height = parseInt(windowElem.style.height) - 30;
        frame.classList.add("winCl-Frame");
        frame.onload = () => {
            const iframe = frame.contentDocument || frame.contentWindow.document;

            this.eventController.addFrame(frame);

            iframe.addEventListener("mousemove", (e) => {
                sendMousemoveToParent(e, frame);
            });
            iframe.addEventListener("mousedown", () => {
                this.adjustZIndex(windowElem);
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
        windowElem.style.left = `calc(50vw - ${parseInt(windowElem.style.width) / 2}px)`;
        windowElem.style.top = `calc(50vh - ${parseInt(windowElem.style.height) / 2}px)`;

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
            const savedHeightWindow = this.mouse.y - windowElem.offsetTop;
            this.eventController.addFrameEvent({
                name: `${app.name}_resize`,
                event: "mousemove",
                callback: () => {
                    if (app.isFullScreen) return;
                    this.disableIframes();
                    windowElem.style.height = Math.max(this.mouse.y - savedY + parseInt(savedHeightWindow), 50) + "px";
                    frame.style.height = Math.max(this.mouse.y - savedY + parseInt(savedHeightWindow) - 30, 20) + "px";
                    this.appsController.moved(app.name, windowElem.style.left, windowElem.style.top);
                    this.appsController.resized(app.name, windowElem.style.width, windowElem.style.height);
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
                    if (app.isFullScreen) return;
                    if (savedY - this.mouse.y + parseInt(savedHeightWindow) < 50) return;
                    this.disableIframes();
                    windowElem.style.top = this.mouse.y + "px";
                    frame.style.top = this.mouse.y - 30 + "px";
                    windowElem.style.height = Math.max(savedY - this.mouse.y + parseInt(savedHeightWindow), 50) + "px";
                    frame.style.height = Math.max(savedY - this.mouse.y + parseInt(savedHeightFrame), 20) + "px";
                    this.appsController.moved(app.name, windowElem.style.left, windowElem.style.top);
                    this.appsController.resized(app.name, windowElem.style.width, windowElem.style.height);
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
                    if (app.isFullScreen) return;
                    this.disableIframes();
                    windowElem.style.width = Math.max(this.mouse.x - savedX + parseInt(savedWidthWindow), 200) + "px";
                    frame.style.width = Math.max(this.mouse.x - savedX + parseInt(savedWidthFrame), 199) + "px";
                    this.appsController.moved(app.name, windowElem.style.left, windowElem.style.top);
                    this.appsController.resized(app.name, windowElem.style.width, windowElem.style.height);
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
                    if (app.isFullScreen) return;
                    if (savedX - this.mouse.x + parseInt(savedWidthWindow) < 200) return;
                    this.disableIframes();
                    windowElem.style.left = this.mouse.x + "px";
                    frame.style.left = this.mouse.x + "px";
                    windowElem.style.width = Math.max(savedX - this.mouse.x + parseInt(savedWidthWindow), 200) + "px";
                    frame.style.width = Math.max(savedX - this.mouse.x + parseInt(savedWidthFrame), 198) + "px";
                    this.appsController.moved(app.name, windowElem.style.left, windowElem.style.top);
                    this.appsController.resized(app.name, windowElem.style.width, windowElem.style.height);
                },
            });
        });

        resizeHandleDRB.addEventListener("mousedown", () => {
            this.eventController.addFrameEvent({
                name: `${app.name}_resize`,
                event: "mousemove",
                callback: () => {
                    if (app.isFullScreen) return;
                    this.disableIframes();
                    const ySide = this.mouse.y - windowElem.offsetTop;
                    const hypo = calculateDistance({ x: windowElem.offsetLeft, y: windowElem.offsetTop }, { x: this.mouse.x, y: this.mouse.y });
                    const xSide = Math.sqrt(-1 * ySide * ySide + hypo * hypo);
                    windowElem.style.height = Math.max(ySide, 50) + "px";
                    frame.style.height = Math.max(ySide - 30, 20) + "px";
                    windowElem.style.width = Math.max(xSide, 200) + "px";
                    frame.style.width = Math.max(xSide - 1, 199) + "px";
                    this.appsController.moved(app.name, windowElem.style.left, windowElem.style.top);
                    this.appsController.resized(app.name, windowElem.style.width, windowElem.style.height);
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
                    if (app.isFullScreen) return;
                    this.disableIframes();
                    const ySide = this.mouse.y - windowElem.offsetTop;
                    const hypo = calculateDistance({ x: savedLeft + savedWidth, y: windowElem.offsetTop }, { x: this.mouse.x, y: this.mouse.y });
                    const xSide = Math.sqrt(-1 * ySide * ySide + hypo * hypo);
                    if (xSide > 200) {
                        windowElem.style.left = this.mouse.x + "px";
                        windowElem.style.width = Math.max(xSide, 200) + "px";
                        frame.style.width = Math.max(xSide - 1, 199) + "px";
                    }
                    if (ySide > 50) {
                        frame.style.left = this.mouse.x + "px";
                        windowElem.style.height = Math.max(ySide, 50) + "px";
                        frame.style.height = Math.max(ySide - 30, 20) + "px";
                    }
                    this.appsController.moved(app.name, windowElem.style.left, windowElem.style.top);
                    this.appsController.resized(app.name, windowElem.style.width, windowElem.style.height);
                },
            });
        });

        this.eventController.addEvent({
            name: `${app.name}_resize_up`,
            event: "mouseup",
            callback: () => {
                this.eventController.removeFrameEvent(`${app.name}_resize`);
                this.enableIframes();
            },
        });

        windowElem.addEventListener("mousedown", () => {
            this.adjustZIndex(windowElem);
        });

        this.desktop.prepend(windowElem);

        const computedLeftValue = window.getComputedStyle(windowElem).getPropertyValue("left");
        const computedTopValue = window.getComputedStyle(windowElem).getPropertyValue("top");
        this.appsController.moved(app.name, parseInt(computedLeftValue), parseInt(computedTopValue));
    }

    createWindowHeader(app) {
        const windowHeader = document.createElement("div");
        const closeBtn = document.createElement("button");
        const expandBtn = document.createElement("button");
        const hideBtn = document.createElement("button");

        windowHeader.classList.add("winCl-WindowHeader");
        windowHeader.classList.add("winCl-Grabber");
        windowHeader.addEventListener("mousedown", () => {
            const savedX = this.mouse.x;
            const window = document.getElementById(app.name);
            const savedOffset = window.offsetLeft;
            this.eventController.addFrameEvent({
                name: `${app.name}_drag`,
                event: "mousemove",
                callback: () => {
                    this.disableIframes();
                    this.moveElement(savedX, savedOffset, window);
                    if (app.isFullScreen) return;
                    this.appsController.moved(app.name, window.style.left, window.style.top);
                },
            });
        });
        this.eventController.addEvent({
            name: `${app.name}_drag_up`,
            event: "mouseup",
            callback: () => {
                this.enableIframes();
                this.eventController.removeFrameEvent(`${app.name}_drag`);
            },
        });
        closeBtn.classList.add("winCl-BtnHeader");
        closeBtn.classList.add("winCl-CloseIcon");
        closeBtn.addEventListener("click", () => {
            ueh.closeApp(app.name);
        });

        expandBtn.classList.add("winCl-BtnHeader");
        expandBtn.classList.add("winCl-ExpandIcon");

        expandBtn.addEventListener("click", () => {
            const window = document.getElementById(app.name);
            if (app.isFullScreen) {
                this.unexpandWindow(app, window);
                this.appsController.toggleExpand(app.name);
                return;
            }
            if (!app.isFullScreen) {
                this.expandWindow(window);
                this.appsController.toggleExpand(app.name);
                return;
            }
        });

        hideBtn.classList.add("winCl-BtnHeader");
        hideBtn.classList.add("winCl-MinimizeIcon");
        hideBtn.addEventListener("click", () => {
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

    moveElement(startDragX, startDragOffset, elem) {
        if (elem === undefined) return;
        this.adjustZIndex(elem);

        const diff = Math.abs(startDragX - startDragOffset);

        const x = this.mouse.x - diff;
        const y = this.mouse.y - 10;

        elem.style.position = "absolute";
        elem.style.left = x + "px";
        elem.style.top = y + "px";
    }

    moveShortcut(startDragX, startDragOffset, elem, shortCutIndx) {
        if (elem === undefined) return;

        const diff = Math.abs(startDragX - startDragOffset);

        const x = this.alignToGrid(this.mouse.x - diff, this.mouse.y).x;
        const y = this.alignToGrid(this.mouse.x - diff, this.mouse.y).y;

        for (let i = 0; i < this.desktopGrid.length; i++) {
            if (this.desktopGrid[i].x == x && this.desktopGrid[i].y == y) return;
        }

        elem.style.position = "absolute";
        elem.style.left = x + "px";
        elem.style.top = y + "px";

        console.log(x, y);

        this.desktopGrid[shortCutIndx].x = x;
        this.desktopGrid[shortCutIndx].y = y;
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

    expandWindow(window) {
        if (!window) return;
        const frame = window.querySelector("iframe");
        frame.style.width = "calc(100% - 1px)";
        frame.style.height = "calc(100% - 30px)";
        window.style.width = "calc(100% - 3px)";
        window.style.height = "calc(100% - 30px)";
        window.style.top = "0px";
        window.style.left = "0px";
    }

    unexpandWindow(app, window) {
        if (!window) return;
        window.style.width = `${app.width}px`;
        window.style.height = `${app.height}px`;
        window.style.top = `${app.position.y}px`;
        window.style.left = `${app.position.x}px`;
    }

    alignToGrid(x, y) {
        const maxHeight = Math.round((window.innerHeight - 100) / 75) * 75;
        const maxWidth = Math.round((window.innerWidth - 100) / 75) * 75;
        const gridX = Math.max(Math.min(Math.round(x / 75) * 75, maxWidth), 0);
        const gridY = Math.max(Math.min(Math.round(y / 75) * 75, maxHeight), 0);
        return { x: gridX, y: gridY };
    }

    getNextOnGrid() {
        let x = this.alignToGrid(0, 0).x;
        let y = this.alignToGrid(0, 0).y;
        for (let i = 0; i < this.desktopGrid.length; i++) {
            if (this.desktopGrid[i].x == x && this.desktopGrid[i].y == y) {
                x = this.alignToGrid(x, y + 37.5).x;
                y = this.alignToGrid(x, y + 37.5).y;
                continue;
            }
        }
        this.desktopGrid.push({ x: x, y: y });
        return { x: x, y: y, indx: this.desktopGrid.length - 1 };
    }

    disableIframes() {
        const iframes = document.getElementsByTagName("iframe");
        for (let i = 0; i < iframes.length; i++) {
            iframes[i].style.pointerEvents = "none";
        }
    }

    enableIframes() {
        const iframes = document.getElementsByTagName("iframe");
        for (let i = 0; i < iframes.length; i++) {
            iframes[i].style.pointerEvents = "auto";
        }
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
