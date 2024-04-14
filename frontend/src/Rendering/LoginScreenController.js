import { ueh } from "../UserEventHandler";
import { ASSETS_PATH, PUBLIC_PATH } from "../constants";

export default class WindowsController {
    constructor() {
        this.desktop = document.getElementById("id_desktop");
    }

    onRemoved() {}

    createLoginScreen() {
        if (document.getElementById("id_loginScreen")) return;

        let username = "";
        let password = "";

        const loggingScreen = (
            <div id="id_loginScreen" class="winCl-LoggingScreen">
                <div class="winCl-LoggingContent winCl-HardOutsetShadow">
                    <img src={`${ASSETS_PATH}/Img_Webindows_Start.gif`} class="winCl-LoggingImg" />
                    <div class="winCl-LoggingForm">
                        <label class="winCl-LoggingLabel" for="username">
                            Username:
                        </label>
                        <input
                            id="id_username"
                            name="username"
                            type="text"
                            placeholder="Your very cool name..."
                            class="winCl-LoggingInput winCl-Input"
                            onInput={(event) => {
                                const loginBtn = document.getElementById("id_login");
                                username = event.target.value;
                                loginBtn.disabled = username.length < 4 || password.length < 4;
                            }}
                        />
                    </div>
                    <div class="winCl-LoggingForm">
                        <label class="winCl-LoggingLabel" for="password">
                            Password:
                        </label>
                        <input
                            id="id_password"
                            name="password"
                            type="password"
                            placeholder="Your very secure password..."
                            class="winCl-LoggingInput winCl-Input"
                            onInput={(event) => {
                                const loginBtn = document.getElementById("id_login");
                                password = event.target.value;
                                loginBtn.disabled = username.length < 4 || password.length < 4;
                            }}
                        />
                    </div>
                    <div class="winCl-LoggingBtns">
                        <button
                            id="id_login"
                            class="winCl-Button3d winCl-LoggingBtn"
                            disabled
                            onClick={() => {
                                const usernameInput = document.getElementById("id_username");
                                const passwordInput = document.getElementById("id_password");
                                const name = usernameInput.value;
                                const pass = passwordInput.value;
                                ueh.loginUser(name, pass);
                            }}
                        >
                            Enter
                        </button>
                        <button class="winCl-Button3d winCl-LoggingBtn" disabled>
                            Cancel
                        </button>
                        <button
                            id="id_shutdown"
                            class="winCl-Button3d winCl-LoggingBtn"
                            onClick={() => {
                                ueh.turnOff();
                            }}
                        >
                            Shutdown
                        </button>
                    </div>
                </div>
            </div>
        );

        this.desktop.append(loggingScreen);
    }

    removeLoginScreen() {
        const loginScreen = document.getElementById("id_loginScreen");
        if (!loginScreen) return;
        loginScreen.remove();
    }
}
