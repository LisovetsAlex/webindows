import "./index.css";

export default function Text(props) {
    return (
        <p id={props.id} className="winCl-Text">
            {props.text}
        </p>
    );
}
