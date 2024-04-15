import "./index.css";

export default function Link(props) {
    return (
        <a
            id={props.id}
            className="Link"
            href={props.href}
            onClick={props.onClick}
        >
            {props.text}
        </a>
    );
}
