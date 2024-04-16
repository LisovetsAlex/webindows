import { ICONS_PATH } from "@webindows/connect/constants";
import WindowContent from "@webindows/components/WindowContent";
import { goTo, goBack, goForward } from "./history";
import { ViewContainer, addView } from "@webindows/Views";
import { ButtonBarContainer, ButtonBar } from "@webindows/ButtonBars";
import Button from "@webindows/components/common/Button";
import ButtonIcon from "@webindows/components/common/ButtonIcon";
import Icon from "@webindows/components/common/Icon";
import Text from "@webindows/components/common/Text";
import DividerVertical from "@webindows/components/common/DividerVertical";
import Input from "@webindows/components/common/Input";
import { FoldersView } from "./AppViews/FoldersView";
import FileExplorerOverview from "./AppViews/FileExplorerOverview";
import createDropdown from "@webindows/components/common/Dropdown";
import DropdownItem from "@webindows/components/common/Dropdown/DropdownItem";

function init() {
    const root = document.getElementsByTagName("body")[0];
    let address = "/";
    root.append(
        <WindowContent>
            <ButtonBarContainer>
                <ButtonBar>
                    <Button
                        id="FileExplorer_FileBtn"
                        text="File"
                        disabled={false}
                        onClick={() => {
                            createDropdown("FileExplorer_FileBtn", "FileExplorer_FileDD", [
                                <DropdownItem
                                    text="New File"
                                    onClick={() => {
                                        console.log("New File");
                                    }}
                                />,
                                <DropdownItem
                                    text="New File"
                                    onClick={() => {
                                        console.log("New File");
                                    }}
                                />,
                                <DropdownItem
                                    text="New File"
                                    onClick={() => {
                                        console.log("New File");
                                    }}
                                />,
                                <DropdownItem
                                    text="New File"
                                    onClick={() => {
                                        console.log("New File");
                                    }}
                                />,
                            ]);
                        }}
                    />
                    <Button
                        id="FileExplorer_EditBtn"
                        text="Edit"
                        disabled={false}
                        onClick={() => {
                            createDropdown("FileExplorer_EditBtn", "FileExplorer_EditDD", [
                                <DropdownItem
                                    text="New File"
                                    onClick={() => {
                                        console.log("New File");
                                    }}
                                />,
                                <DropdownItem
                                    text="New File"
                                    onClick={() => {
                                        console.log("New File");
                                    }}
                                />,
                                <DropdownItem
                                    text="New File"
                                    onClick={() => {
                                        console.log("New File");
                                    }}
                                />,
                                <DropdownItem
                                    text="New File"
                                    onClick={() => {
                                        console.log("New File");
                                    }}
                                />,
                            ]);
                        }}
                    />
                    <Button text="View" disabled={true} />
                    <Button text="Extra" disabled={true} />
                    <Button text="?" disabled={true} />
                </ButtonBar>
                <ButtonBar>
                    <ButtonIcon
                        src={`${ICONS_PATH}/progman.exe_14_143.ico`}
                        text="Back"
                        disabled={false}
                        isGrey={true}
                        onClick={() => goBack()}
                    />
                    <ButtonIcon
                        src={`${ICONS_PATH}/progman.exe_14_144.ico`}
                        text="Forward"
                        disabled={false}
                        isGrey={true}
                        onClick={() => goForward()}
                    />
                    <Icon
                        src={`${ICONS_PATH}/webcheck.dll_14_114.ico`}
                        isGrey={true}
                        height="16px"
                        width="16px"
                    />
                    <DividerVertical height="20px" />
                    <ButtonIcon src={`${ICONS_PATH}/home.png`} text="Home" isGrey={true} disabled={false} />
                    <ButtonIcon
                        src={`${ICONS_PATH}/explorer.exe_14_101.ico`}
                        text="Search"
                        isGrey={true}
                        disabled={false}
                    />
                    <ButtonIcon
                        src={`${ICONS_PATH}/shell32.dll_14_4.ico`}
                        text="Folders"
                        isGrey={true}
                        disabled={false}
                    />
                    <ButtonIcon
                        src={`${ICONS_PATH}/snmpsnap.dll_14_6504.ico`}
                        text="History"
                        isGrey={true}
                        disabled={false}
                    />
                    <DividerVertical height="20px" />
                    <Icon
                        src={`${ICONS_PATH}/syncui.dll_14_126.ico`}
                        isGrey={true}
                        height="16px"
                        width="16px"
                    />
                    <Icon
                        src={`${ICONS_PATH}/syncui.dll_14_127.ico`}
                        isGrey={true}
                        height="16px"
                        width="16px"
                    />
                    <Icon
                        src={`${ICONS_PATH}/compstui.dll_14_64003.ico`}
                        isGrey={true}
                        height="16px"
                        width="16px"
                    />
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
                        isGrey={true}
                        onClick={() => goTo(address)}
                    />
                </ButtonBar>
            </ButtonBarContainer>
            <ViewContainer />
        </WindowContent>
    );

    addView("25%", <FileExplorerOverview />, false);
    addView("75%", <FoldersView />, false);

    goTo(address);
}

document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    addView("25%", <FileExplorerOverview />);
});

init();
