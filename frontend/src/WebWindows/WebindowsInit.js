import { webindowsLoadingScreen, createShortCut } from "./WindowCreator";
import getAllApps from "../Apps/Apps";
import { tickMouse, tickTime } from "./WebindowsTickers";
import { drop } from "./WebindowsWindowEvents";

/**
 * Initializes the webindows.
 *
 * @return {void} No return value.
 */
export default function webindowsInit() {
    webindowsLoadingScreen(100);
    initWindowEvents();
    createShortcuts();
}

/**
 * Initializes the window events.
 *
 * @param {type} paramName - description of parameter
 * @return {type} description of return value
 */
const initWindowEvents = function () {
    let html = document.getElementById("id_windows");
    html.addEventListener("mousemove", (e) => {
        tickMouse(e);
    });
    setInterval(() => {
        tickTime();
    }, 1000);
    window.addEventListener("mouseup", (e) => {
        drop();
    });
    window.addEventListener("mouseout", function (event) {
        if (event.relatedTarget != null) return;
        drop();
    });
};

/**
 * Create shortcuts on desktop for all apps.
 *
 * @return {undefined} No return value.
 */
const createShortcuts = function () {
    const apps = getAllApps();
    for (let i = 0; i < apps.length; i++) {
        createShortCut(apps[i]);
    }
};
