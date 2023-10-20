"use strict";

function Form(formid, labels, inputs, btn, title = "") {
    this.formid = formid;
    this.labels = labels;
    this.idInputs = inputs;
    this.btn = btn;
    this.title = title;
}
function Button(btnid, text, func) {
    this.btnId = btnid;
    this.text = text;
    this.f = func;
}

function SelectList(
    id,
    options,
    size,
    width,
    height,
    optionSelected = undefined
) {
    this.id = id;
    this.options = options;
    this.size = size;
    this.width = width;
    this.height = height;
    this.optionSelected = optionSelected;
}

function SelectOption(id, text, value) {
    this.id = id;
    this.text = text;
    this.value = value;
}

function Drawer() {
    /**
     * Creates a form element based on the given form object.
     *
     * @param {Form} form - The form object containing the form data.
     * @param {string} form.title - The title of the form.
     * @param {string} form.formid - The ID of the form element.
     * @param {Array} form.labels - An array of labels for the form fields.
     * @param {Array} form.idInputs - An array of IDs for the form input elements.
     * @param {Button} form.btn - The ButtonObject for the form button.
     * @return {HTMLElement} - The created form element.
     */
    this.createForm = function (form) {
        const formElem = document.createElement("form");
        const labelsElems = new Array();
        const inputElems = new Array();
        const btnElem = this.createButton(form.btn);
        const titleElem = document.createElement("p");

        titleElem.innerHTML = form.title;

        formElem.append(titleElem);

        formElem.setAttribute("id", form.formid);
        formElem.classList = "winCl-Form";

        form.labels.forEach((element) => {
            const label = document.createElement("label");

            label.innerHTML = element;
            label.classList = "winCl-Label";

            labelsElems.push(label);
        });

        form.idInputs.forEach((element) => {
            const input = document.createElement("input");

            input.setAttribute("id", element);
            input.classList = "winCl-Input";

            inputElems.push(input);
        });

        for (let i = 0; i < labelsElems.length; i++) {
            const field = document.createElement("div");
            field.classList.add("winCl-Field");
            field.append(labelsElems.at(i));
            field.append(inputElems.at(i));

            formElem.append(field);
        }

        formElem.append(btnElem);

        return formElem;
    };

    /**
     * Create a button element based on the provided button object.
     *
     * @param {Button} btn - The button object containing the text, button ID, and click function.
     * @return {HTMLElement} The created button element.
     */
    this.createButton = function (btn) {
        const btnElem = document.createElement("button");
        btnElem.innerHTML = btn.text;
        btnElem.setAttribute("id", btn.btnId);
        btnElem.classList = "winCl-Btn";
        btnElem.onclick = btn.f;
        btnElem.setAttribute("type", "button");

        return btnElem;
    };

    this.remove = function (id) {
        const elem = document.getElementById(id);
        elem.remove();
    };

    /**
     * Creates a list element based on the given array of objects.
     *
     * @param {Array} list - The array of objects used to create the list.
     * @return {HTMLElement} - The newly created list element.
     */
    this.createList = function (list) {
        const ulElem = document.createElement("ul");

        ulElem.classList = "winCl-List";

        list.forEach((element) => {
            const keys = Object.keys(element);
            const item = document.createElement("li");
            for (const key of keys) {
                item.innerHTML += `${element[key]} `;
            }
            ulElem.append(item);
        });

        return ulElem;
    };

    /**
     * Creates a select list element based on the provided selectList object.
     *
     * @param {Object} selectList - The selectList object containing the properties for creating the select list.
     * @param {string} selectList.id - The id of the select list.
     * @param {number} selectList.size - The number of visible options in the select list.
     * @param {string} selectList.width - The width of the select list.
     * @param {string} selectList.height - The height of the select list.
     * @param {Array} selectList.options - An array of option objects for populating the select list.
     * @param {string} selectList.options[].id - The id of the option.
     * @param {string} selectList.options[].value - The value of the option.
     * @param {string} selectList.options[].text - The text of the option.
     * @param {function} selectList.optionSelected - The callback function to be called when an option is selected.
     * @return {HTMLElement} - The created select list element.
     */
    this.createSelectList = function (selectList) {
        const selectElem = document.createElement("select");

        selectElem.classList = "winCl-Selector";
        selectElem.setAttribute("id", selectList.id);
        selectElem.setAttribute("size", selectList.size);
        selectElem.style.width = selectList.width;
        selectElem.style.height = selectList.height;

        selectList.options.forEach((element) => {
            const option = document.createElement("option");
            option.setAttribute("id", element.id);
            option.setAttribute("value", element.value);
            option.classList = "winCl-Option";
            option.innerHTML = element.text;
            option.addEventListener("click", () => {
                let elem = selectElem.options[selectElem.selectedIndex];
                selectList.optionSelected(elem, selectElem.selectedIndex);
            });
            selectElem.append(option);
        });

        return selectElem;
    };

    /**
     * Creates a button list with the given parameters.
     *
     * @param {string} id - The id of the button group.
     * @param {Array} btnList - An array of Button objects representing the buttons.
     * @param {string} width - The width of the button group.
     * @param {string} height - The height of the button group.
     * @return {HTMLElement} - The created button group element.
     */
    this.createButtonList = function (id, btnList, width, height) {
        const group = document.createElement("div");

        group.classList = "winCl-BtnGroup";
        group.style.width = width;
        group.style.height = height;
        group.setAttribute("id", id);

        btnList.forEach((element) => {
            const btn = document.createElement("button");
            btn.setAttribute("id", element.id);
            btn.innerHTML = element.text;
            btn.classList = "winCl-Btn";
            btn.onclick = () => {
                element.f();
                group.childNodes.forEach((element) => {
                    element.disabled = false;
                });
                btn.disabled = true;
            };
            group.append(btn);
        });

        return group;
    };

    /**
     * Clear all child elements with the given id.
     *
     * @param {string} id - The id of the parent element.
     */
    this.clearFromChildren = function (id) {
        document.getElementById(id).childNodes.forEach((element) => {
            element.remove();
        });
    };
}
