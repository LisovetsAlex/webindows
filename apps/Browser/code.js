"use strict";

function back() {
    window.history.back();
}

function forward() {
    window.history.forward();
}

function reload() {
    location.reload();
}

function go() {
    const url = document.getElementById("id_url").value;
    const iframe = document.getElementById("id_iframe");
    iframe.src = url;
}
