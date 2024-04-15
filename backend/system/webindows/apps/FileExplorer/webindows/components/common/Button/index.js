import "./index.css";

export default function Button(props) {
    return (
        <button className="Button" disabled={props.disabled} onClick={props.onClick}>
            {props.text}
        </button>
    );
}
