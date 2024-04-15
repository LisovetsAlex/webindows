import { ICONS_PATH, FILE_PATH } from "@webindows/connect/constants";

export default function FileItem(props) {
    if (!props.file) return <div></div>;
    return (
        <div className="winCl-FolderItem" onDblClick={props.onDblClick}>
            <div
                style={{ width: "60%", minWidth: "200px", display: "flex", alignItems: "center", gap: "4px" }}
            >
                <img
                    src={props.file.withPreview ? FILE_PATH + props.file.icon : ICONS_PATH + props.file.icon}
                    className="winCl-Icon"
                    style={{ width: "16px", height: "16px" }}
                />
                {props.file.name + props.file.extension}
            </div>
            <div style={{ width: "5%", minWidth: "50px" }}>{props.file.extension}</div>
            <div style={{ width: "15%", minWidth: "100px" }}>{props.file.owner}</div>
            <div style={{ width: "20%", minWidth: "150px" }}>
                {(props.file.size / 1024).toFixed(2) + " KB"}
            </div>
        </div>
    );
}
