function Event(name, callback) {
    // name of the event
    this.name = name;

    // function on event fire
    this.callback = callback;
}

export default function EventHandler() {
    /**
     * List of events
     */
    this.events = new Array();

    /**
     * Add a listener for a specific event.
     *
     * @param {type} event - Event type object
     * @return {type} description of what is returned
     */
    this.addListener = function (event) {
        document.addEventListener(event.name, event.callback);
    };
}
