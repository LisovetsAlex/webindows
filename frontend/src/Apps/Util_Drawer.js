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

function Drawer() {
    this.createForm = function (form) {
        const formElem = document.createElement("form");
        const labelsElems = new Array();
        const inputElems = new Array();
        const btnElem = document.createElement("button");

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

        btnElem.innerHTML = "Submit";
        btnElem.setAttribute("id", form.btnId);
        btnElem.classList = "winCl-Btn";
        btnElem.onclick = form.submit;
        btnElem.setAttribute("type", "button");

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
}
