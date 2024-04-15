import { ButtonBarContainer, ButtonBar } from "@webindows/ButtonBars";
import Button from "@webindows/components/common/Button";

export default function NavigationBar() {
    return (
        <ButtonBarContainer>
            <ButtonBar>
                <Button text="File" disabled={false} />
                <Button text="Edit" disabled={false} />
                <Button text="View" disabled={true} />
                <Button text="Extra" disabled={true} />
                <Button text="?" disabled={true} />
            </ButtonBar>
            <ButtonBar>
                <Button text="Download" disabled={false} onClick={download} />
                <Button text="Import" disabled={true} />
            </ButtonBar>
        </ButtonBarContainer>
    );
}

function download() {
    const c = document.getElementById("id_MSPAINT_Canvas");
    let image = c.toDataURL("image/jpg");

    let link = document.createElement("a");
    link.download = "canvas_image.jpg";
    link.href = image;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
