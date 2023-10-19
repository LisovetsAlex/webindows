"use strict";

function Form(formid, labels, inputs, btn) {
    this.formid = formid;
    this.labels = labels;
    this.idInputs = inputs;
    this.btn = btn;
}
function Button(btnid, text, func) {
    this.btnId = btnid;
    this.text = text;
    this.f = func;
}

function SelectList(id, options, size, width, height) {
    this.id = id;
    this.options = options;
    this.size = size;
    this.width = width;
    this.height = height;
}

function SelectOption(id, text, value) {
    this.id = id;
    this.text = text;
    this.value = value;
}

function Drawer() {
    this.createForm = function (form) {
        const formElem = document.createElement("form");
        const labelsElems = new Array();
        const inputElems = new Array();
        const btnElem = this.createButton(form.btn);

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

    this.createButton = function (btn) {
        const btnElem = document.createElement("button");
        btnElem.innerHTML = "Submit";
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
            selectElem.append(option);
        });

        return selectElem;
    };

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
}
