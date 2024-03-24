export default class MouseController {
    constructor(eventController) {
        this.eventController = eventController;
        this.x = 0;
        this.y = 0;
        this.isDragging = false;
        this.velY = 0;
        this.velX = 0;
        this.isHoldingLMB = false;
        this.lastTick = performance.now();

        this.eventController.addEvent({
            name: "MouseController_message",
            event: "message",
            callback: (e) => {
                if (e.data.type === "mousemove") {
                    this.x = e.data.clientX;
                    this.y = e.data.clientY;
                }
            },
        });
        this.eventController.addEvent({
            name: "MouseController_mousedown",
            event: "mousedown",
            callback: () => {
                this.isHoldingLMB = true;
            },
        });
        this.eventController.addEvent({
            name: "MouseController_mouseup",
            event: "mouseup",
            callback: () => {
                this.isHoldingLMB = false;
            },
        });
        this.eventController.addEvent({
            name: "MouseController_mousemove",
            event: "mousemove",
            callback: (e) => {
                if (e.clientX <= window.innerWidth && e.clientX >= 20) this.x = e.clientX;
                if (e.clientY <= window.innerHeight - 100 && e.clientY >= 10) this.y = e.clientY;
            },
        });

        const windows = document.getElementById("id_desktop");
        this.debugWindow = document.createElement("div");
        this.debugWindow.id = "MouseController_debug";
        windows.appendChild(this.debugWindow);

        this.tick();
    }

    tick() {
        setInterval(() => {
            //this.debug();
        }, 50);
    }

    debug() {
        const infoBoxHTML = `
            <table id="MouseController_debug" style="border-collapse: collapse;">
                <tr>
                    <td>X:</td>
                    <td><span id="xValue" style="color: green;">${this.x}</span></td>
                </tr>
                <tr>
                    <td>Y:</td>
                    <td><span id="yValue" style="color: green;">${this.y}</span></td>
                </tr>
                <tr>
                    <td>Dragging:</td>
                    <td><span id="draggingValue" style="color: green;">${this.isDragging}</span></td>
                </tr>
                <tr>
                    <td>Holding LMB:</td>
                    <td><span id="holdingLMBValue" style="color: green;">${this.isHoldingLMB}</span></td>
                </tr>
            </table>
        `;
        this.debugWindow.innerHTML = infoBoxHTML;
        this.debugWindow.style.position = "absolute";
        this.debugWindow.style.top = "10px";
        this.debugWindow.style.right = "10px";
        this.debugWindow.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
        this.debugWindow.style.padding = "10px";
        this.debugWindow.style.width = "250px";
        this.debugWindow.style.zIndex = 10000;
    }
}
