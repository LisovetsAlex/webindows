import "./index.css";

export default function InfoBox(props) {
    return (
        <div className="InfoBox" style={{ width: props.width }}>
            <p>{props.text}</p>
        </div>
    );
}
