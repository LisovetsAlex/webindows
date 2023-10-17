"use strict";

function Form(formid, labels, inputs, btnid, fc, ic, lc, btnc, submit) {
    this.formid = formid;
    this.labels = labels;
    this.idInputs = inputs;
    this.btnId = btnid;
    this.btnClass = btnc;
    this.formClass = fc;
    this.inputClass = ic;
    this.labelClass = lc;
    this.submit = submit;
}

function Drawer() {
    this.createForm = function (form) {
        const formElem = document.createElement("form");
        const labelsElems = new Array();
        const inputElems = new Array();
        const btnElem = document.createElement("button");

        formElem.setAttribute("id", form.formid);
        formElem.classList = form.formClass;

        form.labels.forEach((element) => {
            const label = document.createElement("label");

            label.innerHTML = element;
            label.classList = form.labelClass;

            labelsElems.push(label);
        });

        form.idInputs.forEach((element) => {
            const input = document.createElement("input");

            input.setAttribute("id", element);
            input.classList = form.inputClass;

            inputElems.push(input);
        });

        for (let i = 0; i < labelsElems.length; i++) {
            formElem.append(labelsElems.at(i));
            formElem.append(inputElems.at(i));
        }

        btnElem.innerHTML = "Submit";
        btnElem.setAttribute("id", form.btnId);
        btnElem.classList = form.btnClass;
        btnElem.onclick = form.submit;
        btnElem.setAttribute("type", "button");

        formElem.append(btnElem);

        return formElem;
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
