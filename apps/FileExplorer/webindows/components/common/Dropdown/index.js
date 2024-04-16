import "./index.css";

export default function createDropdown(anchorId, id, content) {
    const anchorElem = document.getElementById(anchorId);

    document.addEventListener("mouseup", (e) => {
        if (e.target.classList.contains("DropdownItem")) return;
        if (!document.getElementsByClassName("Dropdown")[0]) return;
        document.getElementsByClassName("Dropdown")[0].parentElement.disabled = false;
        document.getElementsByClassName("Dropdown")[0].parentElement.style.pointerEvents = "auto";
        document.getElementsByClassName("Dropdown")[0].parentElement.style.border = "0";
        document.getElementsByClassName("Dropdown")[0].remove();
    });

    const elem = (
        <div id={id} className="Dropdown winCl-BGColor winCl-HardOutsetShadow">
            {content}
        </div>
    );

    const anchorHeight = parseInt(window.getComputedStyle(anchorElem).getPropertyValue("height"));
    elem.style.top = anchorElem.offsetTop + anchorHeight + "px";
    elem.style.left = anchorElem.offsetLeft + "px";

    anchorElem.append(elem);
    anchorElem.disabled = true;
    anchorElem.style.color = "var(--black)";
    anchorElem.style.border = "2px dotted var(--black)";
    anchorElem.style.pointerEvents = "none";
}
