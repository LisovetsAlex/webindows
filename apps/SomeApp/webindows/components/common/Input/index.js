import "./index.css";

export default function Input(props) {
    return (
        <input
            id={props.id}
            className="Input"
            placeholder={props.placeholder}
            value={props.value}
            type={props.type}
            style={{ width: props.width }}
            onInput={props.onInput}
        />
    );
}
