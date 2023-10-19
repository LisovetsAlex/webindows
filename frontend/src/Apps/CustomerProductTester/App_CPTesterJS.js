const baseurl = "http://localhost:8080/demo-1.0-SNAPSHOT/api/products";

const draw = new Drawer();
const grp = document.getElementById("left");
const buttons = new Array();
buttons.push(new Button("Request", "Request", requestAllProducts));
buttons.push(new Button("Add", "Add", createProduct));
buttons.push(new Button("Edit", "Edit", undefined));
buttons.push(new Button("Remove", "Remove", undefined));
grp.append(draw.createButtonList("btnGroup", buttons, "100%", "100%"));

const sendRequest = function (url, callback) {
    fetch(url)
        .then(function (response) {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.text();
        })
        .then(function (data) {
            callback(data);
        })
        .catch(function (error) {
            console.error("Fetch error: " + error);
        });
};

function requestAllProducts() {
    sendRequest(`${baseurl}`, (res) => {
        const window = document.getElementById("id_Shower");
        window.childNodes.forEach((element) => {
            element.remove();
        });

        const resList = JSON.parse(res).list;
        const draw = new Drawer();
        const options = new Array();

        for (let i = 0; i < JSON.parse(res).list.length; i++) {
            const option = new SelectOption(
                resList[i].name,
                `${resList[i].name}: ${resList[i].value}`,
                resList[i].value
            );
            options.push(option);
        }

        const list = new SelectList("list", options, 10, "100%", "150px");
        window.append(draw.createSelectList(list));
    });
}
function addProduct() {
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;

    sendRequest(`${baseurl}/add?name=${name}&price=${price}`, (res) => {
        document.getElementById("id_Shower").innerHTML = res;
    });
}

function createProduct() {
    const window = document.getElementById("id_Shower");
    window.childNodes.forEach((element) => {
        element.remove();
    });

    const draw = new Drawer();
    const form = new Form(
        "form",
        ["Name:", "Price:"],
        ["name", "price"],
        new Button("Add", "add", addProduct)
    );

    window.append(draw.createForm(form));
}
