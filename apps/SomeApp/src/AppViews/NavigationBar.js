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
        </ButtonBarContainer>
    );
}
