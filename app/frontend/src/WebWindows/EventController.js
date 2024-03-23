export class Event {
    constructor(name, event, callback) {
        this.name = name;
        this.event = event;
        this.callback = callback;
    }
}

export default class EventHandler {
    constructor() {
        this.events = new Array();
        this.frameEvents = new Array();
        this.iframes = new Array();
        this.initEvents();
    }

    initEvents() {
        // prettier-ignore
        const events = ["abort", "animationcancel", "animationend", "animationiteration", "animationstart", "auxclick", "beforeinput", "blur", "cancel", "canplay", "canplaythrough", "change", "click", "close", "contextmenu", "cuechange", "dblclick", "drag", "dragend", "dragenter", "dragexit", "dragleave", "dragover", "dragstart", "drop", "durationchange", "emptied", "ended", "error", "focus", "focusin", "focusout", "formdata", "gotpointercapture", "input", "invalid", "keydown", "keypress", "keyup", "load", "loadeddata", "loadedmetadata", "loadstart", "lostpointercapture", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseout", "mouseover", "mouseup","pause", "play", "playing", "pointercancel", "pointerdown", "pointerenter", "pointerleave", "pointermove", "pointerout", "pointerover", "pointerup", "progress", "ratechange", "reset", "resize", "scroll", "securitypolicyviolation", "seeked", "seeking", "select", "selectionchange", "selectstart", "stalled", "submit", "suspend", "textInput", "timeupdate", "toggle", "touchcancel", "touchend", "touchmove", "touchstart", "transitioncancel", "transitionend", "transitionrun", "transitionstart", "volumechange", "waiting", "wheel"];

        window.addEventListener("message", (e) => {
            this.callEvents(e, "message");
        });

        for (const eventName of events) {
            window.addEventListener(eventName, (e) => {
                this.callEvents(e, eventName);
            });
            for (const iframe of this.iframes) {
                if (eventName === "mousemove") continue;
                iframe.addEventListener(eventName, (e) => {
                    this.callEvents(e, eventName);
                });
            }
        }

        for (const eventName of events) {
            window.addEventListener(eventName, (e) => {
                this.callFrameEvents(e, eventName);
            });
            for (const iframe of this.iframes) {
                iframe.addEventListener(eventName, (e) => {
                    this.callFrameEvents(e, eventName);
                });
            }
        }
    }

    addEvent(obj) {
        this.events.push(obj);
        this.initEvents();
    }

    addFrame(iframe) {
        this.iframes.push(
            iframe.contentDocument || iframe.contentWindow.document
        );
        this.initEvents();
    }

    addFrameEvent(obj) {
        this.frameEvents.push(obj);
        this.initEvents();
    }

    removeEvent(name) {
        for (let i = 0; i < this.events.length; i++) {
            if (this.events[i].name === name) {
                this.events.splice(i, 1);
            }
        }
        this.initEvents();
    }

    removeFrameEvent(name) {
        for (let i = 0; i < this.frameEvents.length; i++) {
            if (this.frameEvents[i].name === name) {
                this.frameEvents.splice(i, 1);
            }
        }
        this.initEvents();
    }

    callEvents(e, name) {
        for (let i = 0; i < this.events.length; i++) {
            if (this.events[i].event === name) {
                this.events[i].callback(e);
            }
        }
    }

    callFrameEvents(e, name) {
        for (let i = 0; i < this.frameEvents.length; i++) {
            if (this.frameEvents[i].event === name) {
                this.frameEvents[i].callback(e);
            }
        }
    }
}
