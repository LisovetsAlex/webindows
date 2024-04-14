import { ueh } from "../UserEventHandler";
import { ICONS_PATH } from "../constants";

export default class ShortcutController {
    constructor(eventController, mouse) {
        this.desktopGrid = [];
        this.mouse = mouse;
        this.eventController = eventController;
        this.desktop = document.getElementById("id_desktop");
    }

    onRemoved() {
        this.desktopGrid = [];
    }

    createShortcut(app) {
        const position = this.getNextOnGrid();
        const shortCutIndx = position.indx;

        this.eventController.addEvent({
            name: `${app.name}sc_drag_up`,
            event: "mouseup",
            callback: () => {
                this.eventController.removeEvent(`${app.name}sc_drag`);
            },
        });

        const elem = (
            <div
                id={`${app.name}sc`}
                style={{ position: "absolute", top: `${position.y}px`, left: `${position.x}px` }}
            >
                <div
                    className="winCl-Shortcut"
                    onDblclick={() => ueh.openApp(app.name)}
                    onMousedown={() => {
                        const shortCut = document.getElementById(`${app.name}sc`);
                        const savedX = this.mouse.x;
                        const savedOffset = shortCut.offsetLeft;
                        this.eventController.addEvent({
                            name: `${app.name}sc_drag`,
                            event: "mousemove",
                            callback: () => {
                                this.moveShortcut(savedX, savedOffset, shortCut, shortCutIndx);
                            },
                        });
                    }}
                >
                    <img src={`${ICONS_PATH}/${app.img}`} className="winCl-ShortcutImg" />
                    {app.name}
                </div>
            </div>
        );

        this.desktop.append(elem);
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

        this.desktopGrid[shortCutIndx].x = x;
        this.desktopGrid[shortCutIndx].y = y;
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
}
