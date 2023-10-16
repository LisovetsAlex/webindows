import { sys } from "./System";

function UEH() {
    this.initWindowEvents = function (buttonGroup) {
        let html = document.getElementById("id_windows");

        html.addEventListener("mousemove", (e) => {
            this.mouseMove(e);
        });
        window.addEventListener("mouseup", (e) => {
            sys.drop();
        });
        window.addEventListener("mouseout", function (event) {
            if (event.relatedTarget != null) return;
            sys.drop();
        });
        this.bindStartButtons(buttonGroup);
    };

    this.bindStartButtons = function (buttonGroup) {
        let group = document.getElementById("buttonGroup");

        for (let i = 0; i < buttonGroup.length; i++) {
            let button = document.createElement("button");

            button.className = "winStartBtn";

            button.onclick = () => {
                buttonGroup[i].func();
            };

            button.innerHTML = `
            <div style="display: inline-block; margin-top: -14px;">
                <img alt="alt" src="Assets/${buttonGroup[i].img}" width="40" height="40">
            </div>
            <div style="padding-left:50px; margin-top:-26px;">
                ${buttonGroup[i].text}
            </div>
            `;

            group.append(button);
        }
    };

    this.drag = function (name) {
        sys.drag(name);
    };

    this.drop = function () {
        sys.drag(undefined);
    };

    this.mouseMove = function (event) {
        sys.moveWindow(event);
    };

    this.openApp = function (app) {
        sys.openApp(app);
    };

    this.closeApp = function (name) {
        sys.closeApp(name);
    };

    this.toggleHideApp = function (name) {
        sys.toggleHideApp(name);
    };

    this.turnOff = function () {
        sys.turnOff();
    };
}

const ueh = new UEH();

export { ueh };
