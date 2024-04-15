import { ICONS_PATH } from "@webindows/connect/constants";

export default function FolderItem(props) {
    return (
        <div className="winCl-FolderItem" onDblClick={props.onDblClick}>
            <img
                src={ICONS_PATH + props.metadata.other.icon}
                className="winCl-Icon"
                style={{ width: "16px", height: "16px" }}
            />
            {props.metadata.name}
        </div>
    );
}
