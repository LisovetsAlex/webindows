"use strict";

function StartFunctions() {
    this.turnOff = function () {
        // let audio = new Audio("");
        // audio.play();

        let screen = document.getElementById("turnOff");

        screen.style.backgroundImage = "url('Assets/Img_ShutDown.PNG')";
        screen.style.display = "block";

        setTimeout(function () {
            screen.style.backgroundImage = "";
            screen.style.backgroundColor = "black";
        }, 6000);
    };
}

function StartButton(text, img, func) {
    this.text = text;
    this.func = func;
    this.img = img;
}

export default function StartHandler() {
    this.startFunctions = new StartFunctions();
    this.buttonGroup = new Array(0);

    this.loadButtons = function () {
        const NO_FUNCTION = undefined;

        this.buttonGroup.push(
            new StartButton("Windows Update", "Img_Program.PNG", NO_FUNCTION)
        );
        this.buttonGroup.push(
            new StartButton("Programme", "Img_Program.PNG", NO_FUNCTION)
        );
        this.buttonGroup.push(
            new StartButton("Dokumente", "Img_Order3.PNG", NO_FUNCTION)
        );
        this.buttonGroup.push(
            new StartButton("Einstellungen", "Img_Settings.PNG", NO_FUNCTION)
        );
        this.buttonGroup.push(
            new StartButton("Suchen", "Img_Search.PNG", NO_FUNCTION)
        );
        this.buttonGroup.push(
            new StartButton("Hilfe", "Img_HowBook.PNG", NO_FUNCTION)
        );
        this.buttonGroup.push(
            new StartButton("Ausführen...", "Img_Program.PNG", NO_FUNCTION)
        );
        this.buttonGroup.push(
            new StartButton(
                "Beenden...",
                "Img_Stop.PNG",
                this.startFunctions.turnOff
            )
        );

        this.bindButtons();
    };

    this.bindButtons = function () {
        let group = document.getElementById("buttonGroup");

        for (let i = 0; i < this.buttonGroup.length; i++) {
            let button = document.createElement("button");

            button.className = "winStartBtn";

            button.onclick = () => {
                this.buttonGroup[i].func();
            };

            button.innerHTML = `
            <div style="display: inline-block; margin-top: -14px;">
                <img alt="alt" src="Assets/${this.buttonGroup[i].img}" width="40" height="40">
            </div>
            <div style="padding-left:50px; margin-top:-26px;">
                ${this.buttonGroup[i].text}
            </div>
            `;

            group.append(button);
        }
    };

    this.bindButtonStart = function () {
        document.addEventListener(
            "click",
            (e) => {
                let start = document.getElementById("windowStart");

                if (
                    start.style.display === "block" &&
                    !document.getElementById("windowStart").contains(e.target)
                ) {
                    start.style.display = "none";
                    return;
                }

                if (
                    document.getElementById("windowStart").contains(e.target) ||
                    document.getElementById("buttonStart").contains(e.target)
                ) {
                    start.style.display = "block";
                    return;
                } else {
                    start.style.display = "none";
                }
            },
            false
        );
    };
}

let startHandler = new StartHandler();

startHandler.bindButtonStart();
startHandler.loadButtons();
