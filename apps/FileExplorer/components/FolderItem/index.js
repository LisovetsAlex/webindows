import { ICONS_PATH } from "../constants";

export default function FolderItem(props) {
    return (
        <div className="winCl-FolderItem" onClick={props.onClick}>
            <img
                src={ICONS_PATH + props.metadata.other.icon}
                className="winCl-Icon"
                style={{ width: "16px", height: "16px" }}
            />
            <p>{props.metadata.name}</p>
        </div>
    );
}
