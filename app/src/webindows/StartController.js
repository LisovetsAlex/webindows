import { ueh } from "./UserEventHandler";

function StartButton(text, img, func) {
    this.text = text;
    this.func = func;
    this.img = img;
}

function StartController() {
    this.buttonGroup = new Array(0);

    this.initStartButtons = function () {
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
            new StartButton("Beenden...", "Img_Stop.PNG", ueh.turnOff)
        );

        this.bindButtonStart();
        this.bindStartButtons(this.buttonGroup);
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
}

export { StartController as StartHandler };
