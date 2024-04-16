import "./index.css";

export default function Link(props) {
    return (
        <a className="Link" href={props.href} onClick={props.onClick}>
            {props.text}
        </a>
    );
}
