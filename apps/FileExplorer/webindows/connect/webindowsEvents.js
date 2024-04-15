function addEvent(event) {
    const callbackString = event.callback.toString();
    window.parent.postMessage(
        {
            request: "AddEvent",
            event: { ...event, callback: callbackString },
        },
        "*"
    );
}

function addFrameEvent(event) {
    const callbackString = event.callback.toString();
    const deps = {
        ...event.dependencies,
    };

    for (const [key, value] of Object.entries(event.dependencies)) {
        if (value instanceof HTMLCollection) {
            deps[key] = [];
            for (const element of value) {
                if (element.id) {
                    deps[key].push({
                        id: element.id,
                        _isHTML: true,
                    });
                }
            }
        }
        if (value instanceof HTMLElement) {
            deps[key] = {
                id: value.id,
                _isHTML: true,
            };
        }
    }

    window.parent.postMessage(
        {
            request: "AddFrameEvent",
            event: {
                name: event.name,
                event: event.event,
                dependencies: deps,
                callback: callbackString,
            },
        },
        "*"
    );
}

function removeEvent(name) {
    window.parent.postMessage(
        {
            request: "RemoveEvent",
            name: name,
        },
        "*"
    );
}

function removeFrameEvent(name) {
    window.parent.postMessage(
        {
            request: "RemoveFrameEvent",
            name: name,
        },
        "*"
    );
}

export { addEvent, addFrameEvent, removeEvent, removeFrameEvent };
