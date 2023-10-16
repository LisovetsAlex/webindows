import {
    mouseX,
    mouseY,
    selectedWindow,
    isDragging,
    setSelectedwindow,
} from "./WebindowsWindowEvents";

/**
 * Updates the position of the mouse and adjusts the selected window accordingly.
 *
 * @param {Event} event - The mouse event object.
 * @return {undefined} This function does not return a value.
 */
export function tickMouse(event) {
    if (event.clientX <= window.innerWidth && event.clientX >= 20)
        mouseX = event.clientX;
    if (event.clientY <= window.innerHeight - 100 && event.clientY >= 10)
        mouseY = event.clientY;

    if (!isDragging) return;
    /*
    if (!isDragging) {
        const iframes = document.getElementsByTagName("iframe");
        for (let i = 0; i < iframes.length; i++) {
            iframes[i].style.scale = 1;
        }
        return;
    }

    const iframes = document.getElementsByTagName("iframe");
    for (let i = 0; i < iframes.length; i++) {
        iframes[i].style.scale = 0;
    }
*/
    selectedWindow.style.position = "absolute";
    selectedWindow.style.left =
        Number(mouseX - Number(selectedWindow.dataset.width) / 2) + "px";
    selectedWindow.style.top = mouseY - 10 + "px";
}

/**
 * Updates the time displayed on the clock task bar element.
 *
 * @param {None} None - This function does not take any parameters.
 * @return {None} None - This function does not return any value.
 */
export function tickTime() {
    let date = new Date();
    let clock = document.getElementById("id_clockTaskBar");
    clock.innerHTML = String(date.getHours()) + ":" + String(date.getMinutes());
}
