export default function removeView(id) {
    const view = document.getElementById(id);
    const viewWidth = parseInt(window.getComputedStyle(view).getPropertyValue("width"));
    const subViews = document.getElementsByClassName("View");
    let prevView;
    let resizeView;
    for (let i = 0; i < subViews.length; i++) {
        if (subViews[i].id === id) {
            prevView = subViews[i - 1];
            resizeView = document.getElementsByClassName(`ViewResizeHandleLeft`)[i - 1];
            break;
        }
    }
    const prevViewWidth = parseInt(window.getComputedStyle(prevView).getPropertyValue("width"));
    prevView.style.width = prevViewWidth + viewWidth + 12 + "px";

    if (resizeView) resizeView.remove();
    if (view) view.remove();
}
