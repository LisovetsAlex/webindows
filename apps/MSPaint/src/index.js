import WindowContent from "@webindows/components/WindowContent";
import { ViewContainer, addView } from "@webindows/Views";
import WebindowsAppOverview from "./AppViews/WebindowsAppOverview";
import NavigationBar from "./AppViews/NavigationBar";
import MainAppView from "./AppViews/MainAppView";

function init() {
    const root = document.getElementsByTagName("body")[0];

    root.append(
        <WindowContent>
            <NavigationBar />
            <ViewContainer />
        </WindowContent>
    );

    addView("25%", <WebindowsAppOverview />, false);
    addView("75%", <MainAppView />, false);
}

document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
});

init();

let prevMouse = { x: 0, y: 0 };
let mouse = { x: 0, y: 0 };
const c = document.getElementById("id_MSPAINT_Canvas");
let isMouseDown = false;

const drawPixel = (e) => {
    const c = document.getElementById("id_MSPAINT_Canvas");
    const offset = 8;
    const kursiv = 0;
    const x = mouse.x - offset;
    const y = mouse.y - offset;
    const prevX = prevMouse.x - offset - kursiv;
    const prevY = prevMouse.y - offset + kursiv;
    console.log("now: ", x, y);
    console.log("prev: ", prevX, prevY);
    let ctx = c.getContext("2d");
    ctx.lineWidth = 1;
    ctx.strokeStyle = "black";
    ctx.moveTo(x, y);
    ctx.lineTo(prevX, prevY);
    ctx.stroke();
};

c.addEventListener("mousemove", (e) => {
    const mousePos = getMousePos(c, e);
    mouse.x = mousePos.x;
    mouse.y = mousePos.y;
    if (isMouseDown) drawPixel(e);
    prevMouse.x = mousePos.x;
    prevMouse.y = mousePos.y;
});

const getMousePos = (canvas, e) => {
    return {
        x: e.clientX - canvas.offsetLeft,
        y: e.clientY - canvas.offsetTop,
    };
};

c.addEventListener("mousedown", (e) => {
    isMouseDown = true;
});
c.addEventListener("mouseup", (e) => {
    isMouseDown = false;
});
