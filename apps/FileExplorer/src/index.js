import Button from "../components/Button";
import ButtonIcon from "../components/ButtonIcon";
import ButtonBar from "../components/ButtonBar";
import DividerVertical from "../components/DividerVertical";
import Icon from "../components/Icon";
import Input from "../components/Input";
import Text from "../components/Text";
import ButtonBase from "../components/ButtonBase";
import FoldersMenu from "../components/FoldersMenu";
import SubWindow from "../components/SubWindow";
import { ICONS_PATH, requestFolder } from "../components/constants";
import FolderItem from "../components/FolderItem";

const history = ["/"];
let currentIndex = 0;
let location = history[history.length - 1];

function init() {
    const root = document.getElementsByTagName("body")[0];
    let address = "/";
    root.append(
        <div>
            <ButtonBase>
                <ButtonBar>
                    <Button text="File" disabled={false} />
                    <Button text="Edit" disabled={false} />
                    <Button text="View" disabled={true} />
                    <Button text="Extra" disabled={true} />
                    <Button text="?" disabled={true} />
                </ButtonBar>
                <ButtonBar>
                    <ButtonIcon
                        src={`${ICONS_PATH}/progman.exe_14_143.ico`}
                        text="Back"
                        disabled={false}
                        onClick={() => goBack()}
                    />
                    <ButtonIcon
                        src={`${ICONS_PATH}/progman.exe_14_144.ico`}
                        text="Forward"
                        disabled={false}
                        onClick={() => goForward()}
                    />
                    <Icon src={`${ICONS_PATH}/webcheck.dll_14_114.ico`} height="16px" width="16px" />
                    <DividerVertical height="20px" />
                    <ButtonIcon
                        src={`${ICONS_PATH}/explorer.exe_14_101.ico`}
                        text="Search"
                        disabled={false}
                    />
                    <ButtonIcon src={`${ICONS_PATH}/fde.dll_14_400.ico`} text="Folders" disabled={false} />
                    <ButtonIcon
                        src={`${ICONS_PATH}/snmpsnap.dll_14_6504.ico`}
                        text="History"
                        disabled={false}
                    />
                    <DividerVertical height="20px" />
                    <Icon src={`${ICONS_PATH}/syncui.dll_14_126.ico`} height="16px" width="16px" />
                    <Icon src={`${ICONS_PATH}/syncui.dll_14_127.ico`} height="16px" width="16px" />
                    <Icon src={`${ICONS_PATH}/compstui.dll_14_64003.ico`} height="16px" width="16px" />
                </ButtonBar>
                <ButtonBar gap="4px">
                    <Text text="Address" />
                    <Input
                        id="id_FileExplorer_Address"
                        placeholder="Input address..."
                        value="/"
                        width="100%"
                        onInput={(e) => {
                            address = e.target.value;
                        }}
                    />
                    <ButtonIcon
                        src={`${ICONS_PATH}/progman.exe_14_144.ico`}
                        text="Go"
                        disabled={false}
                        onClick={() => goTo(address)}
                    />
                </ButtonBar>
            </ButtonBase>
            <SubWindow>
                <FoldersMenu id="id_FileExplorer_FoldersMenu"></FoldersMenu>
            </SubWindow>
        </div>
    );

    goTo(address);
}

async function goTo(address) {
    const input = document.getElementById("id_FileExplorer_Address");
    const menu = document.getElementById("id_FileExplorer_FoldersMenu");
    const newFolders = await requestFolder(address);

    input.value = address;
    history.push(address);
    location = address;
    currentIndex = history.length - 1;

    while (menu.firstChild) {
        menu.removeChild(menu.firstChild);
    }

    menu.append(
        <div>
            {newFolders.data.map((child) => (
                <FolderItem metadata={child} onClick={() => goTo(address + "/" + child.name)} />
            ))}
        </div>
    );
}

async function goToHistory(index) {
    const input = document.getElementById("id_FileExplorer_Address");
    const menu = document.getElementById("id_FileExplorer_FoldersMenu");
    const newFolders = await requestFolder(history[index]);

    input.value = history[index];
    location = history[index];

    while (menu.firstChild) {
        menu.removeChild(menu.firstChild);
    }

    menu.append(
        <div>
            {newFolders.data.map((child) => (
                <FolderItem metadata={child} onClick={() => goTo(history[index] + "/" + child.name)} />
            ))}
        </div>
    );
}

function goBack() {
    if (currentIndex <= 0) currentIndex = 1;
    currentIndex--;
    goToHistory(currentIndex);
}

function goForward() {
    if (currentIndex >= history.length - 1) currentIndex = history.length - 2;
    currentIndex++;
    goToHistory(currentIndex);
}

init();
