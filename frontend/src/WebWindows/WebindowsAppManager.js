const openedApps = new Array(0);

export function openApp(name) {
    if (isAppOpened(name)) return;
    openedApps.push(name);
}

export function isAppOpened(name) {
    for (let i = 0; i < openedApps.length; i++) {
        if (String(openedApps[i].name) == String(name)) return;
    }
}

export { openedApps };
