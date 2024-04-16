import "./index.css";

export default function InfoBox(props) {
    return (
        <div id={props.id} className="InfoBox" style={{ width: props.width }}>
            <p>{props.text}</p>
        </div>
    );
}
