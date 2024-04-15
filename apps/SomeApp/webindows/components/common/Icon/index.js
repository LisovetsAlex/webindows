import "./index.css";

export default function Icon(props) {
    return (
        <img
            id={props.id}
            src={props.src}
            className={"Icon" + (props.className ? " " + props.className : "")}
            style={{
                width: props.width,
                height: props.height,
                filter: props.isGrey ? "grayscale(100%)" : "none",
            }}
            onClick={props.onClick}
        />
    );
}
