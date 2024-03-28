const app = require("../main");

function Route(method, path) {
    return function (target, key, descriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function (req, res) {
            originalMethod.call(this, req, res);
        };

        if (!target.routes) {
            target.routes = [];
        }

        target.routes.push({ path, handler: descriptor.value, method: method.toLowerCase() });
    };
}

module.exports = Route;
