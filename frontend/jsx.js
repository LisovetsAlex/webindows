/** @jsx createElement */

const createElement = (tag, props, ...children) => {
    if (typeof tag === "function") return tag(props, ...children);
    const element = document.createElement(tag);

    Object.entries(props || {}).forEach(([name, value]) => {
        if (name.startsWith("on") && name.toLowerCase() in window) {
            element.addEventListener(name.toLowerCase().substring(2), value);
            return;
        }
        if (name === "className") {
            element.setAttribute("class", value);
            return;
        }
        if (name === "style" && typeof value === "object") {
            Object.keys(value).forEach((propName) => {
                const propValue = value[propName];
                element.style[propName] = propValue;
            });
            return;
        }
        element.setAttribute(name, value.toString());
    });

    children.forEach((child) => {
        appendChild(element, child);
    });

    return element;
};

const appendChild = (parent, child) => {
    if (Array.isArray(child)) child.forEach((nestedChild) => appendChild(parent, nestedChild));
    else parent.appendChild(child.nodeType ? child : document.createTextNode(child));
};

export { createElement, appendChild };
