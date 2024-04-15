import Icon from "@webindows/components/common/Icon";
import { ASSETS_PATH } from "@webindows/connect/constants";

export default function CloseBar(props) {
    return (
        <div className="CloseBar">
            <div
                className="winCl-HardOutsetShadow winCl-BGColor"
                style={{ width: "100%", height: "16px" }}
            ></div>
            <Icon
                className="winCl-HardOutsetShadow winCl-BGColor"
                src={ASSETS_PATH + "/Img_Button_Close.PNG"}
                onClick={props.onClick}
            />
        </div>
    );
}
