import { ueh } from "./UserEventHandler";
import { NO_FUNCTION, NO_SUB_FOLDER } from "./Conster";

function StartButton(text, img, hasSubFolder, func) {
    this.text = text;
    this.func = func;
    this.img = img;
    this.hasSubFolder = this.hasSubFolder;
    this.subFolderItems = Array(0);

    this.addSubFolder = function (folder) {
        this.subFolderItems.push(folder);
    }
}

function StartHandler() {
    this.buttonGroup = new Array(0);


    this.initStartButtons = function () {
        this.buttonGroup.push(new StartButton("Windows Update", "Img_Program.PNG", NO_SUB_FOLDER, NO_FUNCTION));
        this.buttonGroup.push(new StartButton("Programme", "Img_Program.PNG", true, NO_FUNCTION));
        this.buttonGroup.push(new StartButton("Dokumente", "Img_Order3.PNG", true, NO_FUNCTION));
        this.buttonGroup.push(new StartButton("Einstellungen", "Img_Settings.PNG", true, NO_FUNCTION));
        this.buttonGroup.push(new StartButton("Suchen", "Img_Search.PNG", true, NO_FUNCTION));
        this.buttonGroup.push(new StartButton("Hilfe", "Img_HowBook.PNG", NO_SUB_FOLDER, NO_FUNCTION));
        this.buttonGroup.push(new StartButton("Ausführen...", "Img_Program.PNG", NO_SUB_FOLDER, NO_FUNCTION));
        this.buttonGroup.push(new StartButton("Beenden...", "Img_Stop.PNG", NO_SUB_FOLDER, ueh.turnOff));

        this.bindButtonStart();
    };

    this.initSubFolders = function () {
        
        this.buttonGroup.addSubFolder(new StartButton("Programme", "Img_Program.PNG", NO_SUB_FOLDER, NO_FUNCTION));
    };

    this.writeSubFolders = function (subFolders) {
        
        for(let i = 0; i < subFolders.length; i++) {
            
        }
    
    }

    this.bindButtonStart = function () {

        let start = document.getElementById("windowStart");

        document.addEventListener(
            "click",
            (e) => {
                
                if (start.style.display === "block" && !document.getElementById("windowStart").contains(e.target)) {
                    start.style.display = "none";
                    return;
                }

                if (document.getElementById("windowStart").contains(e.target) || document.getElementById("buttonStart").contains(e.target)) {
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

export { StartHandler };
