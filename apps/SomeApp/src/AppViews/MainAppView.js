import Button from "@webindows/components/common/Button";
import InfoBox from "@webindows/components/common/InfoBox";

export default function MainAppView() {
    let count = 0;

    return (
        <div>
            <h1>Main App View</h1>
            <p>This is the main app view!</p>
            <InfoBox id="count" text={count} />
            <Button
                text="Count up!"
                onClick={() => {
                    document.getElementById("count").innerHTML = ++count;
                }}
            />
            <Button
                text="Count down!"
                onClick={() => {
                    document.getElementById("count").innerHTML = --count;
                }}
            />
        </div>
    );
}
