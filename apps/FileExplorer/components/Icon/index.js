export default function Icon(props) {
    return (
        <img
            src={props.src}
            className="winCl-Icon"
            style={{ width: props.width, height: props.height }}
            onClick={props.onClick}
        />
    );
}
