import "./index.css";

export default function ButtonIcon(props) {
    return (
        <button className="ButtonIcon" disabled={props.disabled} onClick={props.onClick}>
            <img
                src={props.src}
                className="ButtonIcon__icon"
                style={{ filter: props.isGrey ? "grayscale(100%)" : "none" }}
            />
            {props.text}
        </button>
    );
}
