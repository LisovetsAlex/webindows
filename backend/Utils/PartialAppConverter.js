function convertToPartialAppSettings(newValue, oldValue) {
    const obj = {
        name: newValue.name ?? oldValue.name,
        owner_id: newValue.owner_id ?? oldValue.owner_id,
        start_url: newValue.start_url ?? oldValue.start_url,
        settings: {
            description: newValue.settings?.description ?? oldValue.settings.description,
            icon: newValue.settings?.icon ?? oldValue.settings.icon,
            defaultScale: {
                width: newValue.settings?.defaultScale?.width ?? oldValue.settings.defaultScale.width,
                height: newValue.settings?.defaultScale?.height ?? oldValue.settings.defaultScale.height,
            },
        },
    };
    return obj;
}

module.exports = { convertToPartialAppSettings };
