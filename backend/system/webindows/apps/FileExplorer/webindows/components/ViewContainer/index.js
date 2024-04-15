import "./index.css";
import View from "./View";
import addView from "./addView";

function ViewContainer(props, ...children) {
    return <div className="ViewContainer">{children}</div>;
}

export { View, addView, ViewContainer };
