"use strict";

function LocalStorage(name, LoadLockItems) {
    this.name = name;
    this.lockLoadItems = LoadLockItems;
    this.isLoading = false;

    this.load = function (onLoadedItemsCallback) {
        let str = localStorage[`${this.name}`];
        let arrTrg = str.split(";");

        this.toggleLoading();
        setTimeout(() => {
            this.toggleLoading();
            onLoadedItemsCallback(arrTrg);
        }, 1000);
    };

    this.save = function (arr) {
        let str = "";

        for (let i = 0; i < arr.length; i++) {
            str += arr[i];
            str += ";";
        }
        localStorage[`${this.name}`] = str;
    };

    this.toggleLoading = function () {
        let elem;

        if (this.isLoading == true) this.isLoading = false;
        else if (this.isLoading == false) this.isLoading = true;

        for (let i = 0; i < this.lockLoadItems.length; i++) {
            elem = document.getElementById(this.lockLoadItems[i]);
            if (this.isLoading == false) {
                elem.classList.remove("winCl-Disabled");
                continue;
            }

            elem.classList.add("winCl-Disabled");
        }
    };
}
