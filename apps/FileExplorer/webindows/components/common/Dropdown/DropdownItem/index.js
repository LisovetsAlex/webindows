export default function DropdownItem(props) {
    return (
        <div
            className="DropdownItem"
            onClick={(e) => {
                props.onClick(e);
                document.getElementsByClassName("Dropdown")[0].parentElement.disabled = false;
                document.getElementsByClassName("Dropdown")[0].parentElement.style.pointerEvents = "auto";
                document.getElementsByClassName("Dropdown")[0].parentElement.style.border = "0";
                document.getElementsByClassName("Dropdown")[0].remove();
            }}
        >
            {props.text}
        </div>
    );
}
