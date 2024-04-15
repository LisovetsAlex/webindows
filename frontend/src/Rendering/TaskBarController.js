import { ueh } from "../UserEventHandler";
import { ICONS_PATH } from "../constants";

export default class TaskBarController {
    constructor(eventController) {
        this.isStartMenuOpen = false;
        this.eventController = eventController;
        this.desktop = document.getElementById("id_desktop");
    }

    onRemoved() {}

    createTaskBar() {
        const elem = (
            <div>
                <div id="id_taskbar" class="winCl-Taskbar winCl-HardOutsetShadow">
                    <button
                        id="id_startBtn"
                        class="winCl-Button3d winCl-StartBtn"
                        onClick={() => this.toggleStartMenu()}
                    >
                        <img
                            src={`${ICONS_PATH}/user32.dll_14_105.ico`}
                            style="height: 26px; pointer-events: none"
                        />
                        Start
                    </button>
                    <div class="winCl-TaskbarPinnedApps">
                        <div className="winCl-DividerVertical" style="height: 32px"></div>
                        <div className="winCl-DividerBigVertical" style="height: 24px"></div>
                        <div id="id_pinnedApps" class="winCl-PinnedApps">
                            <button
                                class="winCl-PinnedBtn"
                                onClick={() => {
                                    ueh.openApp("Internet");
                                }}
                            >
                                <img src={`${ICONS_PATH}/mshtml.dll_14_2660.ico`} style="width: 26px" />
                            </button>
                            <button
                                class="winCl-PinnedBtn"
                                onClick={() => {
                                    ueh.openApp("Visual Studio Code");
                                }}
                            >
                                <img src={`${ICONS_PATH}/pifmgr.dll_14_3.ico`} style="width: 26px" />
                            </button>
                        </div>
                        <div className="winCl-DividerVertical" style="height: 32px"></div>
                        <div className="winCl-DividerBigVertical" style="height: 24px"></div>
                    </div>

                    <div id="id_minnedApps" class="winCl-MinnedApps"></div>

                    <button id="id_clockTaskBar" class="winCl-Input winCl-ClockTaskBar" disabled>
                        12:00
                    </button>
                </div>
            </div>
        );

        this.eventController.addEvent({
            name: "removeStartMenu",
            event: "click",
            callback: (e) => {
                const isElemOfStartMenu = e.srcElement.className
                    .split(" ")
                    .map((e) => e.toLowerCase().includes("start"))
                    .filter((e) => e === true)[0];

                if (isElemOfStartMenu) return;
                this.removeStartMenu();
                this.isStartMenuOpen = false;
            },
        });

        this.desktop.append(elem);
    }

    toggleStartMenu() {
        if (this.isStartMenuOpen) {
            this.removeStartMenu();
            this.isStartMenuOpen = false;
        } else {
            this.createStartMenu();
            this.isStartMenuOpen = true;
        }
    }

    createStartMenu() {
        if (document.getElementById("id_startMenu") !== null) return;

        const elem = (
            <div id="id_startMenu" class="winCl-Start winCl-HardOutsetShadow">
                <div class="winCl-StartText">
                    <p class="winCl-StartText">Webindows 2024 Hilarious</p>
                </div>

                <div id="id_startButtons" class="winCl-StartButtons">
                    <button
                        id="id_shutdownBtn"
                        class="winCl-StartLink winCl-Button"
                        onClick={() => ueh.turnOff()}
                    >
                        <img src={`${ICONS_PATH}/msgina.dll_14_22.ico`} />
                        Shutdown
                    </button>
                    <div className="winCl-DividerHorizontal" style="width: 100%"></div>
                    <button
                        id="id_shutdownBtn"
                        class="winCl-StartLink winCl-Button"
                        onClick={() => ueh.logoutUser()}
                    >
                        <img src={`${ICONS_PATH}/shdocvw.dll_14_12768.ico`} />
                        Logout
                    </button>
                    <button id="id_shutdownBtn" class="winCl-StartLink winCl-Button">
                        <img src={`${ICONS_PATH}/winhlp32.exe_14_4001.ico`} />
                        Help!
                    </button>
                    <button id="id_shutdownBtn" class="winCl-StartLink winCl-Button">
                        <img src={`${ICONS_PATH}/winsrv.dll_14_1.ico`} />
                        Programs
                    </button>
                    <button id="id_shutdownBtn" class="winCl-StartLink winCl-Button">
                        <img src={`${ICONS_PATH}/explorer.exe_14_100.ico`} />
                        File Explorer
                    </button>
                    <button id="id_shutdownBtn" class="winCl-StartLink winCl-Button">
                        <img src={`${ICONS_PATH}/mydocs.dll_14_101.ico`} />
                        51GB Folder
                    </button>
                    <button id="id_shutdownBtn" class="winCl-StartLink winCl-Button">
                        <img src={`${ICONS_PATH}/syssetup.dll_14_89.ico`} />
                        BitCoin.txt
                    </button>
                </div>
            </div>
        );

        this.desktop.append(elem);
    }

    removeStartMenu() {
        const elem = document.getElementById("id_startMenu");
        if (!elem) return;
        elem.remove();
    }
}
