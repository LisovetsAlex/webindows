export default function ButtonIcon(props) {
    return (
        <button className="winCl-ButtonIcon" disabled={props.disabled} onClick={props.onClick}>
            <img src={props.src} className="winCl-ButtonIcon__icon" />
            {props.text}
        </button>
    );
}
