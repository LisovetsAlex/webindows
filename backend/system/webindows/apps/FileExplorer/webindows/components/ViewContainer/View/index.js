import CloseBar from "../CloseBar";
import removeView from "../removeView";

export default function View(props, ...children) {
    return (
        <div
            id={props.id}
            className="winCl-HardInsetShadow View"
            style={{ width: props.width }}
            onContextmenu={(e) => e.preventDefault()}
        >
            {props.isClosable && <CloseBar onClick={() => removeView(props.id)} />}
            {children}
        </div>
    );
}
