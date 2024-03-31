function Route(method, path) {
    return function (target, key, descriptor) {
        if (!target.routes) {
            target.routes = [];
        }

        const originalMethod = descriptor.value;

        descriptor.value = function (instance, req, res) {
            originalMethod.call(instance, req, res);
        };

        target.routes.push({ path, handler: descriptor.value, method: method.toLowerCase() });
    };
}

module.exports = Route;
