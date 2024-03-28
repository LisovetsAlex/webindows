function Controller(path) {
    return function (target) {
        target.prototype.basePath = path;
    };
}

module.exports = Controller;
