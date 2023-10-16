import App from "../Apps/AppObj";
import { drag, drop } from "./WebindowsWindowEvents";
import { openApp } from "./WebindowsAppManager";

const desktop = document.getElementById("id_desktop");

/**
 * Creates a shortcut for an app.
 *
 * @param {App} app - The app object.
 * @param {string} app.name - The name of the app.
 * @param {string} app.img - The image url source for the app.
 * @return {void} This function does not return anything.
 */
const createShortCut = function (app) {
    const shortCut = document.createElement("div");
    const btn = document.createElement("button");
    const img = document.createElement("img");

    shortCut.setAttribute("id", "id_shortcuts");

    btn.setAttribute("id", `${app.name}sc`);
    btn.classList.add("winCl-ShortcutBtn");
    btn.classList.add("winCl-Grabber");
    btn.dataset.width = "75";

    btn.addEventListener("dblclick", () => {
        //OpenApp(app.name, app.html);
        createWindow(app);
    });
    btn.addEventListener("mousedown", () => {
        drag(`${app.name}sc`);
    });

    img.setAttribute("src", `Assets/${app.img}`);
    img.setAttribute("loading", "lazy");
    img.classList.add("winCl-ShortcutImg");

    btn.append(img);
    btn.innerHTML += app.name;
    shortCut.append(btn);

    desktop.append(shortCut);
};

/**
 * Sets up a loading screen for the webindows.
 *
 * @param {number} duration - The duration of the loading screen in milliseconds.
 * @return {void} This function does not return a value.
 */
const webindowsLoadingScreen = function (duration) {
    let screen = document.getElementById("turnOff");
    screen.style.backgroundImage = "url('Assets/Img_LoadingWindows.PNG')";
    screen.style.display = "block";
    setTimeout(function () {
        screen.style.display = "none";
    }, duration);
};

/**
 * Creates a new window element for the given app.
 *
 * @param {App} app - The app object.
 * @return {void}
 */
const createWindow = function (app) {
    const windowElem = document.createElement("div");
    const frame = document.createElement("iframe");

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

    windowElem.append(createWindowHeader(app));
    windowElem.append(frame);

    windowElem.style.position = "absolute";
    windowElem.style.left = window.innerWidth / 2 - 100 + "px";
    windowElem.style.top = window.innerHeight / 2 - 200 + "px";

    desktop.prepend(windowElem);
};

/**
 * Creates a window header for the given app.
 *
 * @param {App} app - The app object.
 * @return {HTMLElement} - The created window header element.
 */
const createWindowHeader = function (app) {
    const windowHeader = document.createElement("div");
    const closeBtn = document.createElement("button");
    const expandBtn = document.createElement("button");
    const hideBtn = document.createElement("button");

    windowHeader.classList.add("winCl-WindowHeader");
    windowHeader.classList.add("winCl-Grabber");
    windowHeader.addEventListener("mousedown", () => {
        drag(`${app.name}`);
    });
    windowHeader.addEventListener("mouseup", () => {
        drop();
    });

    closeBtn.classList.add("winCl-BtnHeader");
    closeBtn.classList.add("winCl-CloseIcon");
    closeBtn.addEventListener("mousedown", () => {});

    expandBtn.classList.add("winCl-BtnHeader");
    expandBtn.classList.add("winCl-ExpandIcon");
    expandBtn.addEventListener("mousedown", () => {});

    hideBtn.classList.add("winCl-BtnHeader");
    hideBtn.classList.add("winCl-MinimizeIcon");
    hideBtn.addEventListener("mousedown", () => {});

    windowHeader.append(closeBtn);
    windowHeader.append(expandBtn);
    windowHeader.append(hideBtn);
    windowHeader.innerHTML += app.name;

    createMinnedApp(app);

    return windowHeader;
};

/**
 * Creates a minned app.
 *
 * @param {App} app - The app object.
 * @param {string} app.name - The name of the app.
 * @param {string} app.img - The image url of the app.
 * @return {void} No return value.
 */
const createMinnedApp = function (app) {
    const mini = document.createElement("button");
    const miniApps = document.getElementById("id_minnedApps");

    mini.setAttribute("id", `${app.name}mini`);
    mini.classList.add("winCl-MinimizedBtn");
    mini.addEventListener("click", () => {});
    mini.innerHTML = `
                <img src="Assets/${app.img}" style="width: 32px; height: 28px; padding-top: 0px;">
                <p style="margin: 0px; margin-top: 8px;" >
                    ${app.name}
                </p>
                `;
    miniApps.prepend(mini);
};

export { createShortCut, webindowsLoadingScreen, createWindow, desktop };
