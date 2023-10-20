const baseurl = "http://localhost:8080/demo-1.0-SNAPSHOT/api/products";

const draw = new Drawer();
let selectedOption;
let arr = new Array();
const selectedValues = {};

function init() {
    createLeftMenu();
}

function createLeftMenu() {
    const grp = document.getElementById("left");
    const buttons = new Array();
    buttons.push(new Button("Request", "Request", requestAllProducts));
    buttons.push(new Button("Add", "Add", createProduct));
    buttons.push(new Button("Edit", "Edit", createEditProduct));
    buttons.push(new Button("Remove", "Remove", removeProduct));
    grp.append(draw.createButtonList("btnGroup", buttons, "100%", "100%"));
}

function fillRightMenuWithList(list) {
    draw.clearFromChildren("id_Shower");
    const window = document.getElementById("id_Shower");
    const options = new Array();

    for (let i = 0; i < list.length; i++) {
        const option = new SelectOption(
            list[i].name,
            `${list[i].name}: ${list[i].value}`,
            list[i].value
        );
        options.push(option);
    }

    const selectList = new SelectList(
        "list",
        options,
        10,
        "100%",
        "150px",
        (elem, index) => {
            selectedOption = elem;
            selectedValues.index = index;
            selectedValues.name = arr[index].name;
            selectedValues.value = arr[index].value;
        }
    );
    window.append(draw.createSelectList(selectList));
}

function showResAsText(res) {
    document.getElementById("id_Shower").innerHTML = res;
}

function requestAllProducts() {
    draw.clearFromChildren("id_Shower");
    sendRequest(`${baseurl}`, (res) => {
        const resList = JSON.parse(res).list;
        fillRightMenuWithList(resList);
        arr = resList;
    });
}
function addProduct() {
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;

    sendRequest(`${baseurl}/add?name=${name}&price=${price}`, (res) => {
        showResAsText(res);
    });
}

function editProduct() {
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const id = selectedValues.index + 1;

    sendRequest(
        `${baseurl}/update?id=${id}&name=${name}&price=${price}`,
        (res) => {
            showResAsText(res);
        }
    );
}

function createProduct() {
    const window = document.getElementById("id_Shower");
    draw.clearFromChildren("id_Shower");

    const form = new Form(
        "form",
        ["Name:", "Price:"],
        ["name", "price"],
        new Button("add", "Add", addProduct),
        "Add new product"
    );

    window.append(draw.createForm(form));
}

function createEditProduct() {
    const window = document.getElementById("id_Shower");
    draw.clearFromChildren("id_Shower");

    const form = new Form(
        "form",
        ["New Name:", "New Price:"],
        ["name", "price"],
        new Button("edit", "Edit", editProduct),
        `Edit: ${selectedOption.innerHTML}`
    );

    window.append(draw.createForm(form));
}

function removeProduct() {
    const id = selectedValues.index + 1;

    sendRequest(`${baseurl}/remove?id=${id}`, (res) => {
        showResAsText(res);
    });
}

init();
