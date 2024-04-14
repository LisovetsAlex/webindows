import {
    FoldersMenu,
    FolderContainer,
    FolderItem,
    FileItem,
    ColumnDescription,
} from "@webindows/FolderContainer";
import { goTo, history } from "../history";

function FoldersView() {
    return <FoldersMenu id="id_FileExplorer_FoldersMenu" />;
}

function updateFoldersMenu(newFolders, newFiles) {
    const menu = document.getElementById("id_FileExplorer_FoldersMenu");

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
                <FileItem file={child} />
            ))}
        </FolderContainer>
    );
}

export { FoldersView, updateFoldersMenu };
