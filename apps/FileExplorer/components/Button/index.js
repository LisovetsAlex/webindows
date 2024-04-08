export default function Button(props) {
    return (
        <button className="winCl-Button" disabled={props.disabled} onClick={props.onClick}>
            {props.text}
        </button>
    );
}
