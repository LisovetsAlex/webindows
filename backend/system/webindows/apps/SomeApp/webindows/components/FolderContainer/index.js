import "./index.css";
import FoldersMenu from "./FoldersMenu";
import FolderItem from "./FoldersMenu/FolderItem";
import FileItem from "./FoldersMenu/FileItem";
import ColumnDescription from "./FoldersMenu/ColumnDescription";

function FolderContainer(props, ...children) {
    return <div className="winCl-FolderWrapper">{children}</div>;
}

export { FolderContainer, FoldersMenu, FolderItem, FileItem, ColumnDescription };
