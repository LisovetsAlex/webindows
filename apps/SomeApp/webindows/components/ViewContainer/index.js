import "./index.css";
import View from "./View";
import addView from "./addView";
import windowEvents from "@webindows/connect/WebindowsMessageReceiver";
import { spreadValueAcrossArray } from "@webindows/utils/math";

function ViewContainer(props, ...children) {
    return <div className="ViewContainer">{children}</div>;
}

let windowWidthStart = 0;
let savedWidths = [];

windowEvents.onWindowBeforeExpand((data) => {
    saveViewWidths(data);
});

windowEvents.onWindowBeforeUnexpand((data) => {
    saveViewWidths(data);
});

windowEvents.onWindowResizeStart((data) => {
    saveViewWidths(data);
});

windowEvents.onWindowResizeEnd(() => {
    clearViewWidths();
});

windowEvents.onWindowResize((data) => {
    adjustViewSizes(data);
});

windowEvents.onWindowExpand((data) => {
    adjustViewSizes(data);
    clearViewWidths();
});

windowEvents.onWindowUnexpand((data) => {
    adjustViewSizes(data);
    clearViewWidths();
});

function clearViewWidths() {
    windowWidthStart = 0;
    savedWidths = [];
}

function saveViewWidths(data) {
    windowWidthStart = data.windowSize.width;
    const subViews = document.getElementsByClassName("View");
    for (let i = 0; i < subViews.length; i++) {
        savedWidths.push(parseInt(window.getComputedStyle(subViews[i]).getPropertyValue("width")));
    }
}

function adjustViewSizes(data) {
    const windowWidth = data.windowSize.width;
    const subViews = document.getElementsByClassName("View");
    const newWidths = [];
    for (let i = 0; i < subViews.length; i++) {
        const currentWidth = savedWidths[i];
        const currentWidthPrec = currentWidth / windowWidthStart;
        const newWidth = windowWidth * currentWidthPrec;
        newWidths.push(newWidth);
    }

    const diff = windowWidth - newWidths.reduce((a, b) => a + b, 0);
    const adjustedWidths = spreadValueAcrossArray(diff, newWidths);

    for (let i = 0; i < subViews.length; i++) {
        subViews[i].style.width = adjustedWidths[i] - 8 + "px";
        if (i == subViews.length - 1) subViews[i].style.width = adjustedWidths[i] - 4 * (i + 1) + "px";
    }
}

export { View, addView, ViewContainer };
