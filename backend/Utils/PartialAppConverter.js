function convertToPartialAppSettings(newData, oldData) {
    const obj = {};
    obj.name = newData.name === undefined ? oldData.name : newData.name;

    obj.settings = newData.settings === undefined ? oldData.settings : newData.settings;

    if (newData.settings === undefined) return obj;

    obj.settings.description = newData.settings.description === undefined ? oldData.settings.description : newData.settings.description;

    obj.settings.icon = newData.settings.icon === undefined ? oldData.settings.icon : newData.settings.icon;

    if (newData.settings.icon === undefined) return obj;

    obj.settings.icon.type = newData.settings.icon.type === undefined ? oldData.settings.icon.type : newData.settings.icon.type;
    obj.settings.icon.default = newData.settings.icon.default === undefined ? oldData.settings.icon.default : newData.settings.icon.default;

    obj.settings.defaultScale = newData.settings.defaultScale === undefined ? oldData.settings.defaultScale : newData.settings.defaultScale;

    if (newData.settings.defaultScale === undefined) return obj;

    obj.settings.defaultScale.width =
        newData.settings.defaultScale.width === undefined ? oldData.settings.defaultScale.width : newData.settings.defaultScale.width;
    obj.settings.defaultScale.height =
        newData.settings.defaultScale.height === undefined ? oldData.settings.defaultScale.height : newData.settings.defaultScale.height;

    return obj;
}

module.exports = { convertToPartialAppSettings };
