"use strict";

function WindowHandler() {
    this.date = new Date();

    this.allApps = arrApps;
    this.openApps = new Array(0);
    this.x = 0;
    this.y = 0;
    this.isDragging = false;
    this.selectedObj = undefined;

    this.initLoad = function () {
        let screen = document.getElementById("turnOff");

        screen.style.backgroundImage = "url('Assets/Img_LoadingWindows.png')";
        screen.style.display = "block";
        setTimeout(function () {
            screen.style.display = "none";
        }, 10);

        let shortCut = document.createElement("div");
        shortCut.setAttribute("id", "id_shortcuts");
        for (let i = 0; i < this.allApps.length; i++) {
            shortCut.innerHTML += `<button id="${this.allApps[i].name}sc" class="winCl-ShortcutBtn winCl-Grabber" data-width="75" ondblclick="OpenApp('${this.allApps[i].name}', '${this.allApps[i].html}')" onmousedown="StartDrag('${this.allApps[i].name}sc')">
                <img src="Assets/${this.allApps[i].img}">
                ${this.allApps[i].name}
            </button>`;
        }
        let desk = document.getElementById("id_desktop");
        desk.append(shortCut);
    };

    this.UpdateTime = function () {
        let clock = document.getElementById("id_clockTaskBar");
        clock.innerHTML =
            String(this.date.getHours()) + ":" + String(this.date.getMinutes());
    };

    this.TickMouse = function (event) {
        if (event.clientX <= window.innerWidth && event.clientX >= 20)
            this.x = event.clientX;
        if (event.clientY <= window.innerHeight - 100 && event.clientY >= 10)
            this.y = event.clientY;

        if (!this.isDragging) {
            const iframes = document.getElementsByTagName("iframe");
            for (let i = 0; i < iframes.length; i++) {
                iframes[i].style.scale = 1;
            }
            return;
        }

        const iframes = document.getElementsByTagName("iframe");
        for (let i = 0; i < iframes.length; i++) {
            iframes[i].style.scale = 0;
        }

        this.selectedObj.style.position = "absolute";
        this.selectedObj.style.left =
            Number(this.x - Number(this.selectedObj.dataset.width) / 2) + "px";
        this.selectedObj.style.top = this.y - 10 + "px";
    };

    this.Drag = function (id) {
        this.SetSelectedObj(id);
        for (let i = 0; i < this.openApps.length; i++) {
            if (this.openApps[i].name == id && this.openApps[i].isFullScreen)
                this.ExpandWindow(id);
        }

        let arr = document.getElementsByClassName("winCl-BasicWindow");
        for (let i = 0; i < arr.length; i++) {
            arr[i].style["z-index"] = 1;
        }
        if (!this.selectedObj.classList.contains("winCl-ShortcutBtn"))
            this.selectedObj.style["z-index"] = 2;

        this.isDragging = true;
    };

    this.Drop = function () {
        this.selectedObj = undefined;
        this.isDragging = false;
    };

    this.CloseApp = function (id) {
        this.SetSelectedObj(id);
        this.selectedObj.remove();
        let mini = document.getElementById(`${id}mini`);
        mini.remove();
        for (let i = 0; i < this.openApps.length; i++) {
            if (this.openApps[i].name == id) this.openApps.splice(i, 1);
        }
    };

    this.OpenApp = function (name, html) {
        for (let i = 0; i < this.openApps.length; i++) {
            if (String(this.openApps[i].name) == String(name)) return;
        }

        let desk = document.getElementById("id_desktop");

        let frame = document.createElement("iframe");
        frame.setAttribute("id", `${name}`);
        frame.setAttribute("src", `${html}`);
        frame.style.width = 358;
        frame.style.height = 198;

        let htmlElem = document.createElement("div");
        htmlElem.setAttribute("id", `${name}`);
        htmlElem.setAttribute("data-width", `350`);
        htmlElem.classList.add("winCl-BasicWindow");
        htmlElem.style.width = 363;
        htmlElem.style.height = 235;
        htmlElem.innerHTML = `
        <div class="winCl-WindowHeader winCl-Grabber" onmousedown="StartDrag('${name}')" onmouseup="StartDrop()">
            ${name}
            <button class="winCl-BtnHeader winCl-CloseIcon" onclick="CloseApp('${name}')">
            </button>
            <button class="winCl-BtnHeader winCl-ExpandIcon" onclick="ExpandWindow('${name}')">
            </button>
            <button class="winCl-BtnHeader winCl-MinimizeIcon" onclick="MinimizeWindow('${name}')">
            </button>
        </div>
        `;
        htmlElem.append(frame);
        desk.prepend(htmlElem);

        this.SetSelectedObj(name);
        this.selectedObj.style.position = "absolute";
        this.selectedObj.style.left = window.innerWidth / 2 - 100 + "px";
        this.selectedObj.style.top = window.innerHeight / 2 - 200 + "px";

        for (let i = 0; i < this.allApps.length; i++) {
            if (this.allApps[i].name == name) {
                this.openApps.push(this.allApps[i]);

                let mini = document.createElement("button");
                let miniApps = document.getElementById("id_minnedApps");
                mini.setAttribute("id", `${this.allApps[i].name}mini`);
                mini.classList.add("winCl-MinimizedBtn");
                mini.addEventListener("click", () => this.MinimizeWindow(name));
                mini.innerHTML = `
                <img src="Assets/${this.allApps[i].img}" style="width: 32px; height: 28px; padding-top: 0px;">
                <p style="margin: 0px; margin-top: 8px;" >
                    ${this.allApps[i].name}
                </p>
                `;
                miniApps.prepend(mini);
            }
        }
    };

    this.MinimizeWindow = function (id) {
        this.SetSelectedObj(id);
        for (let i = 0; i < this.openApps.length; i++) {
            if (this.openApps[i].name == id) {
                if (this.openApps[i].isMinimized) {
                    this.selectedObj.style.display = "block";
                    this.openApps[i].isMinimized = false;
                } else {
                    this.selectedObj.style.display = "none";
                    this.openApps[i].isMinimized = true;
                }
            }
        }
    };

    this.ExpandWindow = function (id) {
        let selectedApp;
        this.SetSelectedObj(id);

        for (let i = 0; i < this.openApps.length; i++) {
            if (this.openApps[i].name == id);
            selectedApp = this.openApps[i];
        }

        if (selectedApp.isFullScreen) {
            selectedApp.isFullScreen = false;
            this.selectedObj.style.width = "363px";
            this.selectedObj.style.height = "235px";
        } else {
            selectedApp.isFullScreen = true;
            this.selectedObj.style.left = 0 + "px";
            this.selectedObj.style.top = 0 + "px";
            this.selectedObj.style.width = "100%";
            this.selectedObj.style.height = "94%";
        }
    };

    this.SetSelectedObj = function (id) {
        this.selectedObj = document.getElementById(id);
    };

    this.SetBgImage = function (file) {
        let bg = document.getElementById("id_windows");
        bg.style.backgroundImage = `url(${file})`;
    };
}
