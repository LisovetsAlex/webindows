function convertToPartialApp(newData, oldData) {
    const obj = {};
    obj.name = newData.name === undefined ? oldData.name : newData.name;
    obj.html = newData.html === undefined ? oldData.html : newData.html;
    obj.img = newData.img === undefined ? oldData.img : newData.img;
    obj.settings = newData.settings === undefined ? oldData.settings : newData.settings;

    if (newData.settings !== undefined) {
        obj.settings.isFullScreen = newData.settings.isFullScreen === undefined ? oldData.settings.isFullScreen : newData.settings.isFullScreen;

        obj.settings.position = newData.settings.position === undefined ? oldData.settings.position : newData.settings.position;

        if (newData.settings.position !== undefined) {
            obj.settings.position.x = newData.settings.position.x === undefined ? oldData.settings.position.x : newData.settings.position.x;
            obj.settings.position.y = newData.settings.position.y === undefined ? oldData.settings.position.y : newData.settings.position.y;
        }

        obj.settings.scale = newData.settings.scale === undefined ? oldData.settings.scale : newData.settings.scale;

        if (newData.settings.scale !== undefined) {
            obj.settings.scale.width = newData.settings.scale.width === undefined ? oldData.settings.scale.width : newData.settings.scale.width;
            obj.settings.scale.height = newData.settings.scale.height === undefined ? oldData.settings.scale.height : newData.settings.scale.height;
        }
    }

    return obj;
}

module.exports = { convertToPartialApp };
