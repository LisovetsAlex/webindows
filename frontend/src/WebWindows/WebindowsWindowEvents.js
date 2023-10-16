let selectedWindow = undefined;
let mouseX = 0;
let mouseY = 0;
let isDragging = false;

/**
 * Sets the selected window for dragging and updates the z-index of all windows.
 *
 * @param {string} id - The ID of the window to be selected.
 * @return {undefined} This function does not return a value.
 */
export function drag(id) {
    setSelectedwindow(id);

    /*
    for (let i = 0; i < this.openApps.length; i++) {
        if (this.openApps[i].name == id && this.openApps[i].isFullScreen)
            this.ExpandWindow(id);
    }*/

    let arr = document.getElementsByClassName("winCl-BasicWindow");
    for (let i = 0; i < arr.length; i++) {
        arr[i].style["z-index"] = 1;
    }
    if (!selectedWindow.classList.contains("winCl-ShortcutBtn"))
        selectedWindow.style["z-index"] = 2;

    isDragging = true;
}

/**
 * Drops the item so that it can be dragged again.
 *
 * @param {type} paramName - description of parameter
 * @return {type} description of return value
 */
export function drop() {
    selectedWindow = undefined;
    isDragging = false;
}

/**
 * Sets the selected window element based on the provided id.
 *
 * @param {string} id - The id of the window element to select.
 */
export function setSelectedwindow(id) {
    selectedWindow = document.getElementById(id);
}

export { selectedWindow, mouseX, mouseY, isDragging };
