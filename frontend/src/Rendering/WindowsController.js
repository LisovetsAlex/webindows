import { ueh } from "../UserEventHandler";
import { ICONS_PATH } from "../constants";

export default class WindowsController {
    constructor(eventController, mouse, appsController) {
        this.mouse = mouse;
        this.appsController = appsController;
        this.eventController = eventController;
        this.desktop = document.getElementById("id_desktop");
    }

    onRemoved() {}

    createWindow(app) {
        const windowElem = document.createElement("div");
        const frame = document.createElement("iframe");
        const resizeHandleLeft = document.createElement("div");
        const resizeHandleRight = document.createElement("div");
        const resizeHandleTop = document.createElement("div");
        const resizeHandleBottom = document.createElement("div");
        const resizeHandleDRB = document.createElement("div");
        const resizeHandleDLB = document.createElement("div");
        let isResizing = false;

        windowElem.setAttribute("id", `${app.name}`);
        windowElem.classList = "winCl-Window winCl-HardOutsetShadow";
        windowElem.style.width = app.width;
        windowElem.style.height = app.height;

        frame.setAttribute("id", `${app.name}_frame`);
        frame.setAttribute("src", `${app.html}`);
        frame.setAttribute("loading", `lazy`);
        frame.style.width = parseInt(windowElem.style.width) - 8;
        frame.style.height = parseInt(windowElem.style.height) - 34;
        frame.classList = "winCl-Frame";
        frame.onload = () => {
            const iframe = frame.contentDocument || frame.contentWindow.document;

            this.eventController.addFrame(frame);

            iframe.addEventListener("mousemove", (e) => {
                this.sendMousemoveToParent(e, frame);
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
            isResizing = true;
            this.eventController.sendMessage("window_resize_start", `${app.name}_frame`);
            const savedY = this.mouse.y;
            const savedHeightWindow = this.mouse.y - windowElem.offsetTop;
            this.eventController.addFrameEvent({
                name: `window_resize`,
                event: "mousemove",
                shareEvent: true,
                callback: () => {
                    if (app.isFullScreen) return;
                    this.eventController.sendMessage("window_resize", `${app.name}_frame`);
                    this.disableIframes();
                    windowElem.style.height =
                        Math.max(this.mouse.y - savedY + parseInt(savedHeightWindow), 50) + "px";
                    frame.style.height =
                        Math.max(this.mouse.y - savedY + parseInt(savedHeightWindow) - 34, 16) + "px";
                    this.appsController.moved(app.name, windowElem.style.left, windowElem.style.top);
                    this.appsController.resized(app.name, windowElem.style.width, windowElem.style.height);
                },
            });
        });

        resizeHandleTop.addEventListener("mousedown", () => {
            isResizing = true;
            this.eventController.sendMessage("window_resize_start", `${app.name}_frame`);
            const savedY = this.mouse.y;
            const savedHeightWindow = windowElem.style.height;
            const savedHeightFrame = frame.style.height;
            this.eventController.addFrameEvent({
                name: `window_resize`,
                event: "mousemove",
                callback: () => {
                    if (app.isFullScreen) return;
                    this.eventController.sendMessage("window_resize", `${app.name}_frame`);
                    if (savedY - this.mouse.y + parseInt(savedHeightWindow) < 50) return;
                    this.disableIframes();
                    windowElem.style.top = this.mouse.y + "px";
                    frame.style.top = this.mouse.y - 30 + "px";
                    windowElem.style.height =
                        Math.max(savedY - this.mouse.y + parseInt(savedHeightWindow), 50) + "px";
                    frame.style.height =
                        Math.max(savedY - this.mouse.y + parseInt(savedHeightFrame), 16) + "px";
                    this.appsController.moved(app.name, windowElem.style.left, windowElem.style.top);
                    this.appsController.resized(app.name, windowElem.style.width, windowElem.style.height);
                },
            });
        });

        resizeHandleRight.addEventListener("mousedown", () => {
            isResizing = true;
            this.eventController.sendMessage("window_resize_start", `${app.name}_frame`);
            const savedX = this.mouse.x;
            const savedWidthWindow = windowElem.style.width;
            const savedWidthFrame = frame.style.width;
            this.eventController.addFrameEvent({
                name: `window_resize`,
                event: "mousemove",
                callback: () => {
                    if (app.isFullScreen) return;
                    this.eventController.sendMessage("window_resize", `${app.name}_frame`);
                    this.disableIframes();
                    windowElem.style.width =
                        Math.max(this.mouse.x - savedX + parseInt(savedWidthWindow), 200) + "px";
                    frame.style.width =
                        Math.max(this.mouse.x - savedX + parseInt(savedWidthFrame), 192) + "px";
                    this.appsController.moved(app.name, windowElem.style.left, windowElem.style.top);
                    this.appsController.resized(app.name, windowElem.style.width, windowElem.style.height);
                },
            });
        });

        resizeHandleLeft.addEventListener("mousedown", () => {
            isResizing = true;
            this.eventController.sendMessage("window_resize_start", `${app.name}_frame`);
            const savedX = this.mouse.x;
            const savedWidthWindow = windowElem.style.width;
            const savedWidthFrame = frame.style.width;
            this.eventController.addFrameEvent({
                name: `window_resize`,
                event: "mousemove",
                callback: () => {
                    if (app.isFullScreen) return;
                    this.eventController.sendMessage("window_resize", `${app.name}_frame`);
                    if (savedX - this.mouse.x + parseInt(savedWidthWindow) < 200) return;
                    this.disableIframes();
                    windowElem.style.left = this.mouse.x + "px";
                    frame.style.left = this.mouse.x + "px";
                    windowElem.style.width =
                        Math.max(savedX - this.mouse.x + parseInt(savedWidthWindow), 200) + "px";
                    frame.style.width =
                        Math.max(savedX - this.mouse.x + parseInt(savedWidthFrame), 192) + "px";
                    this.appsController.moved(app.name, windowElem.style.left, windowElem.style.top);
                    this.appsController.resized(app.name, windowElem.style.width, windowElem.style.height);
                },
            });
        });

        resizeHandleDRB.addEventListener("mousedown", () => {
            isResizing = true;
            this.eventController.sendMessage("window_resize_start", `${app.name}_frame`);
            this.eventController.addFrameEvent({
                name: `window_resize`,
                event: "mousemove",
                callback: () => {
                    if (app.isFullScreen) return;
                    this.eventController.sendMessage("window_resize", `${app.name}_frame`);
                    this.disableIframes();
                    const ySide = this.mouse.y - windowElem.offsetTop;
                    const hypo = this.calculateDistance(
                        { x: windowElem.offsetLeft, y: windowElem.offsetTop },
                        { x: this.mouse.x, y: this.mouse.y }
                    );
                    const xSide = Math.sqrt(-1 * ySide * ySide + hypo * hypo);
                    windowElem.style.height = Math.max(ySide, 50) + "px";
                    frame.style.height = Math.max(ySide - 34, 16) + "px";
                    windowElem.style.width = Math.max(xSide, 200) + "px";
                    frame.style.width = Math.max(xSide - 8, 192) + "px";
                    this.appsController.moved(app.name, windowElem.style.left, windowElem.style.top);
                    this.appsController.resized(app.name, windowElem.style.width, windowElem.style.height);
                },
            });
        });

        resizeHandleDLB.addEventListener("mousedown", () => {
            isResizing = true;
            const savedWidth = parseInt(windowElem.style.width);
            const savedLeft = windowElem.offsetLeft;
            this.eventController.sendMessage("window_resize_start", `${app.name}_frame`);
            this.eventController.addFrameEvent({
                name: `window_resize`,
                event: "mousemove",
                callback: () => {
                    if (app.isFullScreen) return;
                    this.eventController.sendMessage("window_resize", `${app.name}_frame`);
                    this.disableIframes();
                    const ySide = this.mouse.y - windowElem.offsetTop;
                    const hypo = this.calculateDistance(
                        { x: savedLeft + savedWidth, y: windowElem.offsetTop },
                        { x: this.mouse.x, y: this.mouse.y }
                    );
                    const xSide = Math.sqrt(-1 * ySide * ySide + hypo * hypo);
                    if (xSide > 200) {
                        windowElem.style.left = this.mouse.x + "px";
                        windowElem.style.width = Math.max(xSide, 200) + "px";
                        frame.style.width = Math.max(xSide - 8, 192) + "px";
                    }
                    if (ySide > 50) {
                        frame.style.left = this.mouse.x + "px";
                        windowElem.style.height = Math.max(ySide, 50) + "px";
                        frame.style.height = Math.max(ySide - 34, 16) + "px";
                    }
                    this.appsController.moved(app.name, windowElem.style.left, windowElem.style.top);
                    this.appsController.resized(app.name, windowElem.style.width, windowElem.style.height);
                },
            });
        });

        this.eventController.addEvent({
            name: `window_resize_end`,
            event: "mouseup",
            callCondition: () => isResizing,
            callback: () => {
                isResizing = false;
                this.eventController.removeFrameEvent(`window_resize`);
                this.eventController.sendMessage("window_resize_end", `${app.name}_frame`);
                this.enableIframes();
            },
        });

        windowElem.addEventListener("mousedown", () => {
            this.adjustZIndex(windowElem);
        });

        this.desktop.prepend(windowElem);

        this.eventController.sendMessage("window_open", `${app.name}_frame`);
        const computedLeftValue = window.getComputedStyle(windowElem).getPropertyValue("left");
        const computedTopValue = window.getComputedStyle(windowElem).getPropertyValue("top");
        this.appsController.moved(app.name, parseInt(computedLeftValue), parseInt(computedTopValue));

        this.adjustZIndex(windowElem);
    }

    createWindowHeader(app) {
        this.eventController.addEvent({
            name: `${app.name}_drag_up`,
            event: "mouseup",
            callback: () => {
                this.enableIframes();
                this.eventController.removeFrameEvent(`${app.name}_drag`);
            },
        });

        this.createHiddenApp(app);

        const elem = (
            <div
                className="winCl-Header"
                onMousedown={() => {
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
                }}
            >
                {app.name}
                <div>
                    <button
                        class="winCl-Button3d winCl-MinimizeIcon"
                        onClick={() => {
                            ueh.toggleHideApp(app.name);
                        }}
                    ></button>
                    <button
                        class="winCl-Button3d winCl-ExpandIcon"
                        onClick={() => {
                            const window = document.getElementById(app.name);
                            if (app.isFullScreen) {
                                this.unexpandWindow(app, window);
                                this.appsController.toggleExpand(app.name);
                                return;
                            }
                            if (!app.isFullScreen) {
                                this.expandWindow(app, window);
                                this.appsController.toggleExpand(app.name);
                                return;
                            }
                        }}
                    ></button>
                    <button
                        class="winCl-Button3d winCl-CloseIcon"
                        onClick={() => ueh.closeApp(app.name)}
                    ></button>
                </div>
            </div>
        );

        return elem;
    }

    createHiddenApp(app) {
        const elem = (
            <button
                id={`${app.name}mini`}
                className="winCl-Button3d winCl-MinnedApp"
                onClick={() => {
                    const window = document.getElementById(app.name);
                    if (app.isMinimized) return ueh.toggleHideApp(app.name);
                    if (window.style.zIndex == 2) return ueh.toggleHideApp(app.name);
                    if (window.style.zIndex == 1) return this.adjustZIndex(window);
                }}
            >
                <img src={`${ICONS_PATH}/${app.img}`} style="width: 26px" />
                <p>{app.name}</p>
            </button>
        );

        const miniApps = document.getElementById("id_minnedApps");
        miniApps.prepend(elem);
    }

    expandWindow(app, window) {
        if (!window) return;
        this.eventController.sendMessage("window_before_expand", `${app.name}_frame`);

        const frame = window.querySelector("iframe");
        frame.style.width = "calc(100% - 8px)";
        frame.style.height = "calc(100% - 34px)";
        window.style.width = "calc(100% - 8px)";
        window.style.height = "calc(100% - 44px)";
        window.style.top = "0px";
        window.style.left = "0px";

        this.eventController.sendMessage("window_expand", `${app.name}_frame`);
    }

    unexpandWindow(app, window) {
        if (!window) return;
        this.eventController.sendMessage("window_before_unexpand", `${app.name}_frame`);

        window.style.width = `${app.width}px`;
        window.style.height = `${app.height}px`;
        window.style.top = `${app.position.y}px`;
        window.style.left = `${app.position.x}px`;

        this.eventController.sendMessage("window_unexpand", `${app.name}_frame`);
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

    adjustZIndex(windowElem) {
        const arr = document.getElementsByClassName("winCl-Window");
        for (let i = 0; i < arr.length; i++) {
            arr[i].style["z-index"] = 1;
        }
        if (!windowElem.classList.contains("winCl-Shortcut")) windowElem.style["z-index"] = 2;
    }

    hideWindow(name) {
        const window = document.getElementById(name);
        window.style.display = "none";
    }

    showWindow(name) {
        const window = document.getElementById(name);
        window.style.display = "block";
        this.adjustZIndex(window);
    }

    removeWindow(name) {
        this.eventController.sendMessage("window_close", `${name}_frame`);

        const window = document.getElementById(name);
        window.remove();

        const mini = document.getElementById(`${name}mini`);
        mini.remove();
    }

    calculateDistance(vector1, vector2) {
        const deltaX = vector2.x - vector1.x;
        const deltaY = vector2.y - vector1.y;
        return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    }

    sendMousemoveToParent(event, iframe) {
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
}
