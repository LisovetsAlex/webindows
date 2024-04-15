"use strict";

let storage = new LocalStorage("values", ["calc", "save", "left", "right", "sortBtn", "list1", "list2"]);

let l1 = document.getElementById("list1");
let l2 = document.getElementById("list2");
let summ = document.getElementById("price");

function toRight(index) {
    let elem = l1.options[index];

    l2.append(elem);
    summ.dataset.summe = Number(summ.dataset.summe) + Number(elem.dataset.price);
}

function toLeft(index) {
    let elem = l2.options[index];

    l1.append(elem);
    summ.dataset.summe = Number(summ.dataset.summe) - Number(elem.dataset.price);
}

function calculate() {
    summ.value = Number(summ.dataset.summe) + ",00";
}

function sortList() {
    let arrNames = new Array();
    let obj = {};
    for (let i = 0; i < l1.options.length; i++) {
        obj[`${l1.options[i].innerHTML}`] = l1.options[i];
        arrNames.push(l1.options[i].innerHTML);
    }
    arrNames.sort();
    for (let i = arrNames.length; i >= 0; i--) l1.prepend(obj[arrNames[i]]);
}

function loadSaved() {
    storage.load(itemsLoaded);
}

function itemsLoaded(arrTrt) {
    for (let i = 0; i < l1.options.length; i++) {
        for (let j = 0; j < arrTrt.length; j++) {
            if (String(l1.options[i].value) == String(arrTrt[j])) {
                toRight(i);
            }
        }
    }
}

function saveSelection() {
    let arr = Array.from(l2.options).map((option) => option.value);

    storage.save(arr);
}
