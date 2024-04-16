import { ASSETS_PATH } from "@webindows/connect/constants";

export default function MainAppView() {
    return (
        <div>
            <h1>This is a temporary view!</h1>
            <p>You can close it.</p>
            <img
                src={ASSETS_PATH + "/200w.gif"}
                style={{ width: "250px", display: "block", margin: "auto" }}
            />
        </div>
    );
}
