"use strict";

let winHand = new WindowHandler();
winHand.initLoad();

function Tick(event) {
    winHand.UpdateTime();
    winHand.TickMouse(event);
}

function StartDrag(id) {
    winHand.Drag(id);
}

function StartDrop() {
    winHand.Drop();
}

function CloseApp(id) {
    winHand.CloseApp(id);
}

function ExpandWindow(id) {
    winHand.ExpandWindow(id);
}

function MinimizeWindow(id) {
    winHand.MinimizeWindow(id);
}

function OpenApp(name, html) {
    winHand.OpenApp(name, html);
}

function SetBgImage(file) {
    winHand.SetBgImage(file);
}
