class WebindowsMessageReceiver {
    onWindowResize(callback) {
        window.addEventListener("message", (e) => {
            if (e.data.event == "window_resize") {
                callback(e.data);
            }
        });
    }

    onWindowResizeStart(callback) {
        window.addEventListener("message", (e) => {
            if (e.data.event == "window_resize_start") {
                callback(e.data);
            }
        });
    }

    onWindowResizeEnd(callback) {
        window.addEventListener("message", (e) => {
            if (e.data.event == "window_resize_end") {
                callback(e.data);
            }
        });
    }

    onWindowBeforeExpand(callback) {
        window.addEventListener("message", (e) => {
            if (e.data.event == "window_before_expand") {
                callback(e.data);
            }
        });
    }

    onWindowExpand(callback) {
        window.addEventListener("message", (e) => {
            if (e.data.event == "window_expand") {
                callback(e.data);
            }
        });
    }

    onWindowBeforeUnexpand(callback) {
        window.addEventListener("message", (e) => {
            if (e.data.event == "window_before_unexpand") {
                callback(e.data);
            }
        });
    }

    onWindowUnexpand(callback) {
        window.addEventListener("message", (e) => {
            if (e.data.event == "window_unexpand") {
                callback(e.data);
            }
        });
    }

    onWindowOpen(callback) {
        window.addEventListener("message", (e) => {
            if (e.data.event == "window_open") {
                callback(e.data);
            }
        });
    }

    onWindowClose(callback) {
        window.addEventListener("message", (e) => {
            if (e.data.event == "window_close") {
                callback(e.data);
            }
        });
    }
}

const windowEvents = new WebindowsMessageReceiver();

export default windowEvents;
