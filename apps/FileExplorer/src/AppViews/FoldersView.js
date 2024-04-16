import {
    FoldersMenu,
    FolderContainer,
    FolderItem,
    FileItem,
    ColumnDescription,
} from "@webindows/FolderContainer";
import { goTo, history } from "../history";
import { changeBackground } from "@webindows/connect/webindowsEvents";

function FoldersView() {
    return <FoldersMenu id="id_FileExplorer_FoldersMenu" />;
}

function updateFoldersMenu(newFolders, newFiles) {
    const menu = document.getElementById("id_FileExplorer_FoldersMenu");
    const address = history.getCurrentPoint();

    while (menu.firstChild) {
        menu.removeChild(menu.firstChild);
    }

    menu.append(
        <FolderContainer>
            <ColumnDescription />
            {newFolders.data.map((child) => (
                <FolderItem
                    metadata={child}
                    onDblClick={() => goTo(history.getCurrentPoint() + "/" + child.name)}
                />
            ))}
            {newFiles.map((child) => (
                <FileItem
                    file={child}
                    onDblClick={() => changeBackground(address + "/" + child.name + child.extension)}
                />
            ))}
        </FolderContainer>
    );
}

export { FoldersView, updateFoldersMenu };
