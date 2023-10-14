"use strict";

function sortText(comparator) {
  let l1 = document.getElementById("id_list");
  let obj = {};
  let arr = new Array();

  for (let i = 0; i < l1.childNodes.length; i++) {
    obj[`${String(l1.childNodes[i].innerHTML).toLowerCase()}`] =
      l1.childNodes[i];
    arr.push(`${l1.childNodes[i].innerHTML}`.toLowerCase());
  }
  arr.sort(comparator);

  let j = 0;
  for (let i = 0; i < l1.childNodes.length; i++) {
    if (obj[arr[j]] != undefined) {
      l1.prepend(obj[arr[j]]);
      j++;
    }
  }
}

function sortValue(comparator) {
  let l1 = document.getElementById("id_list");
  let obj = {};
  let arr = new Array();

  for (let i = 0; i < l1.childNodes.length; i++) {
    obj[`${l1.childNodes[i].value}`] = l1.childNodes[i];
    arr.push(l1.childNodes[i].value);
  }
  arr.sort(comparator);
  for (let i = arr.length; i >= 0; i--) l1.prepend(obj[arr[i]]);
}

function sortBy(byValue) {
  if (byValue)
    sortValue((a, b) => {
      return a - b;
    });
  if (!byValue)
    sortText((a, b) => {
      let x = a.toLowerCase();
      let y = b.toLowerCase();
      if (x > y) {
        return -1;
      }
      if (x < y) {
        return 1;
      }
      return 0;
    });
}
