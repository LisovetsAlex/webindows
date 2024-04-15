import View from "./View";
import { subtractFrom, clamp } from "@webindows/utils/math";

/**
 * Add a new view to the view container.
 *
 * @param {number} initWidth - The initial width of the new view.
 * @param {HTMLElement} content - The content to be displayed in the new view.
 * @param {boolean} isClosable - Include a button to close the view.
 */
export default function addView(initWidth, content, isClosable = true) {
    const subWindowWrapper = document.getElementsByClassName("ViewContainer")[0];
    const subWindows = document.getElementsByClassName("View");
    const resizeHandleLeft = <div className="ViewResizeHandleLeft"></div>;
    const windowWidth = document.body.clientWidth;
    let desiredWidth = (parseInt(initWidth) * windowWidth) / 100;
    if (subWindows.length > 1) {
        const lastWindow = subWindows[subWindows.length - 1];
        const lastWindowWidth = parseInt(window.getComputedStyle(lastWindow).getPropertyValue("width"));
        if (lastWindowWidth < 175) return;
        const { x, y } = subtractFrom(desiredWidth, lastWindowWidth);
        desiredWidth = x;
        lastWindow.style.width = y - 4 + "px";
    }
    const id = `id_View_${subWindows.length + 1}`;
    const newSubWindow = <View id={id} width={desiredWidth - 8 + "px"} isClosable={isClosable}></View>;

    if (subWindows.length > 0) {
        subWindowWrapper.append(resizeHandleLeft);
    }
    newSubWindow.append(content);
    subWindowWrapper.append(newSubWindow);

    resizeHandleLeft.addEventListener("mousedown", () => {
        const subViews = document.getElementsByClassName("View");
        let subWindowCurrent = document.getElementById(`id_View_${subWindows.length - 1}`);
        let subWindowNext = document.getElementById(`id_View_${subWindows.length}`);
        for (let i = 0; i < subViews.length; i++) {
            if (subViews[i].id === id) {
                subWindowCurrent = subViews[i - 1];
                subWindowNext = subViews[i];
                break;
            }
        }
        const savedWidthCurrent = parseInt(
            window.getComputedStyle(subWindowCurrent).getPropertyValue("width")
        );
        const savedWidthNext = parseInt(window.getComputedStyle(subWindowNext).getPropertyValue("width"));

        const handle = (e) => {
            const widthDiff = e.clientX - (subWindowCurrent.offsetLeft + savedWidthCurrent);
            const newCurrentWidth = clamp(
                savedWidthCurrent + widthDiff,
                50,
                savedWidthCurrent + savedWidthNext - 50
            );
            const newNextWidth = clamp(
                savedWidthNext - widthDiff,
                50,
                savedWidthCurrent + savedWidthNext - 50
            );
            subWindowCurrent.style.width = newCurrentWidth + "px";
            subWindowNext.style.width = newNextWidth + "px";
        };

        document.addEventListener("mousemove", handle);
        document.addEventListener("mouseup", () => {
            document.removeEventListener("mousemove", handle);
        });
    });
}
