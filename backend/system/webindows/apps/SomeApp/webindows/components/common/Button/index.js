import "./index.css";

export default function Button(props) {
    return (
        <button
            id={props.id}
            className="Button"
            disabled={props.disabled}
            onClick={props.onClick}
        >
            {props.text}
        </button>
    );
}
