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
    sendRequest(
        "http://localhost:8080/demo-1.0-SNAPSHOT/api/products",
        (res) => {
            const window = document.getElementById("id_Shower");
            window.childNodes.forEach((element) => {
                element.remove();
            });
            const draw = new Drawer();
            console.log(JSON.parse(res).list[0].name);
            window.append(draw.createList(JSON.parse(res).list));
        }
    );
}
function addProduct() {
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;

    sendRequest(
        `http://localhost:8080/demo-1.0-SNAPSHOT/api/products/add?name=${name}&price=${price}`,
        (res) => {
            document.getElementById("id_Shower").innerHTML = res;
        }
    );
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
        "submit",
        "form",
        "winCl-Input",
        "",
        "winCl-Btn",
        () => addProduct()
    );

    window.append(draw.createForm(form));
}
