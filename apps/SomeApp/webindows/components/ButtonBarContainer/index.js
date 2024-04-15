import ButtonBar from "./ButtonBar";
import "./index.css";

function ButtonBarContainer(props, ...children) {
    return (
        <div className="winCl-HardInsetShadow">
            {children.map((child) => {
                return <div>{child}</div>;
            })}
        </div>
    );
}

export { ButtonBar, ButtonBarContainer };
