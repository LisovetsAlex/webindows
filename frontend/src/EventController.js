/**
 * Event
 * @param {string} name - Unique name for the event
 * @param {string} event - The name of the html event
 * @param {function} callback - The callback function that will be executed when the event is triggered
 */
export class Event {
    constructor(name, event, callback) {
        this.name = name;
        this.event = event;
        this.callback = callback;
    }
}

/**
 * Handles window events
 */
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
            if (e.data.request === "AddEvent") {
                this.addEvent({
                    name: e.data.event.name,
                    event: e.data.event.event,
                    callback: this.stringToFunction(
                        e.data.event.callback,
                        e.data.event.dependencies,
                        e.source
                    ),
                });
                return;
            }
            if (e.data.request === "AddFrameEvent") {
                this.addFrameEvent({
                    name: e.data.event.name,
                    event: e.data.event.event,
                    callback: this.stringToFunction(
                        e.data.event.callback,
                        e.data.event.dependencies,
                        e.source
                    ),
                });
                return;
            }
            if (e.data.request === "RemoveEvent") {
                this.removeEvent({
                    name: e.data.name,
                });
                return;
            }
            if (e.data.request === "RemoveFrameEvent") {
                this.removeFrameEvent({
                    name: e.data.name,
                });
                return;
            }
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

    /**
     * Adds the given event
     * @param {Event} obj - The event object
     */
    addEvent(obj) {
        if (this.events.includes(obj)) {
            this.events[this.events.indexOf(obj)] = obj;
            return;
        }
        this.events.push(obj);
    }

    /**
     * The given iframe will trigger all added events.
     *
     * Iframes act like a separate document and normal window. events don't trigger on them,
     * so we need to get their document and trigger events there too.
     */
    addFrame(iframe) {
        this.iframes.push(iframe.contentDocument || iframe.contentWindow.document);
        this.initEvents();
    }

    /**
     * Given events will be triggered only on iframes and not on the whole window
     */
    addFrameEvent(obj) {
        this.frameEvents.push(obj);
    }

    removeEvent(name) {
        for (let i = 0; i < this.events.length; i++) {
            if (this.events[i].name === name) {
                this.events.splice(i, 1);
            }
        }
    }

    removeFrameEvent(name) {
        for (let i = 0; i < this.frameEvents.length; i++) {
            if (this.frameEvents[i].name === name) {
                this.frameEvents.splice(i, 1);
            }
        }
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

    stringToFunction(funcString, deps, frame) {
        const dependencies = deps;
        let dependencyVariables = "";
        dependencyVariables += `const frame = document.querySelector('iframe[id="${frame.frameElement.id}"]')?.contentWindow.document;\n`;
        dependencyVariables += `if(!frame) return;\n`;

        Object.keys(dependencies).forEach((key) => {
            if (dependencies[key] instanceof Array) {
                if (dependencies[key].length <= 0) {
                    dependencyVariables += `const ${key} = []; \n`;
                    return;
                }
                if (dependencies[key][0]._isHTML) {
                    dependencyVariables += `const ${key} = [];\n`;
                    dependencies[key].forEach((item, index) => {
                        dependencyVariables += `const ${key}_${index} = frame.getElementById("${item.id}");\n`;
                        dependencyVariables += `if (${key}_${index}) ${key}.push(${key}_${index});\n`;
                    });
                    return;
                }
                dependencyVariables += `const ${key} = ${dependencies[key]};\n`;
                return;
            }
            if (typeof dependencies[key] === "number") {
                dependencyVariables += `const ${key} = ${dependencies[key]};\n`;
                return;
            }
            if (dependencies[key] instanceof Object) {
                dependencyVariables += `const ${key} = ${dependencies[key]};\n`;
                return;
            }
            if (dependencies[key]._isHTML) {
                dependencyVariables += `const ${key} = frame.getElementById("${dependencies[key].id}");\n`;
                return;
            }
            return (dependencyVariables += `const ${key} = "${dependencies[key]}";\n`);
        });

        const reconstructedCallback = new Function(
            "event",
            `
            ${dependencyVariables}
            ${funcString.replace(/\bdocument\b/g, "frame")}
            callback(event);
            `
        );

        return reconstructedCallback;
    }
}
